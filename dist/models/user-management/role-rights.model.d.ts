import { BaseSQLModel } from '..';
export declare class RoleRights extends BaseSQLModel {
    profile: string;
    roleDescription: string;
    rights: string;
    rightsDescription: string;
    read: boolean;
    write: boolean;
    roleStatus: string;
    rightsStatus: string;
    department?: string | null;
    typeOfAccess: string;
    constructor(data?: Partial<RoleRights>);
}
export interface RoleRightsRelations {
}
export declare type RoleRightsWithRelations = RoleRights & RoleRightsRelations;
