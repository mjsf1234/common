import { BaseDataDumpModel } from '..';
export declare class DataSyncLog extends BaseDataDumpModel {
    sourceName: string;
    taskName: string;
    recordCount: number;
    startDate: Date;
    endDate?: Date;
    logGenTime?: Date;
    [prop: string]: any;
    constructor(data?: Partial<DataSyncLog>);
}
export interface DataSyncLogRelations {
}
export declare type DataSyncLogWithRelations = DataSyncLog & DataSyncLogRelations;
