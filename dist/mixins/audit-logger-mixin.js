"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditLoggerMixin = void 0;
const recursive_diff_1 = require("recursive-diff");
const queues_1 = require("../queues");
const logging_utils_1 = require("../utils/logging-utils");
class AuditLoggerMixin {
    static async sendMessage(auditLog) {
        logging_utils_1.LoggingUtils.info(auditLog, 'Audit Logs');
        const message = new queues_1.LogProcessingQueueMessage();
        const eventType = queues_1.LogProcessingQueueMessageEventType.AUDIT_LOG;
        message.eventType = eventType;
        message.data = auditLog;
        message.logDate = new Date();
        queues_1.QueueProducer.sendMessageInLogProcessingQueue(message);
    }
    static async register(modelClass) {
        /**
         * AuditLog for delete and deleteAll done
         */
        modelClass.observe('before delete', async (ctx) => {
            const { options, where } = ctx;
            const { logParams } = options;
            if (logParams && logParams.doAuditLog === true) {
                const fetchData = await ctx.Model.find({ where: where }, options);
                ctx.hookState.delete = fetchData;
            }
        });
        modelClass.observe('after delete', async (ctx) => {
            const { options, info, hookState } = ctx;
            const { logParams } = options;
            const logDelOpt = info.count >= 1 ? true : false;
            if (logParams && logParams.doAuditLog === true) {
                if (logDelOpt) {
                    hookState.delete.forEach(async (element) => {
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
        modelClass.observe('before save', async (ctx) => {
            const { options, where, isNewInstance } = ctx;
            const { logParams } = options;
            if (logParams && logParams.doAuditLog === true) {
                if (!isNewInstance) {
                    const fetchData = where ? await ctx.Model.find({ where: where }, options) : await ctx.Model.find({ where: { id: ctx.instance.toJSON().id } }, options);
                    ctx.hookState.update = fetchData;
                    ctx.hookState.replaceById = where ? false : true;
                }
            }
        });
        modelClass.observe('after save', async (ctx) => {
            const { options, isNewInstance, info, hookState } = ctx;
            const { logParams } = options;
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
                }
                else {
                    const logUpdOpt = hookState.replaceById === true ? hookState.replaceById : info && info.count ? (info.count >= 1 ? true : false) : false;
                    if (logUpdOpt) {
                        const ids = hookState.update.map((ele) => ele.__data.id);
                        let updatedRecords = await ctx.Model.find({ where: { id: { inq: ids } } }, options);
                        updatedRecords = updatedRecords.map((ele) => ele.toJSON());
                        hookState.update.forEach(async (element) => {
                            const objectBeforeChange = element.toJSON();
                            let objectAfterChange = updatedRecords.filter((ele) => ele.id === objectBeforeChange.id)[0];
                            const auditLog = {
                                modelName: ctx.Model.name,
                                modelId: objectBeforeChange.id,
                                objectBeforeChange,
                                objectAfterChange,
                                difference: (0, recursive_diff_1.getDiff)(objectBeforeChange, objectAfterChange),
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
exports.AuditLoggerMixin = AuditLoggerMixin;
//# sourceMappingURL=audit-logger-mixin.js.map