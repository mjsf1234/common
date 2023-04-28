"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const rsmq_configuration_1 = (0, tslib_1.__importDefault)(require("./rsmq-configuration"));
class QueueConfiguration {
}
exports.default = QueueConfiguration;
_a = QueueConfiguration;
QueueConfiguration.queueConfig = new rsmq_configuration_1.default();
QueueConfiguration.host = _a.queueConfig.host;
QueueConfiguration.port = '' + _a.queueConfig.port;
QueueConfiguration.namespace = 'rsmq';
QueueConfiguration.realtime = false;
QueueConfiguration.options = _a.queueConfig.options;
QueueConfiguration.queues = {
    communication: {
        queueName: 'communication',
        visibilityTimeout: 300,
        sendDelay: 1
    },
    datahealthchecking: {
        queueName: 'datahealthchecking',
        visibilityTimeout: 60,
        sendDelay: 1
    },
    logprocessing: {
        queueName: 'logprocessing',
        visibilityTimeout: 60,
        sendDelay: 1
    },
    marketdataprocessing: {
        queueName: 'marketdataprocessing',
        visibilityTimeout: 300,
        sendDelay: 1
    },
    marketdataprocessingtimeconsuming: {
        queueName: 'marketdataprocessingtimeconsuming',
        // visibilityTimeout: 3600,    // COMMENTED BECAUSE TO VERIFY INSTRUMENT_LAST_PRICE-SYNC CRON
        visibilityTimeout: 14400,
        sendDelay: 1
    },
    orderprocessing: {
        queueName: 'orderprocessing',
        visibilityTimeout: 60,
        sendDelay: 1
    },
    reversefeedprocessing: {
        queueName: 'reversefeedprocessing',
        visibilityTimeout: 1800,
        sendDelay: 1
    },
    transactionaldatarefreshing: {
        queueName: 'transactionaldatarefreshing',
        visibilityTimeout: 300,
        sendDelay: 1
    },
    transactionaldatarefreshinglowpriority: {
        queueName: 'transactionaldatarefreshinglowpriority',
        visibilityTimeout: 300,
        sendDelay: 1
    },
    transactionaldatarefreshingmediumpriority: {
        queueName: 'transactionaldatarefreshingmediumpriority',
        visibilityTimeout: 300,
        sendDelay: 1
    }
};
//# sourceMappingURL=queue-configuration.js.map