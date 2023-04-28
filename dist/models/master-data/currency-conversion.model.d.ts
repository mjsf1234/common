import { BaseSQLModel } from '..';
export declare class CurrencyConversion extends BaseSQLModel {
    rate: number;
    currencyReturnRatePerDay?: number;
    currencyReturnRatePerYear?: number;
    rateDate: Date;
    dailyReturn?: number;
    targetCurrencyId: number;
    baseCurrencyId: number;
    [prop: string]: any;
    constructor(data?: Partial<CurrencyConversion>);
}
export interface CurrencyConversionRelations {
}
export declare type CurrencyConversionWithRelations = CurrencyConversion & CurrencyConversionRelations;
