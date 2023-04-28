import {CommunicationQueueMessage, CommunicationQueueMessageEventType, QueueProducer} from '../queues';

export interface NotificationEvent {
  accountId: number | string;
  topicId: number;
  templateKeys: any;
  notificationType?: string;
  userId?: number;
}

export abstract class NotificationUtils {
  public static async sendNotificationEvent(NotificationEvent: NotificationEvent) {
    const message = new CommunicationQueueMessage();
    const eventType: CommunicationQueueMessageEventType = CommunicationQueueMessageEventType.SEND_NOTIFICATION;
    message.eventType = eventType;
    message.accountId = NotificationEvent.accountId;
    message.topicId = NotificationEvent.topicId;
    message.notificationData = NotificationEvent.templateKeys;
    message.notificationType = NotificationEvent.notificationType ?? '';
    if (NotificationEvent.userId != undefined || NotificationEvent.userId != null) message.userId = NotificationEvent.userId;
    QueueProducer.sendMessageInCommunicationQueue(message);
  }
}
