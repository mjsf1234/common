import { BaseSQLModel } from '..';
export declare class TransactionType extends BaseSQLModel {
    id?: number;
    name: string;
    description?: string;
    bosCode?: string;
    nseCode?: string;
    bseCode?: string;
    holdingCalculationBuySellType: number;
    includeInXirr?: boolean;
    [prop: string]: any;
    constructor(data?: Partial<TransactionType>);
}
export interface TransactionTypeRelations {
}
export declare type TransactionTypeWithRelations = TransactionType & TransactionTypeRelations;
