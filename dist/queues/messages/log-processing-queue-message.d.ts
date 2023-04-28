export declare enum LogProcessingQueueMessageEventType {
    ACTION_LOG = "ACTION_LOG",
    ACTIVITY_LOG = "ACTIVITY_LOG",
    AUDIT_LOG = "AUDIT_LOG",
    CRON_LOG = "CRON_LOG",
    DATA_SYNC_LOG = "DATA_SYNC_LOG",
    ERROR_LOG = "ERROR_LOG",
    HEALTH_CHECKER_LOG = "HEALTH_CHECKER_LOG",
    INCOMING_API_CALL_LOG = "INCOMING_API_CALL_LOG",
    LOGIN_LOG = "LOGIN_LOG",
    MESSAGING_LOG = "MESSAGING_LOG",
    NOTIFICATION_LOG = "NOTIFICATION_LOG",
    OUTGOING_API_CALL_LOG = "OUTGOING_API_CALL_LOG",
    HTTP_ACCESS_LOG = "HTTP_ACCESS_LOG",
    HTTP_ACCESS_LOG_BY_TXN_ID = "HTTP_ACCESS_LOG_BY_TXN_ID"
}
export declare class LogProcessingQueueMessage {
    eventType: LogProcessingQueueMessageEventType;
    logDate: Date;
    data: any;
    transactionId?: string;
}
