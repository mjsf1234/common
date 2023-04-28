"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueProducer = void 0;
const tslib_1 = require("tslib");
const utils_1 = require("../utils");
const messages_1 = require("./messages");
const queue_configuration_1 = (0, tslib_1.__importDefault)(require("./queue-configuration"));
class QueueProducer {
    static sendMessageInCommunicationQueue(message) {
        return new Promise(function (resolve, reject) {
            Promise.resolve()
                .then(() => {
                //Put your validations here
                return Promise.resolve();
            })
                .then(() => {
                return utils_1.QueueUtils.sendMessage(queue_configuration_1.default.queues.communication.queueName, message);
            })
                .then((response) => resolve(response))
                .catch(function (error) {
                utils_1.LoggingUtils.error(error);
                return reject(error);
            });
        });
    }
    static sendMessageInDataHealthCheckingQueue(message) {
        return new Promise(function (resolve, reject) {
            Promise.resolve()
                .then(() => {
                //Put your validations here
                return Promise.resolve();
            })
                .then(() => {
                return utils_1.QueueUtils.sendMessage(queue_configuration_1.default.queues.datahealthchecking.queueName, message);
            })
                .then((response) => resolve(response))
                .catch(function (error) {
                utils_1.LoggingUtils.error(error);
                return reject(error);
            });
        });
    }
    static sendMessageInLogProcessingQueue(message) {
        return new Promise(function (resolve, reject) {
            Promise.resolve()
                .then(() => {
                //Put your validations here
                return Promise.resolve();
            })
                .then(() => {
                return utils_1.QueueUtils.sendMessage(queue_configuration_1.default.queues.logprocessing.queueName, message);
            })
                .then((response) => resolve(response))
                .catch(function (error) {
                utils_1.LoggingUtils.error(error);
                return reject(error);
            });
        });
    }
    static sendMessageInMarketDataProcessingQueue(message) {
        if (messages_1.timeConsumingMarketDataEvents.includes(message.eventType)) {
            return this.sendMessageInMarketDataProcessingTimeConsumingQueue(message);
        }
        else {
            return new Promise(function (resolve, reject) {
                Promise.resolve()
                    .then(() => {
                    //Put your validations here
                    return Promise.resolve();
                })
                    .then(() => {
                    return utils_1.QueueUtils.sendMessage(queue_configuration_1.default.queues.marketdataprocessing.queueName, message);
                })
                    .then((response) => resolve(response))
                    .catch(function (error) {
                    utils_1.LoggingUtils.error(error);
                    return reject(error);
                });
            });
        }
    }
    static sendMessageInMarketDataProcessingTimeConsumingQueue(message) {
        return new Promise(function (resolve, reject) {
            Promise.resolve()
                .then(() => {
                //Put your validations here
                return Promise.resolve();
            })
                .then(() => {
                return utils_1.QueueUtils.sendMessage(queue_configuration_1.default.queues.marketdataprocessingtimeconsuming.queueName, message);
            })
                .then((response) => resolve(response))
                .catch(function (error) {
                utils_1.LoggingUtils.error(error);
                return reject(error);
            });
        });
    }
    static sendMessageInOrderProcessingQueue(message) {
        return new Promise(function (resolve, reject) {
            Promise.resolve()
                .then(() => {
                //Put your validations here
                return Promise.resolve();
            })
                .then(() => {
                return utils_1.QueueUtils.sendMessage(queue_configuration_1.default.queues.orderprocessing.queueName, message);
            })
                .then((response) => resolve(response))
                .catch(function (error) {
                utils_1.LoggingUtils.error(error);
                return reject(error);
            });
        });
    }
    static sendMessageInReverseFeedProcessingQueue(message) {
        return new Promise(function (resolve, reject) {
            Promise.resolve()
                .then(() => {
                //Put your validations here
                return Promise.resolve();
            })
                .then(() => {
                return utils_1.QueueUtils.sendMessage(queue_configuration_1.default.queues.reversefeedprocessing.queueName, message);
            })
                .then((response) => resolve(response))
                .catch(function (error) {
                utils_1.LoggingUtils.error(error);
                return reject(error);
            });
        });
    }
    static sendMessageInTransactionalDataRefreshingQueue(message) {
        if (messages_1.lowPriorityTransactionalDataEvents.includes(message.eventType)) {
            return this.sendMessageInTransactionalDataRefreshingLowPriorityQueue(message);
        }
        else if (messages_1.mediumPriorityTransactionalDataEvents.includes(message.eventType)) {
            return this.sendMessageInTransactionalDataRefreshingMediumPriorityQueue(message);
        }
        else {
            return new Promise(function (resolve, reject) {
                Promise.resolve()
                    .then(() => {
                    //Put your validations here
                    return Promise.resolve();
                })
                    .then(() => {
                    return utils_1.QueueUtils.sendMessage(queue_configuration_1.default.queues.transactionaldatarefreshing.queueName, message);
                })
                    .then((response) => resolve(response))
                    .catch(function (error) {
                    utils_1.LoggingUtils.error(error);
                    return reject(error);
                });
            });
        }
    }
    static sendMessageInTransactionalDataRefreshingMediumPriorityQueue(message) {
        return new Promise(function (resolve, reject) {
            Promise.resolve()
                .then(() => {
                //Put your validations here
                return Promise.resolve();
            })
                .then(() => {
                return utils_1.QueueUtils.sendMessage(queue_configuration_1.default.queues.transactionaldatarefreshingmediumpriority.queueName, message);
            })
                .then((response) => resolve(response))
                .catch(function (error) {
                utils_1.LoggingUtils.error(error);
                return reject(error);
            });
        });
    }
    static sendMessageInTransactionalDataRefreshingLowPriorityQueue(message) {
        return new Promise(function (resolve, reject) {
            Promise.resolve()
                .then(() => {
                //Put your validations here
                return Promise.resolve();
            })
                .then(() => {
                return utils_1.QueueUtils.sendMessage(queue_configuration_1.default.queues.transactionaldatarefreshinglowpriority.queueName, message);
            })
                .then((response) => resolve(response))
                .catch(function (error) {
                utils_1.LoggingUtils.error(error);
                return reject(error);
            });
        });
    }
}
exports.QueueProducer = QueueProducer;
//# sourceMappingURL=queue-producer.js.map