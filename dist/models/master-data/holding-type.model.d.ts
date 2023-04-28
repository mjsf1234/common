import { BaseSQLModel } from '..';
export declare class HoldingType extends BaseSQLModel {
    id?: number;
    name: string;
    description?: string;
    bosCode?: string;
    nseCode?: string;
    bseCode?: string;
    coreBankCode?: Array<string>;
    [prop: string]: any;
    constructor(data?: Partial<HoldingType>);
}
export interface HoldingTypeRelations {
}
export declare type HoldingTypeWithRelations = HoldingType & HoldingTypeRelations;
