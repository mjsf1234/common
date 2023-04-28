import { BaseSQLModel } from '..';
export declare class ServiceRequestDocument extends BaseSQLModel {
    comment: string;
    type?: number;
    accountId: number;
    userManagementAppFileId?: number;
    [prop: string]: any;
    constructor(data?: Partial<ServiceRequestDocument>);
}
export interface ServiceRequestDocumentRelations {
}
export declare type ServiceRequestDocumentWithRelations = ServiceRequestDocument & ServiceRequestDocumentRelations;
