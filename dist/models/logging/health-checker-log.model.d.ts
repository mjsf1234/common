import { BaseDataDumpModel } from '..';
export declare class HealthCheckerLog extends BaseDataDumpModel {
    jobName?: string;
    jobSequence: number;
    executionDate: Date;
    status: number;
    remark?: string;
    logGenTime?: Date;
    [prop: string]: any;
    constructor(data?: Partial<HealthCheckerLog>);
}
export interface HealthCheckerLogRelations {
}
export declare type HealthCheckerLogWithRelations = HealthCheckerLog & HealthCheckerLogRelations;
