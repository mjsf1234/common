import { BaseDataDumpModel } from '..';
export declare class ActivityLog extends BaseDataDumpModel {
    page: string;
    activity: string;
    ipAddress?: string;
    userCode?: string;
    userName?: string;
    logGenTime?: Date;
    appUserId: number;
    [prop: string]: any;
    constructor(data?: Partial<ActivityLog>);
}
export interface ActivityLogRelations {
}
export declare type ActivityLogWithRelations = ActivityLog & ActivityLogRelations;
