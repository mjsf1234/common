import { BaseModel } from './base-model.model';
export declare class BaseDataDumpModel extends BaseModel {
    isActive?: boolean;
    createdDate?: Date;
    lastModifiedDate?: Date;
    [prop: string]: any;
    constructor(data?: Partial<BaseDataDumpModel>);
}
export interface BaseDataDumpModelRelations {
}
export declare type BaseDataDumpModelWithRelations = BaseDataDumpModel & BaseDataDumpModelRelations;
