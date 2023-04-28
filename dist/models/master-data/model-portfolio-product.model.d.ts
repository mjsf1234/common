import { BaseSQLModel } from '..';
export declare class ModelPortfolioProduct extends BaseSQLModel {
    id?: number;
    weightage?: number;
    priority: number;
    modelPortfolioAssetId?: number;
    productId?: number;
    modelPortfolioId?: number;
    [prop: string]: any;
    constructor(data?: Partial<ModelPortfolioProduct>);
}
export interface ModelPortfolioProductRelations {
}
export declare type ModelPortfolioProductWithRelations = ModelPortfolioProduct & ModelPortfolioProductRelations;
