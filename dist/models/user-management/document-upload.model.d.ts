import { BaseSQLModel } from '..';
export declare class DocumentUpload extends BaseSQLModel {
    referenceNumber?: string;
    issueDate?: Date;
    expiryDate?: Date;
    documentType: number;
    fk_id_user?: number;
    fk_id_account?: number;
    fk_id_bank_account?: number;
    fk_id_file?: number;
    [prop: string]: any;
    constructor(data?: Partial<DocumentUpload>);
}
export interface DocumentUploadRelations {
}
export declare type DocumentUploadWithRelations = DocumentUpload & DocumentUploadRelations;
