import { BaseSQLModel, ModelPortfolio } from '..';
export declare class Tenure extends BaseSQLModel {
    id?: number;
    tenureInYear?: number;
    tenureInMonth?: number;
    modelPortfolios?: ModelPortfolio[];
    [prop: string]: any;
    constructor(data?: Partial<Tenure>);
}
export interface TenureRelations {
}
export declare type TenureWithRelations = Tenure & TenureRelations;
