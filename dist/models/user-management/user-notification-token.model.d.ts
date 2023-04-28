import { BaseSQLModel } from '..';
export declare class UserNotificationToken extends BaseSQLModel {
    config?: object;
    appUserId: number;
    registrationToken: string;
    deviceName?: string;
    osName?: string;
    [prop: string]: any;
    constructor(data?: Partial<UserNotificationToken>);
}
export interface UserNotificationTokenRelations {
}
export declare type UserNotificationTokenWithRelations = UserNotificationToken & UserNotificationTokenRelations;
