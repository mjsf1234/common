import { BaseDataDumpModel } from '..';
export declare class EtlLog extends BaseDataDumpModel {
    rowNumber: number;
    errorCode?: string;
    errorMessage?: string;
    logGenTime?: Date;
    bulkUploadId: number;
    [prop: string]: any;
    constructor(data?: Partial<EtlLog>);
}
export interface EtlLogRelations {
}
export declare type EtlLogWithRelations = EtlLog & EtlLogRelations;
