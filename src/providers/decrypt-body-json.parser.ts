import {inject} from '@loopback/core';
import _ from 'lodash';
import {json, text} from 'body-parser';
import {is} from 'type-is';
import CryptoJS from 'crypto-js';
import {
  BodyParserMiddleware,
  builtinParsers,
  getParserOptions,
  invokeBodyParserMiddleware,
  BodyParser,
  RequestBody,
  sanitizeJsonParse,
  RestBindings,
  Request,
  RequestBodyParserOptions
} from '@loopback/rest';
import {LoggingUtils, CryptoUtils, decodeString} from '../utils';
import {QueueProducer, LogProcessingQueueMessageEventType} from '../queues';
import {Option} from '../constants';

export class DecryptBodyJsonParser implements BodyParser {
  name = builtinParsers.json;
  private jsonParser: BodyParserMiddleware;
  private textParser: BodyParserMiddleware;

  constructor(
    @inject(RestBindings.REQUEST_BODY_PARSER_OPTIONS, {optional: true})
    options: RequestBodyParserOptions = {}
  ) {
    const jsonOptions = getParserOptions('json', options);
    const rawOptions = getParserOptions('raw', options);
    const prohibitedKeys = ['__proto__', 'constructor.prototype', ...(options.validation?.prohibitedKeys ?? [])];
    jsonOptions.reviver = sanitizeJsonParse(jsonOptions.reviver, prohibitedKeys);
    this.jsonParser = json(jsonOptions);
    this.textParser = text(rawOptions);
  }

  supports(mediaType: string) {
    return !!is(mediaType, '*/json', '*/*+json', 'application/xml');
  }

  async parse(request: Request): Promise<RequestBody> {
    let body: any;
    if (request.headers['content-type'] === 'application/xml') {
      body = await invokeBodyParserMiddleware(this.textParser, request);
      return {value: {requestXML: body}};
    } else {
      let body = await invokeBodyParserMiddleware(this.jsonParser, request);
      // https://github.com/expressjs/body-parser/blob/master/lib/types/json.js#L71-L76
      const contentLength = request.get('content-length');
      if (contentLength != null && +contentLength === 0) {
        body = undefined;
      }
      body = this.decryptRequestBody(body, request);
      return {value: body};
    }
  }

  decryptRequestBody(body: any, request: Request) {
    if (
      Option.GLOBALOPTIONS.BOOLEANVARS[process.env.REQ_RES_ENCRYPTION!] &&
      ['POST', 'PUT', 'PATCH'].indexOf(request.method) > -1 &&
      body
    ) {
      try {
        const decipheredKey: string = decodeString(_.get(request, 'headers.cipheredkey'));
        const cipheredRequestPayload: any = body.payload;
        const bytes: CryptoJS.lib.WordArray = CryptoUtils.symmetricDecryption(cipheredRequestPayload, decipheredKey);
        let decipheredRequestPayload = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        if (typeof decipheredRequestPayload === 'string') {
          decipheredRequestPayload = JSON.parse(decipheredRequestPayload);
        }
        body = decipheredRequestPayload;
      } catch (err) {
        LoggingUtils.error('Error parsing payload!');
        LoggingUtils.error(err);
        throw new Error('Bad Request Payload');
      }
    }
    return body;
  }
}
