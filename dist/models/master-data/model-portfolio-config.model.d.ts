import { BaseSQLModel } from '..';
export declare class ModelPortfolioConfig extends BaseSQLModel {
    modelName?: string;
    modelWithTenure?: number;
    modelType?: number;
    forInstrument?: number;
    weightOrQuantity?: number;
    configurationForNonInstrument?: object;
    bosCode?: number;
    description?: string;
    cagr?: number;
    modelPortfolioId?: number;
    modelPortfolioAmountCappingId?: number;
    [prop: string]: any;
    constructor(data?: Partial<ModelPortfolioConfig>);
}
export interface ModelPortfolioConfigRelations {
}
export declare type ModelPortfolioConfigWithRelations = ModelPortfolioConfig & ModelPortfolioConfigRelations;
