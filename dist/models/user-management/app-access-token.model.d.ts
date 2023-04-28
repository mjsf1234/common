import { BaseSQLModel } from '..';
export declare class AppAccessToken extends BaseSQLModel {
    token: string;
    expiry: Date;
    tokenData?: object;
    refreshToken: string;
    refreshTokenExpiry: Date;
    ipAddress: string;
    appUserId: number;
    [prop: string]: any;
    constructor(data?: Partial<AppAccessToken>);
}
export interface AppAccessTokenRelations {
}
export declare type AppAccessTokenWithRelations = AppAccessToken & AppAccessTokenRelations;
