import { BaseSQLModel } from '..';
export declare class PreLoginUser extends BaseSQLModel {
    userData?: object;
    isRegistered: boolean;
    [prop: string]: any;
    constructor(data?: Partial<PreLoginUser>);
}
export interface PreLoginUserRelations {
}
export declare type PreLoginUserWithRelations = PreLoginUser & PreLoginUserRelations;
