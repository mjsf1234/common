import { BaseSQLModel } from '..';
export declare class InstrumentsExportFile extends BaseSQLModel {
    type?: string;
    filter?: string;
    status?: number;
    remarks?: string;
    accountId: number;
    userManagementAppFileId: number;
    [prop: string]: any;
    constructor(data?: Partial<InstrumentsExportFile>);
}
export interface InstrumentsExportFileRelations {
}
export declare type InstrumentsExportFileWithRelations = InstrumentsExportFile & InstrumentsExportFileRelations;
