"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mandate = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
const account_model_1 = require("./account.model");
const user_management_app_file_model_1 = require("./user-management-app-file.model");
const bank_account_model_1 = require("./bank-account.model");
let Mandate = class Mandate extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'umrn', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Mandate.prototype, "umrn", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: true,
        postgresql: { columnName: 'start_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], Mandate.prototype, "startDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: true,
        postgresql: { columnName: 'end_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], Mandate.prototype, "endDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        postgresql: { columnName: 'amount', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 15, dataScale: 3 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Mandate.prototype, "amount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'available_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Mandate.prototype, "availableAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        optionLabelIdentifier: 'MANDATESTATUS',
        postgresql: { columnName: 'status', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Mandate.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'reference_id', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Mandate.prototype, "referenceId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'remarks', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Mandate.prototype, "remarks", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'approved_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], Mandate.prototype, "approvedDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'until_cancelled', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Mandate.prototype, "untilCancelled", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'object',
        default: {},
        postgresql: { columnName: 'meta', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], Mandate.prototype, "meta", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => bank_account_model_1.BankAccount, {
        name: 'bankAccount',
        keyFrom: 'bankAccountId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_bank_account', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Mandate.prototype, "bankAccountId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => account_model_1.Account, {
        name: 'account',
        keyFrom: 'accountId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_account', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Mandate.prototype, "accountId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => user_management_app_file_model_1.UserManagementAppFile, {
        name: 'userManagementAppFile',
        keyFrom: 'userManagementAppFileId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_file', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Mandate.prototype, "userManagementAppFileId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.MandateType, {
        name: 'mandateType',
        keyFrom: 'mandateTypeId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_mandate_type', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Mandate.prototype, "mandateTypeId", void 0);
Mandate = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'mandate' },
            plural: 'Mandates',
            foreignKeys: {
                fkidx_mandate_bank_account_fk_id_bank_account: {
                    name: 'fkidx_mandate_bank_account_fk_id_bank_account',
                    foreignKey: 'fk_id_bank_account',
                    entityKey: 'id',
                    entity: 'BankAccount'
                },
                fkidx_mandate_account_fk_id_account: {
                    name: 'fkidx_mandate_account_fk_id_account',
                    foreignKey: 'fk_id_account',
                    entityKey: 'id',
                    entity: 'Account'
                },
                fkidx_mandate_mandate_type_fk_id_mandate_type: {
                    name: 'fkidx_mandate_mandate_type_fk_id_mandate_type',
                    foreignKey: 'fk_id_mandate_type',
                    entityKey: 'id',
                    entity: 'MandateType'
                },
                fkidx_mandate_app_file_fk_id_app_file: {
                    name: 'fkidx_mandate_app_file_fk_id_app_file',
                    foreignKey: 'fk_id_app_file',
                    entityKey: 'id',
                    entity: 'AppFile'
                }
            },
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Mandate);
exports.Mandate = Mandate;
//# sourceMappingURL=mandate.model.js.map