import { BaseSQLModel } from '..';
export declare class InvestorCategory extends BaseSQLModel {
    name: string;
    description?: string;
    [prop: string]: any;
    constructor(data?: Partial<InvestorCategory>);
}
export interface InvestorCategoryRelations {
}
export declare type InvestorCategoryWithRelations = InvestorCategory & InvestorCategoryRelations;
