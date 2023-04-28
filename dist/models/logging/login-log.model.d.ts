import { BaseDataDumpModel } from '..';
export declare class LoginLog extends BaseDataDumpModel {
    loginDate: Date;
    ipAddress: string;
    source: string;
    version: string;
    details?: object;
    transactionId: string;
    logGenTime?: Date;
    appUserId: number;
    [prop: string]: any;
    constructor(data?: Partial<LoginLog>);
}
export interface LoginLogRelations {
}
export declare type LoginLogWithRelations = LoginLog & LoginLogRelations;
