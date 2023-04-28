"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvestorDetailsRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let InvestorDetailsRepository = class InvestorDetailsRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, appUserRepositoryGetter, investorCategoryRepositoryGetter, wealthSourceRepositoryGetter, occupationRepositoryGetter, incomeSlabRepositoryGetter, identificationTypeRepositoryGetter, investorTypeRepositoryGetter, permanentAddressRepositoryGetter, correspondenceAddressRepositoryGetter, signatureImageFileRepositoryGetter, countryOfBirthRepositoryGetter, taxResidentCountryRepositoryGetter, politicallyExposureTypeRepositoryGetter, overseesAddressRepositoryGetter, stateOfBirthRepositoryGetter, correspondenceAddressProofFileRepositoryGetter, permanentAddressProofFileRepositoryGetter, identityProofFileRepositoryGetter, panImageFileRepositoryGetter, kycImageFileRepositoryGetter, relationshipDocumentImageFileRepositoryGetter) {
        super(models_1.InvestorDetails, dataSource);
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
};
InvestorDetailsRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('AppUserRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('InvestorCategoryRepository')),
    (0, tslib_1.__param)(3, repository_1.repository.getter('WealthSourceRepository')),
    (0, tslib_1.__param)(4, repository_1.repository.getter('OccupationRepository')),
    (0, tslib_1.__param)(5, repository_1.repository.getter('IncomeSlabRepository')),
    (0, tslib_1.__param)(6, repository_1.repository.getter('IdentificationTypeRepository')),
    (0, tslib_1.__param)(7, repository_1.repository.getter('InvestorTypeRepository')),
    (0, tslib_1.__param)(8, repository_1.repository.getter('AddressRepository')),
    (0, tslib_1.__param)(9, repository_1.repository.getter('AddressRepository')),
    (0, tslib_1.__param)(10, repository_1.repository.getter('UserManagementAppFileRepository')),
    (0, tslib_1.__param)(11, repository_1.repository.getter('CountryRepository')),
    (0, tslib_1.__param)(12, repository_1.repository.getter('CountryRepository')),
    (0, tslib_1.__param)(13, repository_1.repository.getter('PoliticallyExposureTypeRepository')),
    (0, tslib_1.__param)(14, repository_1.repository.getter('OverseesAddressRepository')),
    (0, tslib_1.__param)(15, repository_1.repository.getter('StateRepository')),
    (0, tslib_1.__param)(16, repository_1.repository.getter('UserManagementAppFileRepository')),
    (0, tslib_1.__param)(17, repository_1.repository.getter('UserManagementAppFileRepository')),
    (0, tslib_1.__param)(18, repository_1.repository.getter('UserManagementAppFileRepository')),
    (0, tslib_1.__param)(19, repository_1.repository.getter('UserManagementAppFileRepository')),
    (0, tslib_1.__param)(20, repository_1.repository.getter('UserManagementAppFileRepository')),
    (0, tslib_1.__param)(21, repository_1.repository.getter('UserManagementAppFileRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function])
], InvestorDetailsRepository);
exports.InvestorDetailsRepository = InvestorDetailsRepository;
//# sourceMappingURL=investor-details.repository.js.map