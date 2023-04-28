import { BaseSQLModel, ModelPortfolio, ModelPortfolioInstrument } from '..';
export declare class ModelPortfolioAmountCapping extends BaseSQLModel {
    id?: number;
    minAmount?: number;
    maxAmount?: number;
    numberOfSchemes?: number;
    investmentType?: number;
    modelPortfolios?: ModelPortfolio[];
    modelPortfolioInstruments?: ModelPortfolioInstrument[];
    [prop: string]: any;
    constructor(data?: Partial<ModelPortfolioAmountCapping>);
}
export interface ModelPortfolioAmountCappingRelations {
}
export declare type ModelPortfolioAmountCappingWithRelations = ModelPortfolioAmountCapping & ModelPortfolioAmountCappingRelations;
