import { BaseSQLModel } from '..';
import { ModelPortfolioAsset } from './model-portfolio-asset.model';
import { ModelPortfolioCategory } from './model-portfolio-category.model';
import { ModelPortfolioConfig } from './model-portfolio-config.model';
import { ModelPortfolioProduct } from './model-portfolio-product.model';
export declare class ModelPortfolio extends BaseSQLModel {
    id?: number;
    description?: string;
    name?: string;
    irr?: number;
    fvLumpsum10k?: number;
    fvSIP1k?: number;
    tenureMonths?: number;
    equityReturn?: number;
    debtReturn?: number;
    includeInTax?: boolean;
    includeInSip?: boolean;
    objectiveType?: number;
    productType: number;
    recommendationReasoning?: string;
    investmentType?: number;
    tenureId?: number;
    riskProfileId?: number;
    modelPortfolioAmountCappingId?: number;
    modelPortfolioAssets?: ModelPortfolioAsset[];
    modelPortfolioCategories?: ModelPortfolioCategory[];
    modelPortfolioProducts?: ModelPortfolioProduct[];
    modelPortfolioConfig?: ModelPortfolioConfig[];
    [prop: string]: any;
    constructor(data?: Partial<ModelPortfolio>);
}
export interface ModelPortfolioRelations {
}
export declare type ModelPortfolioWithRelations = ModelPortfolio & ModelPortfolioRelations;
