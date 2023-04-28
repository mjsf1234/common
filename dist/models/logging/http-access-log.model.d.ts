import { BaseDataDumpModel } from '..';
export declare class HTTPAccessLog extends BaseDataDumpModel {
    transactionId: string;
    requestURL: string;
    startTime: Date;
    endTime: Date;
    durationInMs: Number;
    requestMethod: string;
    isError?: boolean;
    payload?: string;
    responseJSON?: object;
    ipAddress?: string;
    logGenTime?: Date;
    appUserId?: number;
    [prop: string]: any;
    constructor(data?: Partial<HTTPAccessLog>);
}
export interface HTTPAccessLogRelations {
}
export declare type HTTPAccessLogWithRelations = HTTPAccessLog & HTTPAccessLogRelations;
