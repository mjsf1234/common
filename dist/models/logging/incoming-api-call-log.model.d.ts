import { BaseDataDumpModel } from '..';
export declare class IncomingApiCallLog extends BaseDataDumpModel {
    url: string;
    request: object;
    response?: object;
    success: boolean;
    externalSystemName: string;
    logGenTime?: Date;
    [prop: string]: any;
    constructor(data?: Partial<IncomingApiCallLog>);
}
export interface IncomingApiCallLogRelations {
}
export declare type IncomingApiCallLogWithRelations = IncomingApiCallLog & IncomingApiCallLogRelations;
