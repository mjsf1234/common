import { BaseSQLModel } from '..';
export declare class BusinessType extends BaseSQLModel {
    name: string;
    description?: string;
    bosCode?: string;
    nseCode?: string;
    bseCode?: string;
    [prop: string]: any;
    constructor(data?: Partial<BusinessType>);
}
export interface BusinessTypeRelations {
}
export declare type BusinessTypeWithRelations = BusinessType & BusinessTypeRelations;
