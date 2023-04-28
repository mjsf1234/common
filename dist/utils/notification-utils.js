"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationUtils = void 0;
const queues_1 = require("../queues");
class NotificationUtils {
    static async sendNotificationEvent(NotificationEvent) {
        var _a;
        const message = new queues_1.CommunicationQueueMessage();
        const eventType = queues_1.CommunicationQueueMessageEventType.SEND_NOTIFICATION;
        message.eventType = eventType;
        message.accountId = NotificationEvent.accountId;
        message.topicId = NotificationEvent.topicId;
        message.notificationData = NotificationEvent.templateKeys;
        message.notificationType = (_a = NotificationEvent.notificationType) !== null && _a !== void 0 ? _a : '';
        if (NotificationEvent.userId != undefined || NotificationEvent.userId != null)
            message.userId = NotificationEvent.userId;
        queues_1.QueueProducer.sendMessageInCommunicationQueue(message);
    }
}
exports.NotificationUtils = NotificationUtils;
//# sourceMappingURL=notification-utils.js.map