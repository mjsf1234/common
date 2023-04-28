import { BaseSQLModel } from '..';
export declare class BulkUpload extends BaseSQLModel {
    type: number;
    status: number;
    extra?: object;
    masterDataAppFileId: number;
    appUserId: number;
    [prop: string]: any;
    constructor(data?: Partial<BulkUpload>);
}
export interface BulkUploadRelations {
}
export declare type BulkUploadWithRelations = BulkUpload & BulkUploadRelations;
