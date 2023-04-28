"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UamIntegration = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let UamIntegration = class UamIntegration extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'user_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UamIntegration.prototype, "userCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'user_name', dataType: 'VARCHAR', dataLength: 255, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UamIntegration.prototype, "userName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'employee_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UamIntegration.prototype, "employeeCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
        postgresql: { columnName: 'branch_code', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UamIntegration.prototype, "branchCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
        postgresql: { columnName: 'branch_name', dataType: 'VARCHAR', dataLength: 250, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UamIntegration.prototype, "branchName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
        postgresql: { columnName: 'department_code', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UamIntegration.prototype, "departmentCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
        postgresql: { columnName: 'department_name', dataType: 'VARCHAR', dataLength: 250, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UamIntegration.prototype, "departmentName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
        postgresql: { columnName: 'profile', dataType: 'VARCHAR', dataLength: 250, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UamIntegration.prototype, "profile", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
        postgresql: { columnName: 'status', dataType: 'VARCHAR', dataLength: 250, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UamIntegration.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: false,
        postgresql: { columnName: 'last_login_date', dataType: 'DATE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UamIntegration.prototype, "lastLoginDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
        postgresql: { columnName: 'activity', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UamIntegration.prototype, "activity", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
        postgresql: { columnName: 'sub_status', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UamIntegration.prototype, "subStatus", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
        postgresql: { columnName: 'sub_profile', dataType: 'VARCHAR', dataLength: 250, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UamIntegration.prototype, "subProfile", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
        postgresql: { columnName: 'contact_number', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UamIntegration.prototype, "contactNumber", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: false,
        optionLabelIdentifier: 'USERTYPE',
        postgresql: { columnName: 'user_type', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], UamIntegration.prototype, "userType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        optionLabelIdentifier: 'APPUSERCATEGORY',
        postgresql: { columnName: 'category', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], UamIntegration.prototype, "category", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
        postgresql: { columnName: 'reporting_manager_code', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UamIntegration.prototype, "reportingManagerCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
        postgresql: { columnName: 'old_contact_number', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UamIntegration.prototype, "oldContactNumber", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
        postgresql: { columnName: 'new_contact_number', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UamIntegration.prototype, "newContactNumber", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: false,
        postgresql: { columnName: 'old_user_type', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], UamIntegration.prototype, "oldUserType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: false,
        optionLabelIdentifier: 'USERTYPE',
        postgresql: { columnName: 'new_user_type', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], UamIntegration.prototype, "newUserType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
        postgresql: { columnName: 'old_employee_name', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UamIntegration.prototype, "oldEmployeeName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
        postgresql: { columnName: 'new_employee_name', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UamIntegration.prototype, "newEmployeeName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
        postgresql: { columnName: 'old_profile_name', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UamIntegration.prototype, "oldProfileName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
        postgresql: { columnName: 'new_profile_name', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UamIntegration.prototype, "newProfileName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
        postgresql: { columnName: 'old_branch_name', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UamIntegration.prototype, "oldBranchName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
        postgresql: { columnName: 'new_branch_name', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UamIntegration.prototype, "newBranchName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
        postgresql: { columnName: 'old_department_name', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UamIntegration.prototype, "oldDepartmentName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
        postgresql: { columnName: 'new_department_name', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UamIntegration.prototype, "newDepartmentName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'last_modified_maker_id', dataType: 'VARCHAR', dataLength: 100, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UamIntegration.prototype, "lastModifiedMakerId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'last_modified_checker_id', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], UamIntegration.prototype, "lastModifiedCheckerId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: false,
        postgresql: { columnName: 'last_modified_maker_date_time', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], UamIntegration.prototype, "lastModifiedMakerDateTime", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'last_modified_checker_date_time', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], UamIntegration.prototype, "lastModifiedCheckerDateTime", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: false,
        postgresql: { columnName: 'disable_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], UamIntegration.prototype, "disableDateTime", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: false,
        postgresql: { columnName: 'deletion_date_time', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], UamIntegration.prototype, "deletionDateTime", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: false,
        postgresql: { columnName: 'dormant_date_time', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], UamIntegration.prototype, "dormantDateTime", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: false,
        postgresql: { columnName: 'creation_date_time', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], UamIntegration.prototype, "creationDateTime", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        default: true,
        postgresql: { columnName: 'is_latest', dataType: 'Boolean', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], UamIntegration.prototype, "isLatest", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
        postgresql: { columnName: 'email', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UamIntegration.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
        postgresql: { columnName: 'old_email', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UamIntegration.prototype, "oldEmail", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
        postgresql: { columnName: 'new_email', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UamIntegration.prototype, "newEmail", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: false,
        optionLabelIdentifier: 'SALUTATION',
        postgresql: { columnName: 'old_salutation', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], UamIntegration.prototype, "oldSalutation", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: false,
        optionLabelIdentifier: 'SALUTATION',
        postgresql: { columnName: 'new_salutation', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], UamIntegration.prototype, "newSalutation", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: false,
        optionLabelIdentifier: 'SALUTATION',
        postgresql: { columnName: 'salutation', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], UamIntegration.prototype, "salutation", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: false,
        postgresql: { columnName: 'dob', dataType: 'DATE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], UamIntegration.prototype, "dob", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: false,
        postgresql: { columnName: 'old_dob', dataType: 'DATE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], UamIntegration.prototype, "oldDob", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: false,
        postgresql: { columnName: 'new_dob', dataType: 'DATE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], UamIntegration.prototype, "newDob", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: false,
        optionLabelIdentifier: 'APPUSERCATEGORY',
        postgresql: { columnName: 'old_category', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], UamIntegration.prototype, "oldCategory", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: false,
        optionLabelIdentifier: 'APPUSERCATEGORY',
        postgresql: { columnName: 'new_category', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], UamIntegration.prototype, "newCategory", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
        postgresql: { columnName: 'old_department_code', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UamIntegration.prototype, "oldDepartmentCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
        postgresql: { columnName: 'new_department_code', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UamIntegration.prototype, "newDepartmentCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
        postgresql: { columnName: 'old_branch_code', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UamIntegration.prototype, "oldBranchCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
        postgresql: { columnName: 'new_branch_code', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UamIntegration.prototype, "newBranchCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
        postgresql: { columnName: 'old_reporting_manager_code', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UamIntegration.prototype, "oldReportingManagerCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
        postgresql: { columnName: 'new_reporting_manager_code', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UamIntegration.prototype, "newReportingManagerCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: false,
        optionLabelIdentifier: 'GENDER',
        postgresql: { columnName: 'old_gender', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], UamIntegration.prototype, "oldGender", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: false,
        optionLabelIdentifier: 'GENDER',
        postgresql: { columnName: 'new_gender', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], UamIntegration.prototype, "newGender", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: false,
        optionLabelIdentifier: 'GENDER',
        postgresql: { columnName: 'gender', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], UamIntegration.prototype, "gender", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'max_allowed_login_attempts', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], UamIntegration.prototype, "maxAllowedLoginAttempts", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        postgresql: { columnName: 'enabled_from_dormancy_recently', dataType: 'BOOLEAN', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], UamIntegration.prototype, "enabledFromDormancyRecently", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.AppUser, {
        name: 'appUser',
        keyFrom: 'appUserId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_app_user', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], UamIntegration.prototype, "appUserId", void 0);
UamIntegration = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            indexes: {
                idx_activity: {
                    keys: {
                        activity: 1
                    },
                    options: {
                        unique: false
                    }
                },
                idx_is_latest: {
                    keys: {
                        is_latest: 1
                    },
                    options: {
                        unique: false
                    }
                },
                idx_fk_id_app_user: {
                    keys: {
                        fk_id_app_user: 1
                    },
                    options: {
                        unique: false
                    }
                }
            },
            postgresql: { tableName: 'uam_integration' },
            plural: 'uamIntegrations',
            foreignKeys: {
                fkidx_uam_integration_user_fk_id_app_user: {
                    name: 'fkidx_uam_integration_user_fk_id_app_user',
                    foreignKey: 'fk_id_app_user',
                    entityKey: 'id',
                    entity: 'AppUser'
                }
            }
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], UamIntegration);
exports.UamIntegration = UamIntegration;
//# sourceMappingURL=uam-integration.model.js.map