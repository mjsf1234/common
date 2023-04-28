import { BaseSQLModel, Goal } from '..';
export declare class GoalCategory extends BaseSQLModel {
    goalType: number;
    sequence?: number;
    lumpsumAmount?: number;
    targetAmount?: number;
    sipAmount?: number;
    tenureInMonth?: number;
    icon?: string;
    isDefault: boolean;
    category?: string;
    goal?: Goal;
    [prop: string]: any;
    constructor(data?: Partial<GoalCategory>);
}
export interface GoalCategoryRelations {
}
export declare type GoalCategoryWithRelations = GoalCategory & GoalCategoryRelations;
