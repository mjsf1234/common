import { BaseSQLModel } from '..';
export declare class ReverseFeed extends BaseSQLModel {
    name?: string;
    remarks?: string;
    status: number;
    batchCode?: string;
    rtaId: number;
    uploadedByAppUserId: number;
    transactionAppFileId: number;
    reverseFeedReconciliationFileId?: number;
    deletedByAppUserId?: number;
    [prop: string]: any;
    constructor(data?: Partial<ReverseFeed>);
}
export interface ReverseFeedRelations {
}
export declare type ReverseFeedWithRelations = ReverseFeed & ReverseFeedRelations;
