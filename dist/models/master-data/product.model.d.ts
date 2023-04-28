import { BaseSQLModel } from '..';
export declare class Product extends BaseSQLModel {
    id?: number;
    name: string;
    description?: string;
    bosCode: string;
    benchmarkInstrumentId?: number;
    [prop: string]: any;
    constructor(data?: Partial<Product>);
}
export interface ProductRelations {
}
export declare type ProductWithRelations = Product & ProductRelations;
