import { BaseDataDumpModel } from '..';
export declare class OutgoingApiCallLog extends BaseDataDumpModel {
    url: string;
    request: object;
    response?: object;
    success: boolean;
    externalSystemName: string;
    transactionId: string;
    logGenTime?: Date;
    extraInfo?: object;
    [prop: string]: any;
    constructor(data?: Partial<OutgoingApiCallLog>);
}
export interface OutgoingApiCallLogRelations {
}
export declare type OutgoingApiCallLogWithRelations = OutgoingApiCallLog & OutgoingApiCallLogRelations;
