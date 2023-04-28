/// <reference types="express" />
import { Request } from '@loopback/rest';
import { BaseCronFacade } from '../facades';
export declare class BaseCronController {
    private request;
    private additionalHeaders;
    private baseCronFacade;
    constructor(request: Request, additionalHeaders: any, baseCronFacade: BaseCronFacade);
    processCron(gcProps: any): Promise<any>;
}
