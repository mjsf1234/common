import { BaseSQLModel } from '..';
export declare class Gain extends BaseSQLModel {
    uniqueId?: string;
    buyDate: Date;
    buyFinancialYear?: string;
    buyIndexationCost?: number;
    indexedCost?: number;
    pricePerUnitAsOnGrandfatheringDate?: number;
    nav?: number;
    adjustedPurchaseCost?: number;
    sellDate: Date;
    sellFinancialYear?: string;
    sellIndexationCost?: number;
    holdingDays: number;
    quantity: number;
    averageBuyPricePerUnit: number;
    averageSellPricePerUnit: number;
    totalBuyAmount: number;
    totalSellAmount: number;
    shortTermCapitalGain: number;
    longTermCapitalGain: number;
    businessCapitalGain?: number;
    totalCapitalGain?: number;
    totalCapitalGainWithIndexation?: number;
    differenceDueToIndexation?: number;
    capitalGainType?: number;
    calculations?: object;
    effectiveCost?: number;
    priceAsOn31Jan2018?: number;
    serviceProviderAccountId: number;
    instrumentId: number;
    currencyId: number;
    buyTransactionId: number;
    sellTransactionId: number;
    productId: number;
    [prop: string]: any;
    constructor(data?: Partial<Gain>);
}
export interface GainRelations {
}
export declare type GainWithRelations = Gain & GainRelations;
