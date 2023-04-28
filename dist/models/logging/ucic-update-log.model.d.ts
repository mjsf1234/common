import { BaseDataDumpModel } from '..';
export declare class UcicUpdateLog extends BaseDataDumpModel {
    isUpdate?: boolean;
    deletedDate?: Date;
    logGenTime?: Date;
    sourceClient: number;
    targetClient: number;
    [prop: string]: any;
    constructor(data?: Partial<UcicUpdateLog>);
}
export interface UcicUpdateLogRelations {
}
export declare type UcicUpdateLogWithRelations = UcicUpdateLog & UcicUpdateLogRelations;
