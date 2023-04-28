import { BaseSQLModel } from '..';
import { Family } from './family.model';
export declare class Group extends BaseSQLModel {
    name: string;
    description?: string;
    groupHead?: string;
    config?: object;
    status: number;
    families?: Family[];
    [prop: string]: any;
    constructor(data?: Partial<Group>);
}
export interface GroupRelations {
}
export declare type GroupWithRelations = Group & GroupRelations;
