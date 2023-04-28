import { BaseSQLModel } from '..';
import { CurrencyConversion } from './currency-conversion.model';
export declare class Currency extends BaseSQLModel {
    name: string;
    shortName: string;
    rtaCode?: string;
    bosCode?: string;
    nseCode?: string;
    bseCode?: string;
    countryId?: number;
    conversions?: CurrencyConversion[];
    reverseConversions?: CurrencyConversion[];
    [prop: string]: any;
    constructor(data?: Partial<Currency>);
}
export interface CurrencyRelations {
}
export declare type CurrencyWithRelations = Currency & CurrencyRelations;
