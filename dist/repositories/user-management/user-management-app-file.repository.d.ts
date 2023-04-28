import { BaseLocalRepository, ServiceRequestDocumentRepository, BankAccountRepository, InstrumentsExportFileRepository } from '..';
import { Getter, HasOneRepositoryFactory, juggler } from '@loopback/repository';
import { UserManagementAppFile, UserManagementAppFileRelations, InvestorDetails, ServiceRequestDocument, BankAccount, CsrFatca, AccountAppFileMapping, InstrumentsExportFile } from '../../models';
import { InvestorDetailsRepository } from './investor-details.repository';
import { CsrFatcaRepository } from './csr-fatca.repository';
import { AccountAppFileMappingRepository } from './account-app-file-mapping.repository';
export declare class UserManagementAppFileRepository extends BaseLocalRepository<UserManagementAppFile, typeof UserManagementAppFile.prototype.id, UserManagementAppFileRelations> {
    readonly investorDetailsForSignature: HasOneRepositoryFactory<InvestorDetails, typeof InvestorDetails.prototype.id>;
    readonly serviceRequestDocument: HasOneRepositoryFactory<ServiceRequestDocument, typeof ServiceRequestDocument.prototype.id>;
    readonly bankAccount: HasOneRepositoryFactory<BankAccount, typeof BankAccount.prototype.id>;
    readonly csrFatca: HasOneRepositoryFactory<CsrFatca, typeof CsrFatca.prototype.id>;
    readonly accountAppFileMapping: HasOneRepositoryFactory<AccountAppFileMapping, typeof AccountAppFileMapping.prototype.id>;
    readonly instrumentsExportFile: HasOneRepositoryFactory<InstrumentsExportFile, typeof InstrumentsExportFile.prototype.id>;
    constructor(dataSource: juggler.DataSource, investorDetailsRepository: Getter<InvestorDetailsRepository>, serviceRequestDocumentRepositoryGetter: Getter<ServiceRequestDocumentRepository>, bankAccountRepositoryGetter: Getter<BankAccountRepository>, csrFatcaRepositoryGetter: Getter<CsrFatcaRepository>, accountAppFileMappingRepository: Getter<AccountAppFileMappingRepository>, instrumentsExportFileRepository: Getter<InstrumentsExportFileRepository>);
}
