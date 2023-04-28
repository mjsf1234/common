import { BaseSQLModel } from '..';
export declare class NomineeDocument extends BaseSQLModel {
    generatedDate?: Date;
    uploadDate?: Date;
    status: number;
    remarks?: string;
    aofFileName?: string;
    serviceProviderId?: number;
    accountId: number;
    appFileId?: number;
    rtaId?: number;
    [prop: string]: any;
    constructor(data?: Partial<NomineeDocument>);
}
export interface NomineeDocumentRelations {
}
export declare type NomineeDocumentWithRelations = NomineeDocument & NomineeDocumentRelations;
