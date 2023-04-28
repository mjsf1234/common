import { BaseSQLModel } from '..';
export declare class ModelPortfolioAsset extends BaseSQLModel {
    id?: number;
    weightage?: number;
    sipWeightage?: number;
    priority: number;
    modelPortfolioId?: number;
    assetId?: number;
    [prop: string]: any;
    constructor(data?: Partial<ModelPortfolioAsset>);
}
export interface ModelPortfolioAssetRelations {
}
export declare type ModelPortfolioAssetWithRelations = ModelPortfolioAsset & ModelPortfolioAssetRelations;
