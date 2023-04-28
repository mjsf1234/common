import { BaseDataDumpModel } from '..';
export declare class ErrorLog extends BaseDataDumpModel {
    errorCode: string;
    errorMessage: string;
    stackTrace?: object;
    remark?: string;
    isResolved?: boolean;
    logGenTime?: Date;
    [prop: string]: any;
    constructor(data?: Partial<ErrorLog>);
}
export interface ErrorLogRelations {
}
export declare type ErrorLogWithRelations = ErrorLog & ErrorLogRelations;
