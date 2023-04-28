import { BaseESModel } from '../base-es-model.model';
export declare class AppFilesReporting extends BaseESModel {
    id?: number;
    appFileId?: number;
    uploadDate?: Date;
    path: string;
    containerName: string;
    checksum?: string;
    originalFileName: string;
    name: string;
    size: number;
    extension?: string;
    mimeType: string;
    accountId?: number;
    accountName?: string;
    accountUniqueId?: string;
    accountNumbers?: string;
    appUserName: string;
    appUserId?: number;
    appUserCode?: string;
    appUserEmail?: string;
    bankAccountId?: number;
    bankAccountName: string;
    bankAccountNumber?: string;
    bankName: string;
    orderId?: number;
    orderDate: Date;
    bankBranchIfscCode: string;
    serviceRequestDocumentType?: number;
    serviceRequestDocumentComment: string;
    bankAccountComment?: string;
    bankAccountCommentedByUserId?: number;
    bankAccountCommentedByUserName?: string;
    rtaName?: string;
    [prop: string]: any;
    constructor(data?: Partial<AppFilesReporting>);
}
export interface AppFilesReportingRelations {
}
export declare type AppFilesReportingWithRelations = AppFilesReporting & AppFilesReportingRelations;
