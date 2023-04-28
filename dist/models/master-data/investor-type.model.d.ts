import { BaseSQLModel } from '..';
export declare class InvestorType extends BaseSQLModel {
    id?: number;
    name: string;
    description?: string;
    clientType?: number;
    category?: string;
    bosCode?: string;
    nseCode?: string;
    bseCode?: string;
    isMinor?: boolean;
    coreBankCode?: Array<string>;
    [prop: string]: any;
    constructor(data?: Partial<InvestorType>);
}
export interface InvestorTypeRelations {
}
export declare type InvestorTypeWithRelations = InvestorType & InvestorTypeRelations;
