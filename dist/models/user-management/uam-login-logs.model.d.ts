import { BaseSQLModel } from '..';
export declare class UamLoginLogs extends BaseSQLModel {
    userId: string;
    employeeCode: string;
    employeeName: string;
    loginDate: Date;
    loginTime: string;
    logoutTime: string;
    applicationName?: string;
    ipAddress?: string;
    assetDetails?: string;
    token: string;
    constructor(data?: Partial<UamLoginLogs>);
}
export interface UamLoginLogsRelations {
}
export declare type UamLoginLogsWithRelations = UamLoginLogs & UamLoginLogsRelations;
