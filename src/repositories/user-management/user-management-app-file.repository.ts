import {BaseLocalRepository, ServiceRequestDocumentRepository, BankAccountRepository, InstrumentsExportFileRepository} from '..';
import {Getter, HasOneRepositoryFactory, juggler, repository} from '@loopback/repository';
import {
  UserManagementAppFile,
  UserManagementAppFileRelations,
  InvestorDetails,
  ServiceRequestDocument,
  BankAccount,
  CsrFatca,
  AccountAppFileMapping,
  InstrumentsExportFile
} from '../../models';
import {InvestorDetailsRepository} from './investor-details.repository';
import {CsrFatcaRepository} from './csr-fatca.repository';
import {AccountAppFileMappingRepository} from './account-app-file-mapping.repository';

export class UserManagementAppFileRepository extends BaseLocalRepository<
  UserManagementAppFile,
  typeof UserManagementAppFile.prototype.id,
  UserManagementAppFileRelations
> {
  public readonly investorDetailsForSignature: HasOneRepositoryFactory<InvestorDetails, typeof InvestorDetails.prototype.id>;
  public readonly serviceRequestDocument: HasOneRepositoryFactory<ServiceRequestDocument, typeof ServiceRequestDocument.prototype.id>;
  public readonly bankAccount: HasOneRepositoryFactory<BankAccount, typeof BankAccount.prototype.id>;
  public readonly csrFatca: HasOneRepositoryFactory<CsrFatca, typeof CsrFatca.prototype.id>;
  public readonly accountAppFileMapping: HasOneRepositoryFactory<AccountAppFileMapping, typeof AccountAppFileMapping.prototype.id>;
  public readonly instrumentsExportFile: HasOneRepositoryFactory<InstrumentsExportFile, typeof InstrumentsExportFile.prototype.id>;


  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('InvestorDetailsRepository') investorDetailsRepository: Getter<InvestorDetailsRepository>,
    @repository.getter('ServiceRequestDocumentRepository') serviceRequestDocumentRepositoryGetter: Getter<ServiceRequestDocumentRepository>,
    @repository.getter('BankAccountRepository') bankAccountRepositoryGetter: Getter<BankAccountRepository>,
    @repository.getter('CsrFatcaRepository') csrFatcaRepositoryGetter: Getter<CsrFatcaRepository>,
    @repository.getter('AccountAppFileMappingRepository') accountAppFileMappingRepository: Getter<AccountAppFileMappingRepository>,
    @repository.getter('InstrumentsExportFileRepository') instrumentsExportFileRepository: Getter<InstrumentsExportFileRepository>,
  ) {
    super(UserManagementAppFile, dataSource);

    this.investorDetailsForSignature = this.createHasOneRepositoryFactoryFor('investorDetailsForSignature', investorDetailsRepository);
    this.serviceRequestDocument = this.createHasOneRepositoryFactoryFor('serviceRequestDocument', serviceRequestDocumentRepositoryGetter);
    this.bankAccount = this.createHasOneRepositoryFactoryFor('bankAccount', bankAccountRepositoryGetter);
    this.csrFatca = this.createHasOneRepositoryFactoryFor('csrFatca', csrFatcaRepositoryGetter);
    this.accountAppFileMapping = this.createHasOneRepositoryFactoryFor('accountAppFileMapping', accountAppFileMappingRepository);
    this.instrumentsExportFile = this.createHasOneRepositoryFactoryFor('instrumentsExportFile', instrumentsExportFileRepository);


    this.registerInclusionResolver('investorDetailsForSignature', this.investorDetailsForSignature.inclusionResolver);
    this.registerInclusionResolver('serviceRequestDocument', this.serviceRequestDocument.inclusionResolver);
    this.registerInclusionResolver('bankAccount', this.bankAccount.inclusionResolver);
    this.registerInclusionResolver('csrFatca', this.csrFatca.inclusionResolver);
    this.registerInclusionResolver('accountAppFileMapping', this.accountAppFileMapping.inclusionResolver);
    this.registerInclusionResolver('instrumentsExportFile', this.instrumentsExportFile.inclusionResolver);

  }
}
