import {LoggingUtils, QueueUtils} from '../utils';
import {
  CommunicationQueueMessage,
  DataHealthCheckingQueueMessage,
  LogProcessingQueueMessage,
  MarketDataProcessingQueueMessage,
  OrderProcessingQueueMessage,
  ReverseFeedProcessingQueueMessage,
  TransactionalDataRefreshingQueueMessage,
  lowPriorityTransactionalDataEvents,
  mediumPriorityTransactionalDataEvents,
  timeConsumingMarketDataEvents
} from './messages';
import QueueConfiguration from './queue-configuration';

export abstract class QueueProducer {
  public static sendMessageInCommunicationQueue(message: CommunicationQueueMessage): Promise<any> {
    return new Promise(function (resolve, reject) {
      Promise.resolve()
        .then(() => {
          //Put your validations here
          return Promise.resolve();
        })
        .then(() => {
          return QueueUtils.sendMessage(QueueConfiguration.queues.communication.queueName, message);
        })
        .then((response: any) => resolve(response))
        .catch(function (error: Error) {
          LoggingUtils.error(error);
          return reject(error);
        });
    });
  }

  public static sendMessageInDataHealthCheckingQueue(message: DataHealthCheckingQueueMessage): Promise<any> {
    return new Promise(function (resolve, reject) {
      Promise.resolve()
        .then(() => {
          //Put your validations here
          return Promise.resolve();
        })
        .then(() => {
          return QueueUtils.sendMessage(QueueConfiguration.queues.datahealthchecking.queueName, message);
        })
        .then((response: any) => resolve(response))
        .catch(function (error: Error) {
          LoggingUtils.error(error);
          return reject(error);
        });
    });
  }

  public static sendMessageInLogProcessingQueue(message: LogProcessingQueueMessage): Promise<any> {
    return new Promise(function (resolve, reject) {
      Promise.resolve()
        .then(() => {
          //Put your validations here
          return Promise.resolve();
        })
        .then(() => {
          return QueueUtils.sendMessage(QueueConfiguration.queues.logprocessing.queueName, message);
        })
        .then((response: any) => resolve(response))
        .catch(function (error: Error) {
          LoggingUtils.error(error);
          return reject(error);
        });
    });
  }

  public static sendMessageInMarketDataProcessingQueue(message: MarketDataProcessingQueueMessage): Promise<any> {
    if (timeConsumingMarketDataEvents.includes(message.eventType)) {
      return this.sendMessageInMarketDataProcessingTimeConsumingQueue(message);
    } else {
      return new Promise(function (resolve, reject) {
        Promise.resolve()
          .then(() => {
            //Put your validations here
            return Promise.resolve();
          })
          .then(() => {
            return QueueUtils.sendMessage(QueueConfiguration.queues.marketdataprocessing.queueName, message);
          })
          .then((response: any) => resolve(response))
          .catch(function (error: Error) {
            LoggingUtils.error(error);
            return reject(error);
          });
      });
    }
  }

  public static sendMessageInMarketDataProcessingTimeConsumingQueue(message: MarketDataProcessingQueueMessage): Promise<any> {
    return new Promise(function (resolve, reject) {
      Promise.resolve()
        .then(() => {
          //Put your validations here
          return Promise.resolve();
        })
        .then(() => {
          return QueueUtils.sendMessage(QueueConfiguration.queues.marketdataprocessingtimeconsuming.queueName, message);
        })
        .then((response: any) => resolve(response))
        .catch(function (error: Error) {
          LoggingUtils.error(error);
          return reject(error);
        });
    });
  }

  public static sendMessageInOrderProcessingQueue(message: OrderProcessingQueueMessage): Promise<any> {
    return new Promise(function (resolve, reject) {
      Promise.resolve()
        .then(() => {
          //Put your validations here
          return Promise.resolve();
        })
        .then(() => {
          return QueueUtils.sendMessage(QueueConfiguration.queues.orderprocessing.queueName, message);
        })
        .then((response: any) => resolve(response))
        .catch(function (error: Error) {
          LoggingUtils.error(error);
          return reject(error);
        });
    });
  }

  public static sendMessageInReverseFeedProcessingQueue(message: ReverseFeedProcessingQueueMessage): Promise<any> {
    return new Promise(function (resolve, reject) {
      Promise.resolve()
        .then(() => {
          //Put your validations here
          return Promise.resolve();
        })
        .then(() => {
          return QueueUtils.sendMessage(QueueConfiguration.queues.reversefeedprocessing.queueName, message);
        })
        .then((response: any) => resolve(response))
        .catch(function (error: Error) {
          LoggingUtils.error(error);
          return reject(error);
        });
    });
  }

  public static sendMessageInTransactionalDataRefreshingQueue(message: TransactionalDataRefreshingQueueMessage): Promise<any> {
    if (lowPriorityTransactionalDataEvents.includes(message.eventType)) {
      return this.sendMessageInTransactionalDataRefreshingLowPriorityQueue(message);
    } else if (mediumPriorityTransactionalDataEvents.includes(message.eventType)) {
      return this.sendMessageInTransactionalDataRefreshingMediumPriorityQueue(message);
    } else {
      return new Promise(function (resolve, reject) {
        Promise.resolve()
          .then(() => {
            //Put your validations here
            return Promise.resolve();
          })
          .then(() => {
            return QueueUtils.sendMessage(QueueConfiguration.queues.transactionaldatarefreshing.queueName, message);
          })
          .then((response: any) => resolve(response))
          .catch(function (error: Error) {
            LoggingUtils.error(error);
            return reject(error);
          });
      });
    }
  }
  public static sendMessageInTransactionalDataRefreshingMediumPriorityQueue(
    message: TransactionalDataRefreshingQueueMessage
  ): Promise<any> {
    return new Promise(function (resolve, reject) {
      Promise.resolve()
        .then(() => {
          //Put your validations here
          return Promise.resolve();
        })
        .then(() => {
          return QueueUtils.sendMessage(QueueConfiguration.queues.transactionaldatarefreshingmediumpriority.queueName, message);
        })
        .then((response: any) => resolve(response))
        .catch(function (error: Error) {
          LoggingUtils.error(error);
          return reject(error);
        });
    });
  }
  public static sendMessageInTransactionalDataRefreshingLowPriorityQueue(message: TransactionalDataRefreshingQueueMessage): Promise<any> {
    return new Promise(function (resolve, reject) {
      Promise.resolve()
        .then(() => {
          //Put your validations here
          return Promise.resolve();
        })
        .then(() => {
          return QueueUtils.sendMessage(QueueConfiguration.queues.transactionaldatarefreshinglowpriority.queueName, message);
        })
        .then((response: any) => resolve(response))
        .catch(function (error: Error) {
          LoggingUtils.error(error);
          return reject(error);
        });
    });
  }
}
