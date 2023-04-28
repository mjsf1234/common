import { BaseSQLModel } from '..';
export declare class UamLoginAttemptsConfig extends BaseSQLModel {
    maxLoginAttempts: number;
    maxDormancyDays?: number;
    maxDormancyDaysBeforeFirstLogin?: number;
    [prop: string]: any;
    constructor(data?: Partial<UamLoginAttemptsConfig>);
}
export interface UamLoginAttemptsConfigRelations {
}
export declare type UamLoginAttemptsConfigWithRelations = UamLoginAttemptsConfig & UamLoginAttemptsConfigRelations;
