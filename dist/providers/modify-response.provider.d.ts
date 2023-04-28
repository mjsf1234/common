/// <reference types="express" />
import { Send, Response, OperationRetval } from '@loopback/rest';
import { Provider } from '@loopback/core';
import { Request } from '@loopback/rest';
export declare class ModifyResponseProvider implements Provider<Send> {
    request: Request;
    constructor(request: Request);
    value(): (response: Response, result: OperationRetval) => void;
    /**
     * @param response - The response object used to reply to the  client.
     * @param result - The result of the operation carried out by the controller's
     * handling function.
     */
    addHeaders(response: Response, result: OperationRetval): Response<any, Record<string, any>> | undefined;
}
export declare const setHeaders: (response: Response) => void;
