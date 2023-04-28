export declare enum CommunicationQueueMessageEventType {
    SEND_SMS = "SEND_SMS",
    SEND_EMAIL = "SEND_EMAIL",
    SEND_PUSH_NOTIFICATION = "SEND_PUSH_NOTIFICATION",
    RECEIVE_EMAIL = "RECEIVE_EMAIL",
    PROCESS_CAS = "PROCESS_CAS",
    PROCESS_CAS_FROM_EMAIL = "PROCESS_CAS_FROM_EMAIL",
    SEND_NOTIFICATION = "SEND_NOTIFICATION"
}
export declare enum PushNotificationTemplateName {
    CART_ITEM_PENDING = "cartItemPending",
    PENDING_ONBOARDING = "pendingOnboarding"
}
export declare type PushNotification = {
    notificationType: PushNotificationTemplateName;
    data: unknown;
};
export declare class CommunicationQueueMessage {
    eventType: CommunicationQueueMessageEventType;
    pushNotification?: PushNotification;
    notificationType?: string;
    pdfName?: string;
    password?: string;
    userId?: number;
    accountId: number | string;
    panCard?: string;
    casRequestId?: number;
    transactionId?: string;
    topicId?: number;
    notificationData?: any;
    sender?: string;
    from?: string;
    to?: string;
    subject?: string;
    text?: string;
    fileData?: any;
}
