import { BaseDataDumpModel } from '..';
export declare class CronLog extends BaseDataDumpModel {
    cronJobName: string;
    command?: string;
    cronStatus: number;
    log?: object;
    startDate: Date;
    endDate?: Date;
    isSuccess?: boolean;
    logGenTime?: Date;
    [prop: string]: any;
    constructor(data?: Partial<CronLog>);
}
export interface CronLogRelations {
}
export declare type CronLogWithRelations = CronLog & CronLogRelations;
