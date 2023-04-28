import { BaseSQLModel } from '..';
import { Holding, RebalancingCheck } from '../transaction';
export declare class Goal extends BaseSQLModel {
    uniqueId?: string;
    name: string;
    type: number;
    description?: string;
    startDate?: Date;
    endDate?: Date;
    targetAmount?: number;
    expectedCorpus?: number;
    config?: object;
    goalCategoryId?: number;
    accountId: number;
    holdings?: Holding[];
    rebalancingCheck?: RebalancingCheck;
    [prop: string]: any;
    constructor(data?: Partial<Goal>);
}
export interface GoalRelations {
}
export declare type GoalWithRelations = Goal & GoalRelations;
