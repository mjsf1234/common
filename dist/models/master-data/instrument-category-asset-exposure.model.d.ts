import { BaseSQLModel } from '..';
export declare class InstrumentCategoryAssetExposure extends BaseSQLModel {
    id?: number;
    name: string;
    percentage: number;
    instrumentCategoryId?: number;
    assetId?: number;
    [prop: string]: any;
    constructor(data?: Partial<InstrumentCategoryAssetExposure>);
}
export interface InstrumentCategoryAssetExposureRelations {
}
export declare type InstrumentCategoryAssetExposureWithRelations = InstrumentCategoryAssetExposure & InstrumentCategoryAssetExposureRelations;
