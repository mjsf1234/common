import { BaseSQLModel } from '..';
export declare class ModelPortfolioCategory extends BaseSQLModel {
    id?: number;
    weightage?: number;
    sipWeightage?: number;
    priority?: number;
    sipPriority?: number;
    modelPortfolioId?: number;
    instrumentCategoryId?: number;
    modelPortfolioAssetId?: number;
    modelPortfolioProductId?: number;
    [prop: string]: any;
    constructor(data?: Partial<ModelPortfolioCategory>);
}
export interface ModelPortfolioCategoryRelations {
}
export declare type ModelPortfolioCategoryWithRelations = ModelPortfolioCategory & ModelPortfolioCategoryRelations;
