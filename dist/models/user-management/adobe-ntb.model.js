"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdobeNtbUser = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
const __2 = require("..");
let AdobeNtbUser = class AdobeNtbUser extends __1.BaseSQLModel {
    // Define well-known properties here
    // Indexer property to allow additional data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // [prop: string]: any;
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        postgresql: { columnName: 'mobile_number', dataType: 'NUMERIC', dataPrecision: 25, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AdobeNtbUser.prototype, "mobileNumber", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: true,
        postgresql: { columnName: 'dob', dataType: 'DATE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AdobeNtbUser.prototype, "dob", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        postgresql: { columnName: 'crm_lead_no', dataType: 'NUMERIC', dataPrecision: 25, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AdobeNtbUser.prototype, "crmLeadNo", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'adobe_journey_id', dataType: 'VARCHAR', dataLength: 200, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AdobeNtbUser.prototype, "adobeJourneyId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        optionLabelIdentifier: 'ACCOUNTSTATUS',
        postgresql: { columnName: 'account_status', dataType: 'SMALLINT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AdobeNtbUser.prototype, "accountStatus", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'user_defined_field_1', dataType: 'VARCHAR', dataLength: 200, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AdobeNtbUser.prototype, "userDefinedField1", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'user_defined_field_2', dataType: 'VARCHAR', dataLength: 200, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AdobeNtbUser.prototype, "userDefinedField2", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'user_defined_field_3', dataType: 'VARCHAR', dataLength: 200, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AdobeNtbUser.prototype, "userDefinedField3", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'user_defined_field_4', dataType: 'VARCHAR', dataLength: 200, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AdobeNtbUser.prototype, "userDefinedField4", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'user_defined_field_5', dataType: 'VARCHAR', dataLength: 200, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AdobeNtbUser.prototype, "userDefinedField5", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __2.AppUser, {
        name: 'appUser',
        keyFrom: 'appUserId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_user', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AdobeNtbUser.prototype, "appUserId", void 0);
AdobeNtbUser = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            forceId: false,
            plural: 'AdobeJourneyNtbUsers',
            postgresql: { tableName: 'adobe_journey_ntb_user' },
            foreignKeys: {
                fkidx_adobe_ntb_user_fk_id_user: {
                    name: 'fkidx_adobe_ntb_user_fk_id_user',
                    foreignKey: 'fk_id_user',
                    entityKey: 'id',
                    entity: 'AppUser'
                }
            }
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], AdobeNtbUser);
exports.AdobeNtbUser = AdobeNtbUser;
//# sourceMappingURL=adobe-ntb.model.js.map