import RSMQConfiguration from './rsmq-configuration';
import RedisSMQ from 'rsmq';
export default abstract class QueueConfiguration {
  static readonly queueConfig = new RSMQConfiguration();
  static readonly host: string = this.queueConfig.host;
  static readonly port: string = '' + this.queueConfig.port;
  static readonly namespace: string = 'rsmq';
  static readonly realtime: boolean = false;
  static readonly options: any = this.queueConfig.options;
  static readonly queues: any = {
    communication: {
      queueName: 'communication',
      visibilityTimeout: 300,
      sendDelay: 1
    },
    datahealthchecking: {
      queueName: 'datahealthchecking',
      visibilityTimeout: 60,
      sendDelay: 1
    },
    logprocessing: {
      queueName: 'logprocessing',
      visibilityTimeout: 60,
      sendDelay: 1
    },
    marketdataprocessing: {
      queueName: 'marketdataprocessing',
      visibilityTimeout: 300,
      sendDelay: 1
    },
    marketdataprocessingtimeconsuming: {
      queueName: 'marketdataprocessingtimeconsuming',
      // visibilityTimeout: 3600,    // COMMENTED BECAUSE TO VERIFY INSTRUMENT_LAST_PRICE-SYNC CRON
      visibilityTimeout: 14400,
      sendDelay: 1
    },
    orderprocessing: {
      queueName: 'orderprocessing',
      visibilityTimeout: 60,
      sendDelay: 1
    },
    reversefeedprocessing: {
      queueName: 'reversefeedprocessing',
      visibilityTimeout: 1800,
      sendDelay: 1
    },
    transactionaldatarefreshing: {
      queueName: 'transactionaldatarefreshing',
      visibilityTimeout: 300,
      sendDelay: 1
    },
    transactionaldatarefreshinglowpriority: {
      queueName: 'transactionaldatarefreshinglowpriority',
      visibilityTimeout: 300,
      sendDelay: 1
    },
    transactionaldatarefreshingmediumpriority: {
      queueName: 'transactionaldatarefreshingmediumpriority',
      visibilityTimeout: 300,
      sendDelay: 1
    }
  };
}
