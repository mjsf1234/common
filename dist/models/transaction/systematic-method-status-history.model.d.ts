import { BaseSQLModel } from '..';
export declare class SystematicMethodStatusHistory extends BaseSQLModel {
    previousFrequencyDay?: number;
    frequencyDayChangedTo?: number;
    previousStatus?: number;
    statusChangedTo?: number;
    systematicMethodId: number;
    [prop: string]: any;
    constructor(data?: Partial<SystematicMethodStatusHistory>);
}
export interface SystematicMethodStatusHistoryRelations {
}
export declare type SystematicMethodStatusHistoryWithRelations = SystematicMethodStatusHistory & SystematicMethodStatusHistoryRelations;
