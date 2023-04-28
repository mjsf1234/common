"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
const account_model_1 = require("./account.model");
const mandate_model_1 = require("./mandate.model");
let BankAccount = class BankAccount extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        isPseudonym: true,
        postgresql: { columnName: 'account_name', dataType: 'VARCHAR', dataLength: 255, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BankAccount.prototype, "accountName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        isEncrypted: true,
        postgresql: { columnName: 'account_number', dataType: 'VARCHAR', dataLength: 50, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BankAccount.prototype, "accountNumber", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BankAccount.prototype, "bosCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: true,
        default: false,
        postgresql: { columnName: 'is_default', dataType: 'BOOLEAN', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], BankAccount.prototype, "isDefault", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        postgresql: { columnName: 'is_cheque_uploaded', dataType: 'BOOLEAN', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], BankAccount.prototype, "isChequeUploaded", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        postgresql: { columnName: 'is_pennydrop_verified', dataType: 'BOOLEAN', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], BankAccount.prototype, "isPennydropVerified", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'BANKACCOUNTSTATUS',
        postgresql: { columnName: 'bank_account_status', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BankAccount.prototype, "bankAccountStatus", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => account_model_1.Account, {
        name: 'account',
        keyFrom: 'accountId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_account', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BankAccount.prototype, "accountId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.BankBranch, {
        name: 'bankBranch',
        keyFrom: 'bankBranchId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_bank_branch', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BankAccount.prototype, "bankBranchId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.BankAccountType, {
        name: 'bankAccountType',
        keyFrom: 'bankAccountTypeId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_bank_account_type', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BankAccount.prototype, "bankAccountTypeId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.HoldingType, {
        name: 'holdingType',
        keyFrom: 'holdingTypeId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_holding_type', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BankAccount.prototype, "holdingTypeId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.InvestorType, {
        name: 'investorType',
        keyFrom: 'investorTypeId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_investor_type', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BankAccount.prototype, "investorTypeId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.UserManagementAppFile, {
        name: 'chequeImageFile',
        keyFrom: 'chequeImageFileId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_cheque_image_file', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BankAccount.prototype, "chequeImageFileId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => mandate_model_1.Mandate, { keyTo: 'bankAccountId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], BankAccount.prototype, "mandates", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => __1.PaymentDetails, { keyTo: 'bankAccountId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], BankAccount.prototype, "paymentDetails", void 0);
BankAccount = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'bank_account' },
            plural: 'BankAccounts',
            foreignKeys: {
                fkidx_bank_account_account_fk_id_account: {
                    name: 'fkidx_bank_account_account_fk_id_account',
                    foreignKey: 'fk_id_account',
                    entityKey: 'id',
                    entity: 'Account'
                },
                fkidx_bank_account_bank_account_type_fk_id_bank_account_type: {
                    name: 'fkidx_bank_account_bank_account_type_fk_id_bank_account_type',
                    foreignKey: 'fk_id_bank_account_type',
                    entityKey: 'id',
                    entity: 'BankAccountType'
                },
                fkidx_bank_account_bank_branch_fk_id_bank_branch: {
                    name: 'fkidx_bank_account_bank_branch_fk_id_bank_branch',
                    foreignKey: 'fk_id_bank_branch',
                    entityKey: 'id',
                    entity: 'BankBranch'
                }
            },
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], BankAccount);
exports.BankAccount = BankAccount;
//# sourceMappingURL=bank-account.model.js.map