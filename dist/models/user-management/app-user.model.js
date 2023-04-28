"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppUser = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const _1 = require(".");
const __1 = require("..");
const cas_request_model_1 = require("../transaction/cas-request.model");
const account_model_1 = require("./account.model");
const alert_model_1 = require("./alert.model");
const app_access_token_model_1 = require("./app-access-token.model");
const app_role_model_1 = require("./app-role.model");
const app_user_role_mapping_model_1 = require("./app-user-role-mapping.model");
const feedback_model_1 = require("./feedback.model");
const idcom_details_model_1 = require("./idcom-details.model");
const investor_details_model_1 = require("./investor-details.model");
const mpin_history_model_1 = require("./mpin-history.model");
const user_notification_token_model_1 = require("./user-notification-token.model");
let AppUser = class AppUser extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        isPseudonym: true,
        postgresql: { columnName: 'name', dataType: 'VARCHAR', dataLength: 255, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AppUser.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        postgresql: { columnName: 'email', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AppUser.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'EMAILCONTACTBELONGSTO',
        postgresql: { columnName: 'email_belongs_to', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], AppUser.prototype, "emailBelongsTo", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        postgresql: { columnName: 'updated_email', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AppUser.prototype, "updatedEmail", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        postgresql: { columnName: 'updated_contact_number', dataType: 'VARCHAR', dataLength: 14, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AppUser.prototype, "updatedContactNumber", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: true,
        default: false,
        postgresql: { columnName: 'updated_details_flag', dataType: 'BOOLEAN', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AppUser.prototype, "updatedDetailsFlag", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'GENDER',
        postgresql: { columnName: 'gender', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AppUser.prototype, "gender", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'SALUTATION',
        postgresql: { columnName: 'salutation', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AppUser.prototype, "salutation", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'user_code', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AppUser.prototype, "userCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'password', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AppUser.prototype, "password", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'password_expiry', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AppUser.prototype, "passwordExpiry", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'otp_retry_count', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AppUser.prototype, "otpRetryCount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'otp_verification_count', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AppUser.prototype, "otpVerificationCount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'otp_expiry', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AppUser.prototype, "otpExpiry", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'otp_generation', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AppUser.prototype, "otpGeneration", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        default: 0,
        postgresql: { columnName: 'login_retry_count', dataType: 'INT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AppUser.prototype, "loginRetryCount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        default: '+91',
        postgresql: { columnName: 'contact_number_country_code', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AppUser.prototype, "contactNumberCountryCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        postgresql: { columnName: 'contact_number', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AppUser.prototype, "contactNumber", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'EMAILCONTACTBELONGSTO',
        postgresql: { columnName: 'contact_number_belongs_to', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], AppUser.prototype, "contactNumberBelongsTo", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'last_login_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AppUser.prototype, "lastLoginDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'object',
        default: {},
        postgresql: { columnName: 'config', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], AppUser.prototype, "config", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        optionLabelIdentifier: 'APPUSERSTATUS',
        postgresql: { columnName: 'app_user_status', dataType: 'SMALLINT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AppUser.prototype, "appUserStatus", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: true,
        default: false,
        postgresql: { columnName: 'force_password_change', dataType: 'BOOLEAN', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AppUser.prototype, "forcePasswordChange", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        postgresql: { columnName: 'tnc_acceptance_ip_address', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AppUser.prototype, "tncAcceptanceIpAddress", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        default: false,
        postgresql: { columnName: 'force_tnc_acceptance_required', dataType: 'BOOLEAN', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AppUser.prototype, "forceTNCAcceptanceRequired", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'force_tnc_acceptance_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AppUser.prototype, "forceTNCAcceptanceDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'mpin_reset_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AppUser.prototype, "mpinResetDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        postgresql: { columnName: 'one_time_password', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AppUser.prototype, "oneTimePassword", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'primary_source', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AppUser.prototype, "primarySource", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AppUser.prototype, "bosCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'secondary_source', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AppUser.prototype, "secondarySource", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'tertiary_source', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AppUser.prototype, "tertiarySource", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'mpin', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AppUser.prototype, "mpin", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        postgresql: { columnName: 'demat_acc_number', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AppUser.prototype, "dematAccNumber", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        postgresql: { columnName: 'demat_dp_id', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AppUser.prototype, "dematDpId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        postgresql: { columnName: 'mpin_setup', dataType: 'BOOLEAN', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AppUser.prototype, "mpinSetup", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        postgresql: { columnName: 'is_professional_details_updated', dataType: 'BOOLEAN', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AppUser.prototype, "isProfessionalDetailsUpdated", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Family, {
        name: 'family',
        keyFrom: 'familyId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_family', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AppUser.prototype, "familyId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.UserManagementAppFile, {
        name: 'appFileProfilePicture',
        keyFrom: 'appFileProfilePictureId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_file_profile_picture', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AppUser.prototype, "appFileProfilePictureId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'txn_otp_generation', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AppUser.prototype, "txnOTPGeneration", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'txn_otp_retry_count', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AppUser.prototype, "txnOTPRetryCount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'txn_otp_verification_count', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AppUser.prototype, "txnOTPVerificationCount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'txn_otp_expiry', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AppUser.prototype, "txnOTPExpiry", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        postgresql: { columnName: 'otp_ref_no', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AppUser.prototype, "otpRefNo", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        postgresql: { columnName: 'txn_otp_ref_no', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AppUser.prototype, "txnOTPRefNo", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasOne)(() => investor_details_model_1.InvestorDetails, { keyTo: 'appUserId' }),
    (0, tslib_1.__metadata)("design:type", investor_details_model_1.InvestorDetails)
], AppUser.prototype, "investorDetails", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => app_role_model_1.AppRole, {
        through: {
            model: () => app_user_role_mapping_model_1.AppUserRoleMapping,
            keyFrom: 'appUserId',
            keyTo: 'appRoleId'
        }
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AppUser.prototype, "appRoles", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'object',
        required: false,
        default: {},
        postgresql: { columnName: 'remarks', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], AppUser.prototype, "remarks", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => app_access_token_model_1.AppAccessToken, { keyTo: 'appUserId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], AppUser.prototype, "accessTokens", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => account_model_1.Account, { keyTo: 'primaryHolderId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], AppUser.prototype, "primaryAccounts", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => __1.FamilyMapping, { keyTo: 'parentId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], AppUser.prototype, "parentIds", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => __1.FamilyMapping, { keyTo: 'childId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], AppUser.prototype, "childIds", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => alert_model_1.Alert, { keyTo: 'appUserId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], AppUser.prototype, "alerts", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => feedback_model_1.Feedback, { keyTo: 'appUserId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], AppUser.prototype, "feedbacks", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => cas_request_model_1.CasRequest, { keyTo: 'appUserId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], AppUser.prototype, "casRequests", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => mpin_history_model_1.MpinHistory, { keyTo: 'appUserId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], AppUser.prototype, "mpinHistories", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => idcom_details_model_1.IdcomDetails, { keyTo: 'appUserId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], AppUser.prototype, "idcomDetails", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => user_notification_token_model_1.UserNotificationToken, { keyTo: 'appUserId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], AppUser.prototype, "userNotificationTokens", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasOne)(() => _1.Operation, { keyTo: 'appUserId' }),
    (0, tslib_1.__metadata)("design:type", _1.Operation)
], AppUser.prototype, "operationDetails", void 0);
AppUser = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            indexes: {
                idx_is_active: { keys: { is_active: 1 }, options: { unique: false } },
                idx_created_date: { keys: { created_date: 1 }, options: { unique: false } },
                idx_last_modified_date: { keys: { last_modified_date: 1 }, options: { unique: false } },
                idx_user_code: { keys: { user_code: 1 }, options: { unique: true } },
                idx_name: { keys: { name: 1 }, options: { unique: false } },
                idx_email: { keys: { email: 1 }, options: { unique: false } },
                idx_contact_number: { keys: { contact_number: 1 }, options: { unique: false } }
            },
            postgresql: { tableName: 'user' },
            plural: 'AppUsers',
            foreignKeys: {
                fkidx_app_user_family_fk_id_family: {
                    name: 'fkidx_app_user_family_fk_id_family',
                    foreignKey: 'fk_id_family',
                    entityKey: 'id',
                    entity: 'Family'
                },
                fkidx_user_file_fk_id_file_profile_picture: {
                    name: 'fkidx_user_file_fk_id_file_profile_picture',
                    foreignKey: 'fk_id_file_profile_picture',
                    entityKey: 'id',
                    entity: 'AppFile'
                }
            },
            hiddenProperties: ['password', 'oneTimePassword', 'passwordExpiry', 'loginRetryCount', 'otp', 'otp_expiry', 'mpin']
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], AppUser);
exports.AppUser = AppUser;
//# sourceMappingURL=app-user.model.js.map