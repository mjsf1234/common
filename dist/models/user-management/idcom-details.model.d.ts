import { BaseSQLModel } from '..';
export declare class IdcomDetails extends BaseSQLModel {
    redirectUrl: string;
    authCode: string;
    handleCallbackStatus: boolean;
    appUserId: number;
    deviceId: number;
    [prop: string]: any;
    constructor(data?: Partial<IdcomDetails>);
}
export interface IdcomDetailsRelations {
}
export declare type IdcomDetailsWithRelations = IdcomDetails & IdcomDetailsRelations;
