"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogApiCallUtils = void 0;
const __1 = require("..");
const queues_1 = require("../queues");
class LogApiCallUtils {
    static async sendMessageOutgoingApiCall(outgoingApiCallLog) {
        const message = new queues_1.LogProcessingQueueMessage();
        const eventType = queues_1.LogProcessingQueueMessageEventType.OUTGOING_API_CALL_LOG;
        message.eventType = eventType;
        message.data = outgoingApiCallLog;
        message.logDate = new Date();
        queues_1.QueueProducer.sendMessageInLogProcessingQueue(message);
    }
    static async sendMessageIncomingApiCall(incomingApiCallLog) {
        const message = new queues_1.LogProcessingQueueMessage();
        const eventType = queues_1.LogProcessingQueueMessageEventType.INCOMING_API_CALL_LOG;
        message.eventType = eventType;
        message.data = incomingApiCallLog;
        message.logDate = new Date();
        queues_1.QueueProducer.sendMessageInLogProcessingQueue(message);
    }
    static async sendMessageLoginApiCall(loginApiCallLog) {
        __1.LoggingUtils.info(loginApiCallLog, 'Application Login/Logout Activity');
        const message = new queues_1.LogProcessingQueueMessage();
        const eventType = queues_1.LogProcessingQueueMessageEventType.LOGIN_LOG;
        message.eventType = eventType;
        message.data = loginApiCallLog;
        message.logDate = new Date();
        queues_1.QueueProducer.sendMessageInLogProcessingQueue(message);
    }
}
exports.LogApiCallUtils = LogApiCallUtils;
//# sourceMappingURL=log-api-call-utils.js.map