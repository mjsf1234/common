import { BaseSQLModel } from '..';
export declare class MutualFundDetailsHistory extends BaseSQLModel {
    effectiveDate: Date;
    expenseRatio?: number;
    yieldToMaturity?: number;
    modDuration?: number;
    corpus?: number;
    avgMaturity?: number;
    instrumentId: number;
    [prop: string]: any;
    constructor(data?: Partial<MutualFundDetailsHistory>);
}
export interface MutualFundDetailsHistoryRelations {
}
export declare type MutualFundDetailsHistoryWithRelations = MutualFundDetailsHistory & MutualFundDetailsHistoryRelations;
