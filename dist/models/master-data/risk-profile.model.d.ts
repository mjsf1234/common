import { BaseSQLModel, ModelPortfolio, ModelPortfolioInstrument } from '..';
export declare class RiskProfile extends BaseSQLModel {
    id?: number;
    name: string;
    description?: string;
    svg?: string;
    minScore: number;
    maxScore: number;
    bosCode?: string;
    modelPortfolios?: ModelPortfolio[];
    modelPortfolioInstruments?: ModelPortfolioInstrument[];
    [prop: string]: any;
    constructor(data?: Partial<RiskProfile>);
}
export interface RiskProfileRelations {
}
export declare type RiskProfileWithRelations = RiskProfile & RiskProfileRelations;
