import {Middleware, MiddlewareContext} from '@loopback/rest';
import {LoggingUtils, RestError} from '../../utils';
import _ from 'lodash';
import moment from 'moment-timezone';
import {QueueProducer, LogProcessingQueueMessageEventType} from '../../queues';
import {ApplicationErrorLogs, RequestInfoLogs} from './';
import {ErrorCodes} from '../../constants/error-codes-mapping';
import {Option} from '../../constants';

export const httpLogging: Middleware = async (middlewareCtx: MiddlewareContext, next: Function) => {
  const {request, response} = middlewareCtx;
  const userProfile = middlewareCtx.getBinding('userProfile').getValue(middlewareCtx);
  const startTime = moment();
  const headers: any = request.headers;
  const userAuthToken = headers['Authorization'] || headers['authorization'];

  const transactionId: string = userProfile.TrxId ?? '';
  // LoggingUtils.info('Transaction Id' + ' ' + transactionId);
  let logData = {
    ipAddress: userProfile.ip,
    appUserId: userProfile.appUserId ?? null,
    startTime: startTime.format('YYYY-MM-DD HH:mm:ss'),
    requestMethod: request.method,
    requestURL: request.originalUrl.split('?')[0],
    logGenTime: new Date(),
    transactionId
  };

  let payload = {queryParams: request.query};

  const incomingRequestData: RequestInfoLogs = {
    startTime: startTime.format('YYYY-MM-DD HH:mm:ss'),
    requestMethod: request.method,
    requestURL: request.originalUrl,
    transactionId
  };

  let shouldLog = true;
  for (let keys of Option.GLOBALOPTIONS.URIEXCLUSIONFROMHTTPACCESSLOGS) {
    if (request.path.includes(keys)) {
      shouldLog = false;
      break;
    }
  }
  if (shouldLog) LoggingUtils.info(incomingRequestData, 'http-logging-middleware');
  try {
    // Proceed with the request
    const result = await next();

    const endTime = moment();
    const durationInMs = moment.duration(endTime.diff(startTime)).asMilliseconds();
    // Process response
    payload = _.extend(payload, {
      requestBody: request.body ?? null
    });
    logData = _.extend(logData, {
      payload,
      responseJSON: result,
      isError: false,
      endTime: endTime.format('YYYY-MM-DD HH:mm:ss'),
      durationInMs
    });

    QueueProducer.sendMessageInLogProcessingQueue({
      eventType: LogProcessingQueueMessageEventType.HTTP_ACCESS_LOG,
      logDate: moment().toDate(),
      data: logData
    }).catch((err: any) => {
      LoggingUtils.error(err);
    });

    return result;
  } catch (err) {
    // Catch errors from downstream middleware

    if(typeof err == 'string'){
      err = {message : err, details : err, stack : err}
    }
    const endTime = moment();
    const durationInMs = moment.duration(endTime.diff(startTime)).asMilliseconds();

    payload = _.extend(payload, {
      requestBody: request.body ?? null
    });

    logData = _.extend(logData, {
      payload,
      responseJSON: {
        name: 'Error',
        message: err.message ?? err,
        statusCode: +(err.status ?? err.statusCode)
      },
      isError: true,
      endTime: endTime.format('YYYY-MM-DD HH:mm:ss'),
      durationInMs
    });

    QueueProducer.sendMessageInLogProcessingQueue({
      eventType: LogProcessingQueueMessageEventType.HTTP_ACCESS_LOG,
      logDate: moment().toDate(),
      data: logData
    }).catch((err: any) => {
      LoggingUtils.error(err);
    });

    const errorObjectToLog: ApplicationErrorLogs = {
      requestMethod: request.method,
      requestURL: request.originalUrl,
      transactionId: transactionId,
      errorMessage: (err.message ?? err.Error.message ?? ''),
      errorDetails: (err.details ? JSON.stringify(err.details) : ''),
      errorStack: (err.stack ?? '')
    };
    LoggingUtils.error(errorObjectToLog, 'http-logging-middleware/error-handler');

    if (err.hasOwnProperty('code') && err.code == 'VALIDATION_FAILED') { //In case this is a custom 422 sent by controller
      return Promise.reject(new RestError(422, 'The request body is invalid'));
    } else if (!(err instanceof RestError)) { //If it is not a valid restError
      //We need to handle this seperately as the authorization component isn't responding with a RestError
      if (err.hasOwnProperty('statusCode') && err.statusCode == 403) { // In case this is received from another service
        return Promise.reject(new RestError(403, 'Access denied'));
      } else {
        return Promise.reject(new RestError(491, 'We seem to have encountered a  temporary glitch. Kindly try after some time'));
      }
    } else {
      let status_array = [400, 411, 413, 414, 415, 416, 401, 404, 422];
      if (err.status == 461) {
        response.setHeader('expired-token', userAuthToken);
      }
      if (status_array.includes(Number(err.status))) {
        if (err.extra && err.extra.systemcode && ErrorCodes.SYSTEMCODEMAPPING[err.extra.systemcode]) {
          let errorMessageFromMapping = ErrorCodes.SYSTEMCODEMAPPING[err.extra.systemcode]['message']
          let errorMessage = errorMessageFromMapping && errorMessageFromMapping.length > 0 ? errorMessageFromMapping : err.message
          return Promise.reject(
            new RestError(
              ErrorCodes.SYSTEMCODEMAPPING[err.extra.systemcode]['httpStatus'],
              errorMessage,
              {systemcode: err.extra.systemcode}
            )
          );
        } else {
          return Promise.reject(err);
        }
      } else {
        return Promise.reject(err);
      }
    }
  }
};
