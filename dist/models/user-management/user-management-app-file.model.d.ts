import { InvestorDetails } from '..';
import { BaseAppFileModel } from '..';
import { ServiceRequestDocument } from './service-request-document.model';
import { AccountAppFileMapping, BankAccount, CsrFatca, InstrumentsExportFile } from '.';
export declare class UserManagementAppFile extends BaseAppFileModel {
    investorDetailsForSignature?: InvestorDetails;
    serviceRequestDocument?: ServiceRequestDocument;
    bankAccount?: BankAccount;
    csrFatca?: CsrFatca;
    accountAppFileMapping?: AccountAppFileMapping;
    instrumentsExportFile?: InstrumentsExportFile;
    [prop: string]: any;
    constructor(data?: Partial<UserManagementAppFile>);
}
export interface UserManagementAppFileRelations {
}
export declare type UserManagementAppFileWithRelations = UserManagementAppFile & UserManagementAppFileRelations;
