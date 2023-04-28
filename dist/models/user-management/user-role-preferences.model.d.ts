import { BaseSQLModel } from '..';
export declare class UserRolePreferences extends BaseSQLModel {
    config?: object;
    appUserRoleMappingId: number;
    [prop: string]: any;
    constructor(data?: Partial<UserRolePreferences>);
}
export interface UserRolePreferencesRelations {
}
export declare type UserRolePreferencesWithRelations = UserRolePreferences & UserRolePreferencesRelations;
