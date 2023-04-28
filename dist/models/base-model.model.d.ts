import { Entity } from '@loopback/repository';
export declare class BaseModel extends Entity {
    id?: number;
    isActive?: boolean;
    createdDate?: Date;
    lastModifiedDate?: Date;
    [prop: string]: any;
    constructor(data?: Partial<BaseModel>);
}
export interface BaseModelRelations {
}
export declare type BaseModelWithRelations = BaseModel & BaseModelRelations;
