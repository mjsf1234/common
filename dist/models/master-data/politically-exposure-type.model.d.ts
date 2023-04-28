import { BaseSQLModel } from '..';
export declare class PoliticallyExposureType extends BaseSQLModel {
    id?: number;
    name: string;
    description?: string;
    bosCode?: string;
    nseCode?: string;
    bseCode?: string;
    [prop: string]: any;
    constructor(data?: Partial<PoliticallyExposureType>);
}
export interface PoliticallyExposureTypeRelations {
}
export declare type PoliticallyExposureTypeWithRelations = PoliticallyExposureType & PoliticallyExposureTypeRelations;
