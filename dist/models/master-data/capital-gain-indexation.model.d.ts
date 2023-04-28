import { BaseSQLModel } from '..';
export declare class CapitalGainIndexation extends BaseSQLModel {
    fromDate: Date;
    toDate: Date;
    index: number;
    [prop: string]: any;
    constructor(data?: Partial<CapitalGainIndexation>);
}
export interface CapitalGainIndexationRelations {
}
export declare type CapitalGainIndexationWithRelations = CapitalGainIndexation & CapitalGainIndexationRelations;
