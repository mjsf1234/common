import { BaseSQLModel } from '..';
export declare class ProductTransactionTypeMapping extends BaseSQLModel {
    productId: number;
    transactionTypeId: number;
    [prop: string]: any;
    constructor(data?: Partial<ProductTransactionTypeMapping>);
}
export interface ProductTransactionTypeMappingRelations {
}
export declare type ProductTransactionTypeMappingWithRelations = ProductTransactionTypeMapping & ProductTransactionTypeMappingRelations;
