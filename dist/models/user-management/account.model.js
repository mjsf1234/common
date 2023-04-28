"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
const order_execution_1 = require("../order-execution");
const transaction_1 = require("../transaction");
const account_app_file_mapping_model_1 = require("./account-app-file-mapping.model");
const account_referral_model_1 = require("./account-referral.model");
const bank_account_model_1 = require("./bank-account.model");
const risk_profile_question_submitted_answer_model_1 = require("./risk-profile-question-submitted-answer.model");
let Account = class Account extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        isPseudonym: true,
        postgresql: { columnName: 'name', dataType: 'VARCHAR', dataLength: 255, nullable: 'N' },
        orcale: { columnName: 'name', dataType: 'VARCHAR', dataLength: 255, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Account.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'uniqueId', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Account.prototype, "uniqueId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        optionLabelIdentifier: 'ACCOUNTSTATUS',
        postgresql: { columnName: 'account_status', dataType: 'SMALLINT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Account.prototype, "accountStatus", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Account.prototype, "bosCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'nse_code', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Account.prototype, "nseCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'bse_code', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Account.prototype, "bseCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        postgresql: { columnName: 'skipped_nominee', dataType: 'BOOLEAN', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], Account.prototype, "skippedNominee", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'activation_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], Account.prototype, "activationDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: true,
        default: false,
        postgresql: { columnName: 'is_prospect', dataType: 'BOOLEAN', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], Account.prototype, "isProspect", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'object',
        default: {},
        postgresql: { columnName: 'config', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], Account.prototype, "config", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'remarks', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Account.prototype, "remarks", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: true,
        default: false,
        postgresql: { columnName: 'account_confirmation_pending', dataType: 'BOOLEAN', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], Account.prototype, "accountConfirmationPending", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 1,
        optionLabelIdentifier: 'REGISTRATIONSTEP',
        postgresql: { columnName: 'registration_step', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Account.prototype, "registrationStep", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: true,
        default: false,
        postgresql: { columnName: 'is_direct_transaction_allowed', dataType: 'BOOLEAN', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], Account.prototype, "isDirectTransactionAllowed", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'risk_profile_updation_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], Account.prototype, "riskProfileUpdateDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'blocked_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], Account.prototype, "blockedDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'unblocked_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], Account.prototype, "unblockedDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: true,
        default: false,
        postgresql: { columnName: 'is_poa_applicable', dataType: 'BOOLEAN', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], Account.prototype, "isPoaApplicable", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'primary_nominee_percentage', dataType: 'NUMERIC', dataPrecision: 25, dataScale: 10, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Account.prototype, "primaryNomineePercentage", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'secondary_nominee_percentage', dataType: 'NUMERIC', dataPrecision: 25, dataScale: 10, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Account.prototype, "secondaryNomineePercentage", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'tertiary_nominee_percentage', dataType: 'NUMERIC', dataPrecision: 25, dataScale: 10, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Account.prototype, "tertiaryNomineePercentage", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'account_opening_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], Account.prototype, "accountOpeningDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'risk_profile_updated_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], Account.prototype, "riskProfileUpdatedDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        postgresql: { columnName: 'is_nominee_details_updated', dataType: 'BOOLEAN', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], Account.prototype, "isNomineeDetailsUpdated", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.AppUser, {
        name: 'primaryHolder',
        keyFrom: 'primaryHolderId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_user_primary_holder', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Account.prototype, "primaryHolderId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.AppUser, {
        name: 'secondaryHolder',
        keyFrom: 'secondaryHolderId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_user_secondary_holder', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Account.prototype, "secondaryHolderId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.AppUser, {
        name: 'tertiaryHolder',
        keyFrom: 'tertiaryHolderId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_user_tertiary_holder', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Account.prototype, "tertiaryHolderId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.AppUser, {
        name: 'primaryNominee',
        keyFrom: 'primaryNomineeId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_user_primary_nominee', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Account.prototype, "primaryNomineeId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.AppUser, {
        name: 'secondaryNominee',
        keyFrom: 'secondaryNomineeId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_user_secondary_nominee', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Account.prototype, "secondaryNomineeId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.AppUser, {
        name: 'tertiaryNominee',
        keyFrom: 'tertiaryNomineeId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_user_tertiary_nominee', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Account.prototype, "tertiaryNomineeId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.AppUser, {
        name: 'guardian',
        keyFrom: 'guardianId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_user_guardian', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Account.prototype, "guardianId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.RiskProfile, {
        name: 'riskProfile',
        keyFrom: 'riskProfileId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_risk_profile', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Account.prototype, "riskProfileId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Relationship, {
        name: 'primaryNomineeRelationship',
        keyFrom: 'primaryNomineeRelationshipId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_relationship_primary_nominee', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Account.prototype, "primaryNomineeRelationshipId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Relationship, {
        name: 'secondaryNomineeRelationship',
        keyFrom: 'secondaryNomineeRelationshipId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_relationship_secondary_nominee', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Account.prototype, "secondaryNomineeRelationshipId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Relationship, {
        name: 'tertiaryNomineeRelationship',
        keyFrom: 'tertiaryNomineeRelationshipId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_relationship_tertiary_nominee', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Account.prototype, "tertiaryNomineeRelationshipId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Relationship, {
        name: 'guardianRelationship',
        keyFrom: 'guardianRelationshipId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_relationship_guardian', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Account.prototype, "guardianRelationshipId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Distributor, {
        name: 'distributor',
        keyFrom: 'distributorId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_distributor', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Account.prototype, "distributorId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.HoldingType, {
        name: 'holdingType',
        keyFrom: 'holdingTypeId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_holding_type', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Account.prototype, "holdingTypeId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.AccountCategory, {
        name: 'accountCategory',
        keyFrom: 'accountCategoryId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_account_category', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Account.prototype, "accountCategoryId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Relationship, {
        name: 'nomineeGuardianRelationship',
        keyFrom: 'nomineeGuardianRelationshipId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_relationship_nominee_guardian', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Account.prototype, "nomineeGuardianRelationshipId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.AppUser, {
        name: 'nomineeGuardian',
        keyFrom: 'nomineeGuardianId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_user_nominee_guardian', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Account.prototype, "nomineeGuardianId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasOne)(() => order_execution_1.Cart, { keyTo: 'accountId' }),
    (0, tslib_1.__metadata)("design:type", order_execution_1.Cart)
], Account.prototype, "cart", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => transaction_1.ServiceProviderAccount, { keyTo: 'accountId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], Account.prototype, "serviceProviderAccounts", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => order_execution_1.Goal, { keyTo: 'accountId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], Account.prototype, "goals", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => bank_account_model_1.BankAccount, { keyTo: 'accountId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], Account.prototype, "bankAccounts", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => risk_profile_question_submitted_answer_model_1.RiskProfileQuestionSubmittedAnswer, { keyTo: 'accountId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], Account.prototype, "riskProfileQuestionSubmittedAnswers", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => __1.InvestorNominee, { keyTo: 'accountId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], Account.prototype, "investorNominees", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => order_execution_1.Order, { keyTo: 'accountId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], Account.prototype, "orders", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => order_execution_1.DepositDetails, { keyTo: 'accountId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], Account.prototype, "depositDetails", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasOne)(() => account_referral_model_1.AccountReferral, { keyTo: 'accountId' }),
    (0, tslib_1.__metadata)("design:type", account_referral_model_1.AccountReferral)
], Account.prototype, "accountReferral", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => __1.CsrFatca, { keyTo: 'accountId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], Account.prototype, "csrFatca", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => account_app_file_mapping_model_1.AccountAppFileMapping, { keyTo: 'accountId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], Account.prototype, "accountAppFileMapping", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => __1.CommunicationMatrix, { keyTo: 'accountId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], Account.prototype, "communicationMatrix", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => order_execution_1.TransactionTwoFa, { keyTo: 'accountId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], Account.prototype, "transactionTwoFa", void 0);
Account = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'account' },
            plural: 'Accounts',
            foreignKeys: {
                fkidx_account_user_fk_id_user_primary_holder: {
                    name: 'fkidx_account_user_fk_id_user_primary_holder',
                    foreignKey: 'fk_id_user_primary_holder',
                    entityKey: 'id',
                    entity: 'AppUser'
                },
                fkidx_account_user_fk_id_user_secondary_holder: {
                    name: 'fkidx_account_user_fk_id_user_secondary_holder',
                    foreignKey: 'fk_id_user_secondary_holder',
                    entityKey: 'id',
                    entity: 'AppUser'
                },
                fkidx_account_user_fk_id_user_tertiary_holder: {
                    name: 'fkidx_account_user_fk_id_user_tertiary_holder',
                    foreignKey: 'fk_id_user_tertiary_holder',
                    entityKey: 'id',
                    entity: 'AppUser'
                },
                fkidx_account_user_fk_id_user_primary_nominee: {
                    name: 'fkidx_account_user_fk_id_user_primary_nominee',
                    foreignKey: 'fk_id_user_primary_nominee',
                    entityKey: 'id',
                    entity: 'AppUser'
                },
                fkidx_account_user_fk_id_user_secondary_nominee: {
                    name: 'fkidx_account_user_fk_id_user_secondary_nominee',
                    foreignKey: 'fk_id_user_secondary_nominee',
                    entityKey: 'id',
                    entity: 'AppUser'
                },
                fkidx_account_user_fk_id_user_tertiary_nominee: {
                    name: 'fkidx_account_user_fk_id_user_tertiary_nominee',
                    foreignKey: 'fk_id_user_tertiary_nominee',
                    entityKey: 'id',
                    entity: 'AppUser'
                },
                fkidx_account_user_fk_id_user_guardian: {
                    name: 'fkidx_account_user_fk_id_user_guardian',
                    foreignKey: 'fk_id_user_guardian',
                    entityKey: 'id',
                    entity: 'AppUser'
                },
                fkidx_account_relationship_fk_id_relationship_nominee_guardian: {
                    name: 'fkidx_account_relationship_fk_id_relationship_nominee_guardian',
                    foreignKey: 'fk_id_relationship_nominee_guardian',
                    entityKey: 'id',
                    entity: 'Relationship'
                }
                /* Commenting out as these are not needed
                fkidx_account_user_fk_id_first_nominee_guardian: {
                  name: 'fkidx_account_user_fk_id_first_nominee_guardian',
                  foreignKey: 'fk_id_first_nominee_guardian',
                  entityKey: 'id',
                  entity: 'AppUser'
                },
                fkidx_account_user_fk_id_second_nominee_guardian: {
                  name: 'fkidx_account_user_fk_id_second_nominee_guardian',
                  foreignKey: 'fk_id_second_nominee_guardian',
                  entityKey: 'id',
                  entity: 'AppUser'
                },
                fkidx_account_user_fk_id_third_nominee_guardian: {
                  name: 'fkidx_account_user_fk_id_third_nominee_guardian',
                  foreignKey: 'fk_id_third_nominee_guardian',
                  entityKey: 'id',
                  entity: 'AppUser'
                }
                */
            },
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Account);
exports.Account = Account;
//# sourceMappingURL=account.model.js.map