"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunicationQueueMessage = exports.PushNotificationTemplateName = exports.CommunicationQueueMessageEventType = void 0;
var CommunicationQueueMessageEventType;
(function (CommunicationQueueMessageEventType) {
    CommunicationQueueMessageEventType["SEND_SMS"] = "SEND_SMS";
    CommunicationQueueMessageEventType["SEND_EMAIL"] = "SEND_EMAIL";
    CommunicationQueueMessageEventType["SEND_PUSH_NOTIFICATION"] = "SEND_PUSH_NOTIFICATION";
    CommunicationQueueMessageEventType["RECEIVE_EMAIL"] = "RECEIVE_EMAIL";
    CommunicationQueueMessageEventType["PROCESS_CAS"] = "PROCESS_CAS";
    CommunicationQueueMessageEventType["PROCESS_CAS_FROM_EMAIL"] = "PROCESS_CAS_FROM_EMAIL";
    CommunicationQueueMessageEventType["SEND_NOTIFICATION"] = "SEND_NOTIFICATION";
})(CommunicationQueueMessageEventType = exports.CommunicationQueueMessageEventType || (exports.CommunicationQueueMessageEventType = {}));
var PushNotificationTemplateName;
(function (PushNotificationTemplateName) {
    PushNotificationTemplateName["CART_ITEM_PENDING"] = "cartItemPending";
    PushNotificationTemplateName["PENDING_ONBOARDING"] = "pendingOnboarding";
})(PushNotificationTemplateName = exports.PushNotificationTemplateName || (exports.PushNotificationTemplateName = {}));
class CommunicationQueueMessage {
}
exports.CommunicationQueueMessage = CommunicationQueueMessage;
//# sourceMappingURL=communication-queue-message.js.map