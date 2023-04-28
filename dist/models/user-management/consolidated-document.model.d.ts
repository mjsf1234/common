import { BaseSQLModel } from '..';
export declare class ConsolidatedDocument extends BaseSQLModel {
    generatedDate?: Date;
    uploadDate?: Date;
    status: number;
    remarks?: string;
    appUserId: number;
    accountId: number;
    bankAccountId?: number;
    appFileId?: number;
    rtaId?: number;
    [prop: string]: any;
    constructor(data?: Partial<ConsolidatedDocument>);
}
export interface ConsolidatedDocumentRelations {
}
export declare type ConsolidatedDocumentWithRelations = ConsolidatedDocument & ConsolidatedDocumentRelations;
