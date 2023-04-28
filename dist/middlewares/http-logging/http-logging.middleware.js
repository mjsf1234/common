"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpLogging = void 0;
const tslib_1 = require("tslib");
const utils_1 = require("../../utils");
const lodash_1 = (0, tslib_1.__importDefault)(require("lodash"));
const moment_timezone_1 = (0, tslib_1.__importDefault)(require("moment-timezone"));
const queues_1 = require("../../queues");
const error_codes_mapping_1 = require("../../constants/error-codes-mapping");
const constants_1 = require("../../constants");
const httpLogging = async (middlewareCtx, next) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    const { request, response } = middlewareCtx;
    const userProfile = middlewareCtx.getBinding('userProfile').getValue(middlewareCtx);
    const startTime = (0, moment_timezone_1.default)();
    const headers = request.headers;
    const userAuthToken = headers['Authorization'] || headers['authorization'];
    const transactionId = (_a = userProfile.TrxId) !== null && _a !== void 0 ? _a : '';
    // LoggingUtils.info('Transaction Id' + ' ' + transactionId);
    let logData = {
        ipAddress: userProfile.ip,
        appUserId: (_b = userProfile.appUserId) !== null && _b !== void 0 ? _b : null,
        startTime: startTime.format('YYYY-MM-DD HH:mm:ss'),
        requestMethod: request.method,
        requestURL: request.originalUrl.split('?')[0],
        logGenTime: new Date(),
        transactionId
    };
    let payload = { queryParams: request.query };
    const incomingRequestData = {
        startTime: startTime.format('YYYY-MM-DD HH:mm:ss'),
        requestMethod: request.method,
        requestURL: request.originalUrl,
        transactionId
    };
    let shouldLog = true;
    for (let keys of constants_1.Option.GLOBALOPTIONS.URIEXCLUSIONFROMHTTPACCESSLOGS) {
        if (request.path.includes(keys)) {
            shouldLog = false;
            break;
        }
    }
    if (shouldLog)
        utils_1.LoggingUtils.info(incomingRequestData, 'http-logging-middleware');
    try {
        // Proceed with the request
        const result = await next();
        const endTime = (0, moment_timezone_1.default)();
        const durationInMs = moment_timezone_1.default.duration(endTime.diff(startTime)).asMilliseconds();
        // Process response
        payload = lodash_1.default.extend(payload, {
            requestBody: (_c = request.body) !== null && _c !== void 0 ? _c : null
        });
        logData = lodash_1.default.extend(logData, {
            payload,
            responseJSON: result,
            isError: false,
            endTime: endTime.format('YYYY-MM-DD HH:mm:ss'),
            durationInMs
        });
        queues_1.QueueProducer.sendMessageInLogProcessingQueue({
            eventType: queues_1.LogProcessingQueueMessageEventType.HTTP_ACCESS_LOG,
            logDate: (0, moment_timezone_1.default)().toDate(),
            data: logData
        }).catch((err) => {
            utils_1.LoggingUtils.error(err);
        });
        return result;
    }
    catch (err) {
        // Catch errors from downstream middleware
        if (typeof err == 'string') {
            err = { message: err, details: err, stack: err };
        }
        const endTime = (0, moment_timezone_1.default)();
        const durationInMs = moment_timezone_1.default.duration(endTime.diff(startTime)).asMilliseconds();
        payload = lodash_1.default.extend(payload, {
            requestBody: (_d = request.body) !== null && _d !== void 0 ? _d : null
        });
        logData = lodash_1.default.extend(logData, {
            payload,
            responseJSON: {
                name: 'Error',
                message: (_e = err.message) !== null && _e !== void 0 ? _e : err,
                statusCode: +((_f = err.status) !== null && _f !== void 0 ? _f : err.statusCode)
            },
            isError: true,
            endTime: endTime.format('YYYY-MM-DD HH:mm:ss'),
            durationInMs
        });
        queues_1.QueueProducer.sendMessageInLogProcessingQueue({
            eventType: queues_1.LogProcessingQueueMessageEventType.HTTP_ACCESS_LOG,
            logDate: (0, moment_timezone_1.default)().toDate(),
            data: logData
        }).catch((err) => {
            utils_1.LoggingUtils.error(err);
        });
        const errorObjectToLog = {
            requestMethod: request.method,
            requestURL: request.originalUrl,
            transactionId: transactionId,
            errorMessage: ((_h = (_g = err.message) !== null && _g !== void 0 ? _g : err.Error.message) !== null && _h !== void 0 ? _h : ''),
            errorDetails: (err.details ? JSON.stringify(err.details) : ''),
            errorStack: ((_j = err.stack) !== null && _j !== void 0 ? _j : '')
        };
        utils_1.LoggingUtils.error(errorObjectToLog, 'http-logging-middleware/error-handler');
        if (err.hasOwnProperty('code') && err.code == 'VALIDATION_FAILED') { //In case this is a custom 422 sent by controller
            return Promise.reject(new utils_1.RestError(422, 'The request body is invalid'));
        }
        else if (!(err instanceof utils_1.RestError)) { //If it is not a valid restError
            //We need to handle this seperately as the authorization component isn't responding with a RestError
            if (err.hasOwnProperty('statusCode') && err.statusCode == 403) { // In case this is received from another service
                return Promise.reject(new utils_1.RestError(403, 'Access denied'));
            }
            else {
                return Promise.reject(new utils_1.RestError(491, 'We seem to have encountered a  temporary glitch. Kindly try after some time'));
            }
        }
        else {
            let status_array = [400, 411, 413, 414, 415, 416, 401, 404, 422];
            if (err.status == 461) {
                response.setHeader('expired-token', userAuthToken);
            }
            if (status_array.includes(Number(err.status))) {
                if (err.extra && err.extra.systemcode && error_codes_mapping_1.ErrorCodes.SYSTEMCODEMAPPING[err.extra.systemcode]) {
                    let errorMessageFromMapping = error_codes_mapping_1.ErrorCodes.SYSTEMCODEMAPPING[err.extra.systemcode]['message'];
                    let errorMessage = errorMessageFromMapping && errorMessageFromMapping.length > 0 ? errorMessageFromMapping : err.message;
                    return Promise.reject(new utils_1.RestError(error_codes_mapping_1.ErrorCodes.SYSTEMCODEMAPPING[err.extra.systemcode]['httpStatus'], errorMessage, { systemcode: err.extra.systemcode }));
                }
                else {
                    return Promise.reject(err);
                }
            }
            else {
                return Promise.reject(err);
            }
        }
    }
};
exports.httpLogging = httpLogging;
//# sourceMappingURL=http-logging.middleware.js.map