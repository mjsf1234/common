import { BaseSQLModel } from '..';
export declare class AppRole extends BaseSQLModel {
    id?: number;
    name: string;
    [prop: string]: any;
    constructor(data?: Partial<AppRole>);
}
export interface AppRoleRelations {
}
export declare type AppRoleWithRelations = AppRole & AppRoleRelations;
