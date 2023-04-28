import { BaseSQLModel } from '..';
export declare class Asset extends BaseSQLModel {
    id?: number;
    name: string;
    description?: string;
    assetType: number;
    bosCode?: string;
    [prop: string]: any;
    constructor(data?: Partial<Asset>);
}
export interface AssetRelations {
}
export declare type AssetWithRelations = Asset & AssetRelations;
