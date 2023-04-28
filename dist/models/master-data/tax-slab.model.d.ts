import { BaseSQLModel } from '..';
export declare class TaxSlab extends BaseSQLModel {
    id?: number;
    name: string;
    bosCode?: string;
    minValue?: number;
    maxValue?: number;
    [prop: string]: any;
    constructor(data?: Partial<TaxSlab>);
}
export interface TaxSlabRelations {
}
export declare type TaxSlabWithRelations = TaxSlab & TaxSlabRelations;
