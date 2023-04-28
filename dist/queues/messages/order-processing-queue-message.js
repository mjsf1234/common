"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderProcessingQueueMessage = exports.OrderProcessingQueueMessageEventType = void 0;
var OrderProcessingQueueMessageEventType;
(function (OrderProcessingQueueMessageEventType) {
    OrderProcessingQueueMessageEventType["SYSTEMATIC_METHOD_EXECUTION"] = "SYSTEMATIC_METHOD_EXECUTION";
    OrderProcessingQueueMessageEventType["TRANSACTION_FEED_GENERATION"] = "TRANSACTION_FEED_GENERATION";
    OrderProcessingQueueMessageEventType["SYSTEMATIC_METHOD_EXECUTION_CRON"] = "SYSTEMATIC_METHOD_EXECUTION_CRON";
    OrderProcessingQueueMessageEventType["TRANSACTION_FEED_GENERATION_CRON"] = "TRANSACTION_FEED_GENERATION_CRON";
    OrderProcessingQueueMessageEventType["PAYMENT_RECONCILIATION_EXECUTOR_CRON"] = "PAYMENT_RECONCILIATION_EXECUTOR_CRON";
    OrderProcessingQueueMessageEventType["PAYMENT_RECONCILIATION_FINAL_EXECUTOR_CRON"] = "PAYMENT_RECONCILIATION_FINAL_EXECUTOR_CRON";
    OrderProcessingQueueMessageEventType["UTR_MIS_EXECUTOION"] = "UTR_MIS_EXECUTOION";
    OrderProcessingQueueMessageEventType["DEBIT_SIP_TRANSACTION_CRON"] = "DEBIT_SIP_TRANSACTION_CRON";
    OrderProcessingQueueMessageEventType["DISABLE_UNUSED_UNCLASSIFIED_GOALS_CRON"] = "DISABLE_UNUSED_UNCLASSIFIED_GOALS_CRON";
    OrderProcessingQueueMessageEventType["PAYMENT_REVERSAL_EXECUTOR_CRON"] = "PAYMENT_REVERSAL_EXECUTOR_CRON";
    OrderProcessingQueueMessageEventType["VALIDATE_PAN_AADHAR_LINK"] = "VALIDATE_PAN_AADHAR_LINK";
    OrderProcessingQueueMessageEventType["AUDIT_TRAIL_PROCESSING"] = "AUDIT_TRAIL_PROCESSING";
    OrderProcessingQueueMessageEventType["PAYMENT_RECONCILIATION_SIP_EXECUTOR_CRON"] = "PAYMENT_RECONCILIATION_SIP_EXECUTOR_CRON";
    OrderProcessingQueueMessageEventType["PAYMENT_RECONCILIATION_SIP_FINAL_EXECUTOR_CRON"] = "PAYMENT_RECONCILIATION_SIP_FINAL_EXECUTOR_CRON";
})(OrderProcessingQueueMessageEventType = exports.OrderProcessingQueueMessageEventType || (exports.OrderProcessingQueueMessageEventType = {}));
class OrderProcessingQueueMessage {
}
exports.OrderProcessingQueueMessage = OrderProcessingQueueMessage;
//# sourceMappingURL=order-processing-queue-message.js.map