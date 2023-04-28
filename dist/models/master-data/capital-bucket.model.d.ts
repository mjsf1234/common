import { BaseSQLModel } from '..';
export declare class CapitalBucket extends BaseSQLModel {
    id?: number;
    name: string;
    shortName?: string;
    bosCode?: string;
    nseCode?: string;
    bseCode?: string;
    lowerLimit: number;
    upperLimit: number;
    [prop: string]: any;
    constructor(data?: Partial<CapitalBucket>);
}
export interface CapitalBucketRelations {
}
export declare type CapitalBucketWithRelations = CapitalBucket & CapitalBucketRelations;
