import { BaseModel } from './base-model.model';
export declare class BaseESModel extends BaseModel {
    isActive?: boolean;
    createdDate?: Date;
    lastModifiedDate?: Date;
    [prop: string]: any;
    constructor(data?: Partial<BaseESModel>);
}
export interface BaseESModelRelations {
}
export declare type BaseESModelWithRelations = BaseESModel & BaseESModelRelations;
