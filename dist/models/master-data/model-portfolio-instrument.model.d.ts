import { BaseSQLModel } from '..';
export declare class ModelPortfolioInstrument extends BaseSQLModel {
    id?: number;
    weightage?: number;
    minTenureMonths?: number;
    maxTenureMonths?: number;
    investmentType?: number;
    instrumentId?: number;
    riskProfileId?: number;
    modelPortfolioAmountCappingId?: number;
    [prop: string]: any;
    constructor(data?: Partial<ModelPortfolioInstrument>);
}
export interface ModelPortfolioInstrumentRelations {
}
export declare type ModelPortfolioInstrumentWithRelations = ModelPortfolioInstrument & ModelPortfolioInstrumentRelations;
