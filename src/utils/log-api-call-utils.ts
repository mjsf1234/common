import { LoggingUtils } from '..';
import {LogProcessingQueueMessage, LogProcessingQueueMessageEventType, QueueProducer} from '../queues';

export abstract class LogApiCallUtils {
  public static async sendMessageOutgoingApiCall(outgoingApiCallLog:any){
    const message = new LogProcessingQueueMessage();
    const eventType: LogProcessingQueueMessageEventType = LogProcessingQueueMessageEventType.OUTGOING_API_CALL_LOG;
    message.eventType = eventType;
    message.data = outgoingApiCallLog;
    message.logDate = new Date();
    QueueProducer.sendMessageInLogProcessingQueue(message);
  }

  public static async sendMessageIncomingApiCall(incomingApiCallLog:any){
    const message = new LogProcessingQueueMessage();
    const eventType: LogProcessingQueueMessageEventType = LogProcessingQueueMessageEventType.INCOMING_API_CALL_LOG;
    message.eventType = eventType;
    message.data = incomingApiCallLog;
    message.logDate = new Date();
    QueueProducer.sendMessageInLogProcessingQueue(message);
  }

  public static async sendMessageLoginApiCall(loginApiCallLog:any){
    LoggingUtils.info(loginApiCallLog,'Application Login/Logout Activity');
    const message = new LogProcessingQueueMessage();
    const eventType: LogProcessingQueueMessageEventType = LogProcessingQueueMessageEventType.LOGIN_LOG;
    message.eventType = eventType;
    message.data = loginApiCallLog;
    message.logDate = new Date();
    QueueProducer.sendMessageInLogProcessingQueue(message);
  }
}
