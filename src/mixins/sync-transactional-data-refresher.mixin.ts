import {juggler} from '@loopback/repository';
import _, {isArray} from 'lodash';
import { QueueProducer, TransactionalDataRefreshingQueueMessageEventType } from '../queues';

export abstract class SyncTransactionalDataRefresherMixin {

  public static async sendMessage(ctx: any, recordId?: number | number[]) {
      const shouldRefresh: boolean = _.get(ctx, 'Model.settings.syncRefresher', false);
      const eventType: TransactionalDataRefreshingQueueMessageEventType = _.get(ctx, 'Model.settings.syncRefresher.eventType', false);
      if(shouldRefresh && eventType) {
        // Call TransactionData Refresher
        const dataToSend: any = {};
        _.each(_.get(ctx, 'Model.settings.syncRefresher.params') , (value: any, key: string) => {
          if(value != 'type'){

            let type =  _.get(ctx,'Model.settings.syncRefresher.params.type')
            if(type == 'Array'){
             dataToSend[key] = [_.get(ctx, `data.${value}`, _.get(ctx, `instance.${value}`))];
            }else{
              dataToSend[key] = _.get(ctx, `data.${value}`, _.get(ctx, `instance.${value}`));
            }
             if(value === 'id' && recordId) {
               if(type == 'Array'){
                if(isArray(recordId)){
                  dataToSend[key] = recordId;
                }else{
                  dataToSend[key] = [recordId];
                }
               }else{

                 dataToSend[key] = recordId;
               }
             }
          }
        });

        _.each(_.get(ctx, 'Model.settings.syncRefresher.defaultValues') , (value: any, key: string) => {
          if(key != 'type')
          dataToSend[key] = value;
        });

        QueueProducer.sendMessageInTransactionalDataRefreshingQueue({
          eventType,
          ...dataToSend
        });
      }
  }

  public static async register(modelClass: typeof juggler.PersistedModel) {
    modelClass.observe('after save', async ctx => {
      const {options} = ctx;
      const {logParams} = options;
      if (logParams && logParams.doAuditLog === true) {
      const recordId = _.get(ctx, 'where.id');
      await this.sendMessage(ctx, recordId);
    }
    });
  }
}
