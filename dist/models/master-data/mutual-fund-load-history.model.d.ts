import { BaseSQLModel } from '..';
export declare class MutualFundLoadHistory extends BaseSQLModel {
    srNo: number;
    effectiveDate: Date;
    fromAmount?: number;
    uptoAmount?: number;
    minValue?: number;
    maxValue?: number;
    value?: number;
    minPeriod?: number;
    maxPeriod?: number;
    period?: number;
    periodType?: number;
    loadType?: number;
    operationFlag?: string;
    fromPercent?: number;
    toPercent?: number;
    percentCondition?: string;
    amountCondition?: string;
    periodCondition?: string;
    amountType?: string;
    remarks?: string;
    instrumentId: number;
    [prop: string]: any;
    constructor(data?: Partial<MutualFundLoadHistory>);
}
export interface MutualFundLoadHistoryRelations {
}
export declare type MutualFundLoadHistoryWithRelations = MutualFundLoadHistory & MutualFundLoadHistoryRelations;
