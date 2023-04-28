"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvestorDetails = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let InvestorDetails = class InvestorDetails extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'birth_date', dataType: 'DATE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], InvestorDetails.prototype, "birthDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'next_birth_day', dataType: 'DATE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], InvestorDetails.prototype, "nextBirthDay", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'GENDER',
        postgresql: { columnName: 'gender', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InvestorDetails.prototype, "gender", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        postgresql: { columnName: 'pan_card_number', dataType: 'VARCHAR', dataLength: 10, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InvestorDetails.prototype, "panCardNumber", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        postgresql: { columnName: 'identification_number', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InvestorDetails.prototype, "identificationNumber", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        postgresql: { columnName: 'identification_number_2', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InvestorDetails.prototype, "identificationNumber2", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        postgresql: { columnName: 'identification_number_3', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InvestorDetails.prototype, "identificationNumber3", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        postgresql: { columnName: 'identification_number_4', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InvestorDetails.prototype, "identificationNumber4", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'KYCSTATUS',
        postgresql: { columnName: 'kyc_status', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InvestorDetails.prototype, "kycStatus", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'FATCAREGISTRATIONSTATUS',
        postgresql: { columnName: 'fatca_registration_status', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InvestorDetails.prototype, "fatcaRegistrationStatus", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'object',
        default: {},
        postgresql: { columnName: 'config', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], InvestorDetails.prototype, "config", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 1,
        optionLabelIdentifier: 'REGISTRATIONSTEP',
        postgresql: { columnName: 'registration_step', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InvestorDetails.prototype, "registrationStep", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'remarks', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InvestorDetails.prototype, "remarks", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'agreement_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], InvestorDetails.prototype, "agreementDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        postgresql: { columnName: 'tan_card_number', dataType: 'VARCHAR', dataLength: 10, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InvestorDetails.prototype, "tanCardNumber", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: true,
        default: true,
        postgresql: { columnName: 'is_transaction_allowed', dataType: 'BOOLEAN', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], InvestorDetails.prototype, "isTransactionAllowed", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: true,
        default: true,
        postgresql: { columnName: 'is_aml_certified', dataType: 'BOOLEAN', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], InvestorDetails.prototype, "isAmlCertified", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        default: false,
        postgresql: { columnName: 'is_minor', dataType: 'BOOLEAN', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], InvestorDetails.prototype, "isMinor", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'birth_city', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InvestorDetails.prototype, "birthCity", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'father_name', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InvestorDetails.prototype, "fatherName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'mother_name', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InvestorDetails.prototype, "motherName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'spouse_name', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], InvestorDetails.prototype, "spouseName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'MARITALSTATUS',
        postgresql: { columnName: 'marital_status', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InvestorDetails.prototype, "maritalStatus", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'employer_name', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InvestorDetails.prototype, "employerName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'employerr_category', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InvestorDetails.prototype, "employerCategory", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        default: false,
        postgresql: { columnName: 'is_kyc_done', dataType: 'BOOLEAN', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], InvestorDetails.prototype, "isKYCDone", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.AppUser, {
        name: 'appUser',
        keyFrom: 'appUserId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_user', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InvestorDetails.prototype, "appUserId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.InvestorCategory, {
        name: 'investorCategory',
        keyFrom: 'investorCategoryId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_investor_category', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InvestorDetails.prototype, "investorCategoryId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.WealthSource, {
        name: 'wealthSource',
        keyFrom: 'wealthSourceId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_wealth_source', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InvestorDetails.prototype, "wealthSourceId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Occupation, {
        name: 'occupation',
        keyFrom: 'occupationId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_occupation', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InvestorDetails.prototype, "occupationId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.IncomeSlab, {
        name: 'incomeSlab',
        keyFrom: 'incomeSlabId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_income_slab', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InvestorDetails.prototype, "incomeSlabId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.IdentificationType, {
        name: 'identificationType',
        keyFrom: 'identificationTypeId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_identification_type', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InvestorDetails.prototype, "identificationTypeId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.IdentificationType, {
        name: 'identificationType2',
        keyFrom: 'identificationTypeId2',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_identification_type_2', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InvestorDetails.prototype, "identificationTypeId2", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.IdentificationType, {
        name: 'identificationType3',
        keyFrom: 'identificationTypeId3',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_identification_type_3', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InvestorDetails.prototype, "identificationTypeId3", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.IdentificationType, {
        name: 'identificationType4',
        keyFrom: 'identificationTypeId4',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_identification_type_4', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InvestorDetails.prototype, "identificationTypeId4", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.InvestorType, {
        name: 'investorType',
        keyFrom: 'investorTypeId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_investor_type', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InvestorDetails.prototype, "investorTypeId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Address, {
        name: 'permanentAddress',
        keyFrom: 'permanentAddressId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_permanent_address', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InvestorDetails.prototype, "permanentAddressId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Address, {
        name: 'correspondenceAddress',
        keyFrom: 'correspondenceAddressId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_correspondence_address', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InvestorDetails.prototype, "correspondenceAddressId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.UserManagementAppFile, {
        name: 'panImageFile',
        keyFrom: 'panImageFileId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_pan_image_file', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InvestorDetails.prototype, "panImageFileId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.UserManagementAppFile, {
        name: 'kycImageFile',
        keyFrom: 'kycImageFileId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_kyc_image_file', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InvestorDetails.prototype, "kycImageFileId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.UserManagementAppFile, {
        name: 'relationshipDocumentImageFile',
        keyFrom: 'relationshipDocumentImageFileId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_rel_document_file', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InvestorDetails.prototype, "relationshipDocumentImageFileId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.UserManagementAppFile, {
        name: 'signatureImageFile',
        keyFrom: 'signatureImageFileId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_signature_image_file', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InvestorDetails.prototype, "signatureImageFileId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Country, {
        name: 'countryOfBirth',
        keyFrom: 'countryOfBirthId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_country_of_birth', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InvestorDetails.prototype, "countryOfBirthId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.State, {
        name: 'stateOfBirth',
        keyFrom: 'stateOfBirthId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_state_of_birth', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InvestorDetails.prototype, "stateOfBirthId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Country, {
        name: 'taxResidentCountry',
        keyFrom: 'taxResidentCountryId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_tax_resident_country', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InvestorDetails.prototype, "taxResidentCountryId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Country, {
        name: 'taxResidentCountry2',
        keyFrom: 'taxResidentCountryId2',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_tax_resident_country_2', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InvestorDetails.prototype, "taxResidentCountryId2", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Country, {
        name: 'taxResidentCountry3',
        keyFrom: 'taxResidentCountryId3',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_tax_resident_country_3', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InvestorDetails.prototype, "taxResidentCountryId3", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Country, {
        name: 'taxResidentCountry4',
        keyFrom: 'taxResidentCountryId4',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_tax_resident_country_4', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InvestorDetails.prototype, "taxResidentCountryId4", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.PoliticallyExposureType, {
        name: 'politicallyExposureType',
        keyFrom: 'politicallyExposureTypeId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_politically_exposure_type', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InvestorDetails.prototype, "politicallyExposureTypeId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.OverseesAddress, {
        name: 'overseesAddress',
        keyFrom: 'overseesAddressId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_oversees_address', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InvestorDetails.prototype, "overseesAddressId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.UserManagementAppFile, {
        name: 'correspondenceAddressProofFile',
        keyFrom: 'correspondenceAddressProofFileId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_correspondence_address_proof_file', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InvestorDetails.prototype, "correspondenceAddressProofFileId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.UserManagementAppFile, {
        name: 'permanentAddressProofFile',
        keyFrom: 'permanentAddressProofFileId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_permanent_address_proof_file', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InvestorDetails.prototype, "permanentAddressProofFileId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.UserManagementAppFile, {
        name: 'identityProofFile',
        keyFrom: 'identityProofFileId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_identity_proof_file', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InvestorDetails.prototype, "identityProofFileId", void 0);
InvestorDetails = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            indexes: {
                idx_is_active: { keys: { is_active: 1 }, options: { unique: false } },
                idx_created_date: { keys: { created_date: 1 }, options: { unique: false } },
                idx_last_modified_date: { keys: { last_modified_date: 1 }, options: { unique: false } },
                idx_pan_card_number: { keys: { pan_card_number: 1 }, options: { unique: false } }
            },
            postgresql: { tableName: 'investor_details' },
            plural: 'InvestorDetails',
            foreignKeys: {
                fkidx_investor_details_user_fk_id_user: {
                    name: 'fkidx_investor_details_user_fk_id_user',
                    foreignKey: 'fk_id_user',
                    entityKey: 'id',
                    entity: 'AppUser'
                },
                fkidx_investor_details_permanent_address_fk_id_permanent_ddress: {
                    name: 'fkidx_investor_details_permanent_address_fk_id_permanent_ddress',
                    foreignKey: 'fk_id_permanent_address',
                    entityKey: 'id',
                    entity: 'Address'
                },
                fkidx_investor_details_corres_address_fk_id_corres_address: {
                    name: 'fkidx_investor_details_corres_address_fk_id_corres_address',
                    foreignKey: 'fk_id_correspondence_address',
                    entityKey: 'id',
                    entity: 'Address'
                },
                fkidx_investor_details_oversees_add_fk_id_oversees_add: {
                    name: 'fkidx_investor_details_oversees_add_fk_id_oversees_add',
                    foreignKey: 'fk_id_oversees_address',
                    entityKey: 'id',
                    entity: 'OverseesAddress'
                },
                fkidx_investor_details_sig_img_file_fk_id_sig_img_file: {
                    name: 'fkidx_investor_details_sig_img_file_fk_id_sig_img_file',
                    foreignKey: 'fk_id_signature_image_file',
                    entityKey: 'id',
                    entity: 'AppFile'
                }
            },
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], InvestorDetails);
exports.InvestorDetails = InvestorDetails;
//# sourceMappingURL=investor-details.model.js.map