import { BaseSQLModel } from '..';
export declare class CasRequest extends BaseSQLModel {
    casReferenceNumber?: string;
    readType?: number;
    casType?: number;
    status?: number;
    triggeredDate: Date;
    receivedDate?: Date;
    processedDate?: Date;
    appUserId: number;
    transactionAppFileId?: number;
    [prop: string]: any;
    constructor(data?: Partial<CasRequest>);
}
export interface CasRequestRelations {
}
export declare type CasRequestWithRelations = CasRequest & CasRequestRelations;
