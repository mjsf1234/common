import { BaseSQLModel } from '..';
export declare class RebalancingCheck extends BaseSQLModel {
    weekdayCheck?: number;
    lastCheckedDate?: Date;
    consecutiveWeeksPositive?: number;
    checkData?: object;
    alertGeneratedDate?: Date;
    alertData?: object;
    isAlertActive: boolean;
    hasActionStarted: boolean;
    lastActionDate?: Date;
    accountId: number;
    goalId?: number;
    [prop: string]: any;
    constructor(data?: Partial<RebalancingCheck>);
}
export interface RebalancingCheckRelations {
}
export declare type RebalancingCheckWithRelations = RebalancingCheck & RebalancingCheckRelations;
