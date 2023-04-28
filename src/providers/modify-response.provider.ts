import {Send, Response, OperationRetval} from '@loopback/rest';
import {Provider, inject} from '@loopback/core';
import {RestBindings, Request} from '@loopback/rest';
import {CryptoUtils, encodeString, hasExcludedRoute} from '../utils';
import {Option} from '../constants';
const he = require('he');

export class ModifyResponseProvider implements Provider<Send> {
  constructor(@inject(RestBindings.Http.REQUEST) public request: Request) {}

  value() {
    // Use the lambda syntax to preserve the "this" scope for future calls!
    return (response: Response, result: OperationRetval) => {
      this.addHeaders(response, result);
    };
  }
  /**
   * @param response - The response object used to reply to the  client.
   * @param result - The result of the operation carried out by the controller's
   * handling function.
   */
  addHeaders(response: Response, result: OperationRetval) {
    // for file downloading;
    let downloadHeader = response.getHeader('x-rta-file');
    if (downloadHeader)
    {
      setHeaders(response);
      return response;
    }
    if (!result) {
      // HSTS Headers
      //response.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
      return response.end();
    }

    //set required headers to the response object
    setHeaders(response);


    //sanitize json

    let isInterNalRequest : boolean = false
    const requestHeaders = response.req.headers
    const API_KEY = (requestHeaders["authorization"] ?? requestHeaders["Authorization"] ?? null)
    if(API_KEY && process.env.COMMON_API_KEY == API_KEY){
      isInterNalRequest = true
    }
    const responseContentType = response.getHeader('Content-type')

    //encoding JSON string. This will convert characters like < > to &lt; and &gt;. Similar logic has been added to the clients to handle this
    if (
      !isInterNalRequest &&
      !Buffer.isBuffer(result) &&
      responseContentType &&
      typeof responseContentType == 'string' &&
      responseContentType.includes('application/json')
    ) {
      result = JSON.parse(
        he
          .encode(JSON.stringify(result), {useNamedReferences: true})
          .replace(/\&quot;/g, '"')
          .replace(/\+/g, '&plus;')
          .replace(/\(/g, '&lpar;')
          .replace(/\)/g, '&rpar;')
      );
    }

    if (
      !isInterNalRequest &&
      !Buffer.isBuffer(result) &&
      responseContentType &&
      typeof responseContentType == 'string' &&
      responseContentType.includes('application/json') &&
      Option.GLOBALOPTIONS.BOOLEANVARS[process.env.REQ_RES_ENCRYPTION!] &&
      !Option.GLOBALOPTIONS.URIEXCLUSIONLISTFROMREQUESTRESPONSEENCRYPTION.includes(this.request.url.split('?')[0])
    ) {
      const plainKey = CryptoUtils.generateRandomSecretKey();
      const cipheredKey = encodeString(plainKey);
      response.setHeader('cipheredKey', cipheredKey);
      response.setHeader('Access-Control-Expose-Headers', 'cipheredKey');

      const encryptedResult = {payload: CryptoUtils.symmetricEncryption(JSON.stringify(result), plainKey).toString()};
      result = encryptedResult;
    }
    response.send(result);
  }
}

export const setHeaders = (response: Response) => {
  // HSTS Headers
  response.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  response.setHeader('X-Frame-Options', 'DENY');
  // Preferred over X-XSS-Protection
  response.setHeader('Content-Security-Policy', 'default-src https:');
  response.setHeader('X-Content-Type-Options', 'nosniff');
  response.setHeader('Content-Security-Policy', "default-src 'self'");
  response.setHeader('cache-control', 'no-store');
  response.setHeader('X-XSS-Protection', '0');

  //If the request object's content type is application/xml then we set the response's content type to application/xml as well
  if (response.req.headers['content-type'] == 'application/xml') {
    response.setHeader('Content-type', 'application/xml');
  }
  if (!response.getHeader('Content-type')) {
    response.setHeader('Content-type', 'application/json;charset=utf-8');
  }
};
