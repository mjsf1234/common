import { BaseSQLModel } from '..';
export declare class TransactionTypePossibleValue extends BaseSQLModel {
    id?: number;
    value: string;
    isApplicableForReverseFeed?: boolean;
    isApplicableForCAS?: boolean;
    transactionTypeId: number;
    [prop: string]: any;
    constructor(data?: Partial<TransactionTypePossibleValue>);
}
export interface TransactionTypePossibleValueRelations {
}
export declare type TransactionTypePossibleValueWithRelations = TransactionTypePossibleValue & TransactionTypePossibleValueRelations;
