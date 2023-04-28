import { BaseSQLModel } from '..';
export declare class MandateType extends BaseSQLModel {
    id?: number;
    name: string;
    description?: string;
    bosCode?: string;
    nseCode?: string;
    bseCode?: string;
    maxAmount: number;
    [prop: string]: any;
    constructor(data?: Partial<MandateType>);
}
export interface MandateTypeRelations {
}
export declare type MandateTypeWithRelations = MandateType & MandateTypeRelations;
