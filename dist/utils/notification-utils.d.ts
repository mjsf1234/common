export interface NotificationEvent {
    accountId: number | string;
    topicId: number;
    templateKeys: any;
    notificationType?: string;
    userId?: number;
}
export declare abstract class NotificationUtils {
    static sendNotificationEvent(NotificationEvent: NotificationEvent): Promise<void>;
}
