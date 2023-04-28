"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataHealthCheckingQueueMessage = exports.DataHealthCheckingQueueMessageEventType = void 0;
var DataHealthCheckingQueueMessageEventType;
(function (DataHealthCheckingQueueMessageEventType) {
    DataHealthCheckingQueueMessageEventType["FULL_DATA_HEALTH_CHECK"] = "FULL_DATA_HEALTH_CHECK";
    DataHealthCheckingQueueMessageEventType["DORMANT_USERS_CHECK_CRON"] = "DORMANT_USERS_CHECK_CRON";
    DataHealthCheckingQueueMessageEventType["GOAL_DELETE_CRON"] = "GOAL_DELETE_CRON";
    DataHealthCheckingQueueMessageEventType["EXPORT_UAM_REPORTS"] = "EXPORT_UAM_REPORTS";
})(DataHealthCheckingQueueMessageEventType = exports.DataHealthCheckingQueueMessageEventType || (exports.DataHealthCheckingQueueMessageEventType = {}));
class DataHealthCheckingQueueMessage {
}
exports.DataHealthCheckingQueueMessage = DataHealthCheckingQueueMessage;
//# sourceMappingURL=data-health-checking-queue-message.js.map