import { BaseSQLModel } from './base-sql-model.model';
export declare class BaseAppFileModel extends BaseSQLModel {
    path: string;
    containerName: string;
    checksum?: string;
    originalFileName: string;
    name: string;
    size: number;
    extension?: string;
    mimeType: string;
    batchCode?: string;
    [prop: string]: any;
    constructor(data?: Partial<BaseAppFileModel>);
}
export interface BaseAppFileRelations {
}
export declare type BaseAppFileWithRelations = BaseAppFileModel & BaseAppFileRelations;
