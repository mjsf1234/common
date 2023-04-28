import { BaseSQLModel } from '..';
export declare class AppUserRoleMapping extends BaseSQLModel {
    appUserId: number;
    appRoleId: number;
    [prop: string]: any;
    constructor(data?: Partial<AppUserRoleMapping>);
}
export interface AppUserRoleMappingRelations {
}
export declare type AppUserRoleMappingWithRelations = AppUserRoleMapping & AppUserRoleMappingRelations;
