"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogProcessingQueueMessage = exports.LogProcessingQueueMessageEventType = void 0;
var LogProcessingQueueMessageEventType;
(function (LogProcessingQueueMessageEventType) {
    LogProcessingQueueMessageEventType["ACTION_LOG"] = "ACTION_LOG";
    LogProcessingQueueMessageEventType["ACTIVITY_LOG"] = "ACTIVITY_LOG";
    LogProcessingQueueMessageEventType["AUDIT_LOG"] = "AUDIT_LOG";
    LogProcessingQueueMessageEventType["CRON_LOG"] = "CRON_LOG";
    LogProcessingQueueMessageEventType["DATA_SYNC_LOG"] = "DATA_SYNC_LOG";
    LogProcessingQueueMessageEventType["ERROR_LOG"] = "ERROR_LOG";
    LogProcessingQueueMessageEventType["HEALTH_CHECKER_LOG"] = "HEALTH_CHECKER_LOG";
    LogProcessingQueueMessageEventType["INCOMING_API_CALL_LOG"] = "INCOMING_API_CALL_LOG";
    LogProcessingQueueMessageEventType["LOGIN_LOG"] = "LOGIN_LOG";
    LogProcessingQueueMessageEventType["MESSAGING_LOG"] = "MESSAGING_LOG";
    LogProcessingQueueMessageEventType["NOTIFICATION_LOG"] = "NOTIFICATION_LOG";
    LogProcessingQueueMessageEventType["OUTGOING_API_CALL_LOG"] = "OUTGOING_API_CALL_LOG";
    LogProcessingQueueMessageEventType["HTTP_ACCESS_LOG"] = "HTTP_ACCESS_LOG";
    LogProcessingQueueMessageEventType["HTTP_ACCESS_LOG_BY_TXN_ID"] = "HTTP_ACCESS_LOG_BY_TXN_ID";
})(LogProcessingQueueMessageEventType = exports.LogProcessingQueueMessageEventType || (exports.LogProcessingQueueMessageEventType = {}));
class LogProcessingQueueMessage {
}
exports.LogProcessingQueueMessage = LogProcessingQueueMessage;
//# sourceMappingURL=log-processing-queue-message.js.map