import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {
  Address,
  UserManagementAppFile,
  AppUser,
  Country,
  IdentificationType,
  IncomeSlab,
  InvestorCategory,
  InvestorDetails,
  InvestorDetailsRelations,
  InvestorType,
  Occupation,
  OverseesAddress,
  PoliticallyExposureType,
  WealthSource,
  State
} from '../../models';
import {AppUserRepository} from './app-user.repository';
import {
  CountryRepository,
  IdentificationTypeRepository,
  IncomeSlabRepository,
  InvestorCategoryRepository,
  InvestorTypeRepository,
  OccupationRepository,
  PoliticallyExposureTypeRepository,
  WealthSourceRepository,
  StateRepository
} from '../master-data';
import {AddressRepository} from './address.repository';
import {UserManagementAppFileRepository} from './user-management-app-file.repository';
import {OverseesAddressRepository} from './oversees-address.repository';

export class InvestorDetailsRepository extends BaseLocalRepository<
  InvestorDetails,
  typeof InvestorDetails.prototype.id,
  InvestorDetailsRelations
> {
  public readonly appUser: BelongsToAccessor<AppUser, typeof InvestorDetails.prototype.id>;
  public readonly investorCategory: BelongsToAccessor<InvestorCategory, typeof InvestorDetails.prototype.id>;
  public readonly wealthSource: BelongsToAccessor<WealthSource, typeof InvestorDetails.prototype.id>;
  public readonly occupation: BelongsToAccessor<Occupation, typeof InvestorDetails.prototype.id>;
  public readonly incomeSlab: BelongsToAccessor<IncomeSlab, typeof InvestorDetails.prototype.id>;
  public readonly identificationType: BelongsToAccessor<IdentificationType, typeof InvestorDetails.prototype.id>;
  public readonly identificationType2: BelongsToAccessor<IdentificationType, typeof InvestorDetails.prototype.id>;
  public readonly identificationType3: BelongsToAccessor<IdentificationType, typeof InvestorDetails.prototype.id>;
  public readonly identificationType4: BelongsToAccessor<IdentificationType, typeof InvestorDetails.prototype.id>;
  public readonly investorType: BelongsToAccessor<InvestorType, typeof InvestorDetails.prototype.id>;
  public readonly permanentAddress: BelongsToAccessor<Address, typeof InvestorDetails.prototype.id>;
  public readonly correspondenceAddress: BelongsToAccessor<Address, typeof InvestorDetails.prototype.id>;
  public readonly signatureImageFile: BelongsToAccessor<UserManagementAppFile, typeof InvestorDetails.prototype.id>;
  public readonly countryOfBirth: BelongsToAccessor<Country, typeof InvestorDetails.prototype.id>;
  public readonly taxResidentCountry: BelongsToAccessor<Country, typeof InvestorDetails.prototype.id>;
  public readonly taxResidentCountry2: BelongsToAccessor<Country, typeof InvestorDetails.prototype.id>;
  public readonly taxResidentCountry3: BelongsToAccessor<Country, typeof InvestorDetails.prototype.id>;
  public readonly taxResidentCountry4: BelongsToAccessor<Country, typeof InvestorDetails.prototype.id>;
  public readonly politicallyExposureType: BelongsToAccessor<PoliticallyExposureType, typeof InvestorDetails.prototype.id>;
  public readonly overseesAddress: BelongsToAccessor<OverseesAddress, typeof InvestorDetails.prototype.id>;
  public readonly stateOfBirth: BelongsToAccessor<State, typeof InvestorDetails.prototype.id>;
  public readonly correspondenceAddressProofFile: BelongsToAccessor<UserManagementAppFile, typeof InvestorDetails.prototype.id>;
  public readonly permanentAddressProofFile: BelongsToAccessor<UserManagementAppFile, typeof InvestorDetails.prototype.id>;
  public readonly identityProofFile : BelongsToAccessor<UserManagementAppFile, typeof InvestorDetails.prototype.id>;
  public readonly panImageFile: BelongsToAccessor<UserManagementAppFile, typeof InvestorDetails.prototype.id>;
  public readonly kycImageFile: BelongsToAccessor<UserManagementAppFile, typeof InvestorDetails.prototype.id>;
  public readonly relationshipDocumentImageFile: BelongsToAccessor<UserManagementAppFile, typeof InvestorDetails.prototype.id>;
  

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('AppUserRepository') appUserRepositoryGetter: Getter<AppUserRepository>,
    @repository.getter('InvestorCategoryRepository') investorCategoryRepositoryGetter: Getter<InvestorCategoryRepository>,
    @repository.getter('WealthSourceRepository') wealthSourceRepositoryGetter: Getter<WealthSourceRepository>,
    @repository.getter('OccupationRepository') occupationRepositoryGetter: Getter<OccupationRepository>,
    @repository.getter('IncomeSlabRepository') incomeSlabRepositoryGetter: Getter<IncomeSlabRepository>,
    @repository.getter('IdentificationTypeRepository') identificationTypeRepositoryGetter: Getter<IdentificationTypeRepository>,
    @repository.getter('InvestorTypeRepository') investorTypeRepositoryGetter: Getter<InvestorTypeRepository>,
    @repository.getter('AddressRepository') permanentAddressRepositoryGetter: Getter<AddressRepository>,
    @repository.getter('AddressRepository') correspondenceAddressRepositoryGetter: Getter<AddressRepository>,
    @repository.getter('UserManagementAppFileRepository') signatureImageFileRepositoryGetter: Getter<UserManagementAppFileRepository>,
    @repository.getter('CountryRepository') countryOfBirthRepositoryGetter: Getter<CountryRepository>,
    @repository.getter('CountryRepository') taxResidentCountryRepositoryGetter: Getter<CountryRepository>,
    @repository.getter('PoliticallyExposureTypeRepository')
    politicallyExposureTypeRepositoryGetter: Getter<PoliticallyExposureTypeRepository>,
    @repository.getter('OverseesAddressRepository') overseesAddressRepositoryGetter: Getter<OverseesAddressRepository>,
    @repository.getter('StateRepository') stateOfBirthRepositoryGetter: Getter<StateRepository>,
    @repository.getter('UserManagementAppFileRepository') correspondenceAddressProofFileRepositoryGetter: Getter<UserManagementAppFileRepository>,
    @repository.getter('UserManagementAppFileRepository') permanentAddressProofFileRepositoryGetter: Getter<UserManagementAppFileRepository>,
    @repository.getter('UserManagementAppFileRepository') identityProofFileRepositoryGetter: Getter<UserManagementAppFileRepository>,
    @repository.getter('UserManagementAppFileRepository') panImageFileRepositoryGetter: Getter<UserManagementAppFileRepository>,
    @repository.getter('UserManagementAppFileRepository') kycImageFileRepositoryGetter: Getter<UserManagementAppFileRepository>,
    @repository.getter('UserManagementAppFileRepository') relationshipDocumentImageFileRepositoryGetter: Getter<UserManagementAppFileRepository>

  ) {
    super(InvestorDetails, dataSource);
    this.appUser = this.createBelongsToAccessorFor('appUser', appUserRepositoryGetter);
    this.investorCategory = this.createBelongsToAccessorFor('investorCategory', investorCategoryRepositoryGetter);
    this.wealthSource = this.createBelongsToAccessorFor('wealthSource', wealthSourceRepositoryGetter);
    this.occupation = this.createBelongsToAccessorFor('occupation', occupationRepositoryGetter);
    this.incomeSlab = this.createBelongsToAccessorFor('incomeSlab', incomeSlabRepositoryGetter);
    this.identificationType = this.createBelongsToAccessorFor('identificationType', identificationTypeRepositoryGetter);
    this.identificationType2 = this.createBelongsToAccessorFor('identificationType2', identificationTypeRepositoryGetter);
    this.identificationType3 = this.createBelongsToAccessorFor('identificationType3', identificationTypeRepositoryGetter);
    this.identificationType4 = this.createBelongsToAccessorFor('identificationType4', identificationTypeRepositoryGetter);
    this.investorType = this.createBelongsToAccessorFor('investorType', investorTypeRepositoryGetter);
    this.permanentAddress = this.createBelongsToAccessorFor('permanentAddress', permanentAddressRepositoryGetter);
    this.correspondenceAddress = this.createBelongsToAccessorFor('correspondenceAddress', correspondenceAddressRepositoryGetter);
    this.signatureImageFile = this.createBelongsToAccessorFor('signatureImageFile', signatureImageFileRepositoryGetter);
    this.countryOfBirth = this.createBelongsToAccessorFor('countryOfBirth', countryOfBirthRepositoryGetter);
    this.taxResidentCountry = this.createBelongsToAccessorFor('taxResidentCountry', taxResidentCountryRepositoryGetter);
    this.taxResidentCountry2 = this.createBelongsToAccessorFor('taxResidentCountry2', taxResidentCountryRepositoryGetter);
    this.taxResidentCountry3 = this.createBelongsToAccessorFor('taxResidentCountry3', taxResidentCountryRepositoryGetter);
    this.taxResidentCountry4 = this.createBelongsToAccessorFor('taxResidentCountry4', taxResidentCountryRepositoryGetter);
    this.politicallyExposureType = this.createBelongsToAccessorFor('politicallyExposureType', politicallyExposureTypeRepositoryGetter);
    this.overseesAddress = this.createBelongsToAccessorFor('overseesAddress', overseesAddressRepositoryGetter);
    this.stateOfBirth = this.createBelongsToAccessorFor('stateOfBirth', stateOfBirthRepositoryGetter);
    this.correspondenceAddressProofFile = this.createBelongsToAccessorFor('correspondenceAddressProofFile', correspondenceAddressProofFileRepositoryGetter);
    this.permanentAddressProofFile = this.createBelongsToAccessorFor('permanentAddressProofFile', permanentAddressProofFileRepositoryGetter);
    this.identityProofFile = this.createBelongsToAccessorFor('identityProofFile', identityProofFileRepositoryGetter);
    this.panImageFile = this.createBelongsToAccessorFor('signatureImageFile', panImageFileRepositoryGetter);
    this.kycImageFile = this.createBelongsToAccessorFor('signatureImageFile', kycImageFileRepositoryGetter);
    this.relationshipDocumentImageFile = this.createBelongsToAccessorFor('signatureImageFile', relationshipDocumentImageFileRepositoryGetter);


    this.registerInclusionResolver('appUser', this.appUser.inclusionResolver);
    this.registerInclusionResolver('investorCategory', this.investorCategory.inclusionResolver);
    this.registerInclusionResolver('wealthSource', this.wealthSource.inclusionResolver);
    this.registerInclusionResolver('occupation', this.occupation.inclusionResolver);
    this.registerInclusionResolver('incomeSlab', this.incomeSlab.inclusionResolver);
    this.registerInclusionResolver('identificationType', this.identificationType.inclusionResolver);
    this.registerInclusionResolver('identificationType2', this.identificationType2.inclusionResolver);
    this.registerInclusionResolver('identificationType3', this.identificationType3.inclusionResolver);
    this.registerInclusionResolver('identificationType4', this.identificationType4.inclusionResolver);
    this.registerInclusionResolver('investorType', this.investorType.inclusionResolver);
    this.registerInclusionResolver('permanentAddress', this.permanentAddress.inclusionResolver);
    this.registerInclusionResolver('correspondenceAddress', this.correspondenceAddress.inclusionResolver);
    this.registerInclusionResolver('signatureImageFile', this.signatureImageFile.inclusionResolver);
    this.registerInclusionResolver('countryOfBirth', this.countryOfBirth.inclusionResolver);
    this.registerInclusionResolver('taxResidentCountry', this.taxResidentCountry.inclusionResolver);
    this.registerInclusionResolver('taxResidentCountry2', this.taxResidentCountry2.inclusionResolver);
    this.registerInclusionResolver('taxResidentCountry3', this.taxResidentCountry3.inclusionResolver);
    this.registerInclusionResolver('taxResidentCountry4', this.taxResidentCountry4.inclusionResolver);
    this.registerInclusionResolver('politicallyExposureType', this.politicallyExposureType.inclusionResolver);
    this.registerInclusionResolver('overseesAddress', this.overseesAddress.inclusionResolver);
    this.registerInclusionResolver('stateOfBirth', this.stateOfBirth.inclusionResolver);
    this.registerInclusionResolver('correspondenceAddressProofFile', this.correspondenceAddressProofFile.inclusionResolver);
    this.registerInclusionResolver('permanentAddressProofFile', this.permanentAddressProofFile.inclusionResolver);
    this.registerInclusionResolver('identityProofFile', this.identityProofFile.inclusionResolver);
    this.registerInclusionResolver('panImageFile', this.panImageFile.inclusionResolver);
    this.registerInclusionResolver('kycImageFile', this.kycImageFile.inclusionResolver);
    this.registerInclusionResolver('relationshipDocumentImageFile', this.relationshipDocumentImageFile.inclusionResolver);
  }
}
