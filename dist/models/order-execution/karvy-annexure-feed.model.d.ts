import { BaseSQLModel } from '..';
export declare class KarvyAnnexureFeed extends BaseSQLModel {
    batchNumber?: number;
    batchSequenceNumber?: number;
    accountId: number;
    [prop: string]: any;
    constructor(data?: Partial<KarvyAnnexureFeed>);
}
export interface KarvyAnnexureFeedRelations {
}
export declare type KarvyAnnexureFeedWithRelations = KarvyAnnexureFeed & KarvyAnnexureFeedRelations;
