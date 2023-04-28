import { BaseSQLModel } from '..';
export declare class PollingCheck extends BaseSQLModel {
    activityName?: string;
    activityStatus: number;
    startDate?: Date;
    endDate?: Date;
    accountId: number;
    [prop: string]: any;
    constructor(data?: Partial<PollingCheck>);
}
export interface PollingCheckRelations {
}
export declare type PollingCheckWithRelations = PollingCheck & PollingCheckRelations;
