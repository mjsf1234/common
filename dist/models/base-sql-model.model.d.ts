import { BaseModel } from './base-model.model';
export declare class BaseSQLModel extends BaseModel {
    isActive?: boolean;
    createdDate?: Date;
    lastModifiedDate?: Date;
    [prop: string]: any;
    constructor(data?: Partial<BaseSQLModel>);
}
export interface BaseSQLModelRelations {
}
export declare type BaseSQLModelWithRelations = BaseSQLModel & BaseSQLModelRelations;
