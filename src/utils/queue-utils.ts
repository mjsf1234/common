import RedisSMQ from 'rsmq';
import RSMQConfiguration from '../queues/rsmq-configuration';
import QueueConfiguration from '../queues/queue-configuration';
const rsmq = new RedisSMQ(new RSMQConfiguration());
import {LoggingUtils} from './logging-utils';
export abstract class QueueUtils {
  public static createQueue(name: string): Promise<any> {
    return new Promise(function (resolve, reject) {
      rsmq.createQueue(
        {
          qname: QueueConfiguration.queues[name].queueName,
          delay: QueueConfiguration.queues[name].sendDelay,
          vt: QueueConfiguration.queues[name].visibilityTimeout,
          maxsize: -1
        },
        function (error: any, response: any) {
          if (error) {
            return reject(error);
          } else {
            LoggingUtils.info('queue ' + name + ' created!');
            return resolve(response);
          }
        }
      );
    });
  }

  public static sendMessage(queueName: string, message: Object): Promise<any> {
    return new Promise(function (resolve, reject) {
      if (typeof message != 'object') {
        return reject(new Error('Message body has to be a json object'));
      }
      rsmq.sendMessage({qname: queueName, message: JSON.stringify(message)}, function (error: any, response: any) {
        if (error) {
          return reject(error);
        } else {
          //@todo capture the log here
          //app.models.MessagingLog.captureLog(queueName, response, message);
          return resolve(response);
        }
      });
    });
  }

  public static deleteMessage(queueName: string, messageId: string): Promise<any> {
    return new Promise(function (resolve, reject) {
      rsmq.deleteMessage({qname: queueName, id: messageId}, function (error: any, response: any) {
        if (error) {
          return reject(error);
        } else {
          //@todo update the processed date here
          //app.models.MessagingLog.updateProcessedDate(queueName, messageId);
          return resolve(response);
        }
      });
    });
  }

  public static listQueues(): Promise<any> {
    return new Promise(function (resolve, reject) {
      rsmq.listQueues(function (error: any, response: any) {
        if (error) {
          return reject(error);
        } else {
          return resolve(response);
        }
      });
    });
  }

  public static deleteQueues(queueName : string): Promise<any>{
    return new Promise(function (resolve, reject) {
      rsmq.deleteQueue({ qname: queueName }, function (error: any, response: any) {
        if (error) {
          console.error(error)
          return reject(error);
        } else {
          return resolve(response);
        }
      });
    });
  }
}
