import { BaseSQLModel } from '..';
export declare class WealthSource extends BaseSQLModel {
    id?: number;
    name: string;
    description?: string;
    bosCode?: string;
    nseCode?: string;
    bseCode?: string;
    coreBankCode?: Array<string>;
    [prop: string]: any;
    constructor(data?: Partial<WealthSource>);
}
export interface WealthSourceRelations {
}
export declare type WealthSourceWithRelations = WealthSource & WealthSourceRelations;
