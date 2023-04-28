"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueUtils = void 0;
const tslib_1 = require("tslib");
const rsmq_1 = (0, tslib_1.__importDefault)(require("rsmq"));
const rsmq_configuration_1 = (0, tslib_1.__importDefault)(require("../queues/rsmq-configuration"));
const queue_configuration_1 = (0, tslib_1.__importDefault)(require("../queues/queue-configuration"));
const rsmq = new rsmq_1.default(new rsmq_configuration_1.default());
const logging_utils_1 = require("./logging-utils");
class QueueUtils {
    static createQueue(name) {
        return new Promise(function (resolve, reject) {
            rsmq.createQueue({
                qname: queue_configuration_1.default.queues[name].queueName,
                delay: queue_configuration_1.default.queues[name].sendDelay,
                vt: queue_configuration_1.default.queues[name].visibilityTimeout,
                maxsize: -1
            }, function (error, response) {
                if (error) {
                    return reject(error);
                }
                else {
                    logging_utils_1.LoggingUtils.info('queue ' + name + ' created!');
                    return resolve(response);
                }
            });
        });
    }
    static sendMessage(queueName, message) {
        return new Promise(function (resolve, reject) {
            if (typeof message != 'object') {
                return reject(new Error('Message body has to be a json object'));
            }
            rsmq.sendMessage({ qname: queueName, message: JSON.stringify(message) }, function (error, response) {
                if (error) {
                    return reject(error);
                }
                else {
                    //@todo capture the log here
                    //app.models.MessagingLog.captureLog(queueName, response, message);
                    return resolve(response);
                }
            });
        });
    }
    static deleteMessage(queueName, messageId) {
        return new Promise(function (resolve, reject) {
            rsmq.deleteMessage({ qname: queueName, id: messageId }, function (error, response) {
                if (error) {
                    return reject(error);
                }
                else {
                    //@todo update the processed date here
                    //app.models.MessagingLog.updateProcessedDate(queueName, messageId);
                    return resolve(response);
                }
            });
        });
    }
    static listQueues() {
        return new Promise(function (resolve, reject) {
            rsmq.listQueues(function (error, response) {
                if (error) {
                    return reject(error);
                }
                else {
                    return resolve(response);
                }
            });
        });
    }
    static deleteQueues(queueName) {
        return new Promise(function (resolve, reject) {
            rsmq.deleteQueue({ qname: queueName }, function (error, response) {
                if (error) {
                    console.error(error);
                    return reject(error);
                }
                else {
                    return resolve(response);
                }
            });
        });
    }
}
exports.QueueUtils = QueueUtils;
//# sourceMappingURL=queue-utils.js.map