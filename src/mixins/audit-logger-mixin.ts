import {juggler} from '@loopback/repository';
import _ from 'lodash';
import {getDiff} from 'recursive-diff';
import {QueueProducer, LogProcessingQueueMessageEventType, LogProcessingQueueMessage} from '../queues';
import { LoggingUtils } from '../utils/logging-utils';

export abstract class AuditLoggerMixin {
  public static async sendMessage(auditLog: any) {
    LoggingUtils.info(auditLog,'Audit Logs');
    const message = new LogProcessingQueueMessage();
    const eventType: LogProcessingQueueMessageEventType = LogProcessingQueueMessageEventType.AUDIT_LOG;
    message.eventType = eventType;
    message.data = auditLog;
    message.logDate = new Date();
    QueueProducer.sendMessageInLogProcessingQueue(message);
  }

  public static async register(modelClass: typeof juggler.PersistedModel) {
    /**
     * AuditLog for delete and deleteAll done
     */
    modelClass.observe('before delete', async ctx => {
      const {options, where} = ctx;
      const {logParams} = options;
      if (logParams && logParams.doAuditLog === true) {
        const fetchData: any = await ctx.Model.find({where: where},options);
        ctx.hookState.delete = fetchData;
      }
    });

    modelClass.observe('after delete', async ctx => {
      const {options, info, hookState} = ctx;
      const {logParams} = options;
      const logDelOpt = info.count >= 1 ? true : false;
      if (logParams && logParams.doAuditLog === true) {
        if (logDelOpt) {
          hookState.delete.forEach(async (element: any) => {
            const objectBeforeChange = element.toJSON();
            const auditLog = {
              modelName: ctx.Model.name,
              modelId: objectBeforeChange.id,
              objectBeforeChange: objectBeforeChange,
              changedByAppUserId: logParams.appUserId,
              transactionId: logParams.transactionId,
              ipAddress: logParams.ipAddress,
              hostName: logParams.hostName
            };
            await this.sendMessage(auditLog);
          });
        }
      }
    });

    /**
     * AuditLog for create, createall, update and updateall, save, replace
     */
    modelClass.observe('before save', async ctx => {
      const {options, where, isNewInstance} = ctx;
      const {logParams} = options;
      if (logParams && logParams.doAuditLog === true) {
        if (!isNewInstance) {
          const fetchData = where ? await ctx.Model.find({where: where},options) : await ctx.Model.find({where: {id: ctx.instance.toJSON().id}},options);
          ctx.hookState.update = fetchData;
          ctx.hookState.replaceById = where ? false : true;
        }
      }
    });

    modelClass.observe('after save', async ctx => {
      const {options, isNewInstance, info, hookState} = ctx;
      const {logParams} = options;
      if (logParams && logParams.doAuditLog === true) {
        if (isNewInstance) {
          // for create and createall
          const auditLog = {
            modelName: ctx.Model.name,
            modelId: ctx.instance.__data.id,
            objectAfterChange: ctx.instance.__data,
            changedByAppUserId: logParams.appUserId,
            transactionId: logParams.transactionId,
            ipAddress: logParams.ipAddress,
            hostName: logParams.hostName
          };
          await this.sendMessage(auditLog);
        } else {
          const logUpdOpt =
            hookState.replaceById === true ? hookState.replaceById : info && info.count ? (info.count >= 1 ? true : false) : false;
          if (logUpdOpt) {
            const ids = hookState.update.map((ele: any) => ele.__data.id);
            let updatedRecords: any = await ctx.Model.find({where: {id: {inq: ids}}},options);
            updatedRecords = updatedRecords.map((ele: any) => ele.toJSON());
            hookState.update.forEach(async (element: any) => {
              const objectBeforeChange = element.toJSON();
              let objectAfterChange = updatedRecords.filter((ele: any) => ele.id === objectBeforeChange.id)[0];
              const auditLog = {
                modelName: ctx.Model.name,
                modelId: objectBeforeChange.id,
                objectBeforeChange,
                objectAfterChange,
                difference: getDiff(objectBeforeChange, objectAfterChange),
                changedByAppUserId: logParams.appUserId,
                transactionId: logParams.transactionId,
                ipAddress: logParams.ipAddress,
                hostName: logParams.hostName
              };
              await this.sendMessage(auditLog);
            });
          }
        }
      }
    });
  }
}
