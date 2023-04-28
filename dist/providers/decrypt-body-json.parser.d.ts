/// <reference types="express" />
import { BodyParser, RequestBody, Request, RequestBodyParserOptions } from '@loopback/rest';
export declare class DecryptBodyJsonParser implements BodyParser {
    name: symbol;
    private jsonParser;
    private textParser;
    constructor(options?: RequestBodyParserOptions);
    supports(mediaType: string): boolean;
    parse(request: Request): Promise<RequestBody>;
    decryptRequestBody(body: any, request: Request): any;
}
