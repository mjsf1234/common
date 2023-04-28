import { BaseSQLModel } from '..';
export declare class InvestmentReturnProjection extends BaseSQLModel {
    id?: number;
    goalTenureMonths: number;
    monthsPostInvestment: number;
    upsideOf10k: number;
    downsideOf10k: number;
    expectedOf10k: number;
    riskProfileId?: number;
    [prop: string]: any;
    constructor(data?: Partial<InvestmentReturnProjection>);
}
export interface InvestmentReturnProjectionRelations {
}
export declare type InvestmentReturnProjectionWithRelations = InvestmentReturnProjection & InvestmentReturnProjectionRelations;
