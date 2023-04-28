import { BaseSQLModel } from '..';
import { AppUser } from './app-user.model';
export declare class Family extends BaseSQLModel {
    name: string;
    config?: object;
    bosCode?: string;
    groupId?: number;
    appUsers?: AppUser[];
    [prop: string]: any;
    constructor(data?: Partial<Family>);
}
export interface FamilyRelations {
}
export declare type FamilyWithRelations = Family & FamilyRelations;
