import { BaseSQLModel } from '..';
export declare class AssetClassification extends BaseSQLModel {
    id?: number;
    bosCode?: string;
    name: string;
    description?: string;
    [prop: string]: any;
    constructor(data?: Partial<AssetClassification>);
}
export interface AssetClassificationRelations {
}
export declare type AssetClassificationWithRelations = AssetClassification & AssetClassificationRelations;
