import { BaseSQLModel } from '..';
export declare class HistoricalHolding extends BaseSQLModel {
    uniqueId?: string;
    bosCode?: string;
    holdingDate: Date;
    quantity?: number;
    averagePricePerUnit?: number;
    totalInvestedAmount?: number;
    currentPricePerUnit?: number;
    totalCurrentValue?: number;
    totalCommitmentAmount?: number;
    totalDrawdownAmount?: number;
    totalInterestAccrualAmount?: number;
    totalInterestAmount?: number;
    totalReturnOfCapitalAmount?: number;
    totalReturnOnCapitalAmount?: number;
    dividendReinvested?: number;
    dividendPaid?: number;
    accruedInterest?: number;
    absoluteProfitLoss?: number;
    percentageProfitLoss?: number;
    xirr?: number;
    unrealizedShortTermCapitalGain: number;
    unrealizedLongTermCapitalGain: number;
    realizedShortTermCapitalGain?: number;
    realizedLongTermCapitalGain?: number;
    unrealizedShortTermCapitalQuantity?: number;
    unrealizedLongTermCapitalQuantity?: number;
    serviceProviderAccountId: number;
    instrumentId: number;
    currencyId: number;
    goalId?: number;
    [prop: string]: any;
    constructor(data?: Partial<HistoricalHolding>);
}
export interface HistoricalHoldingRelations {
}
export declare type HistoricalHoldingWithRelations = HistoricalHolding & HistoricalHoldingRelations;
