"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionTwoFa = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let TransactionTwoFa = class TransactionTwoFa extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'txn_otp_generation', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], TransactionTwoFa.prototype, "txnOTPGeneration", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'txn_otp_retry_count', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], TransactionTwoFa.prototype, "txnOTPRetryCount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'txn_otp_verification_count', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], TransactionTwoFa.prototype, "txnOTPVerificationCount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'txn_otp_expiry', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], TransactionTwoFa.prototype, "txnOTPExpiry", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        default: false,
        postgresql: { columnName: 'otp_verified', dataType: 'BOOLEAN', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], TransactionTwoFa.prototype, "otpVerified", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isEncrypted: true,
        postgresql: { columnName: 'registered_email', dataType: 'text', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], TransactionTwoFa.prototype, "registeredEmail", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isEncrypted: true,
        postgresql: { columnName: 'registered_mobile', nullable: 'Y', dataType: 'text' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], TransactionTwoFa.prototype, "registeredMobile", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'txn_ref_no', dataType: 'VARCHAR', dataLength: 60, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], TransactionTwoFa.prototype, "txnRefNo", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'TWOFACTORAUTH',
        postgresql: { columnName: 'two_factor_auth_type', dataType: 'SMALLINT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], TransactionTwoFa.prototype, "twoFactorAuthType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'object',
        default: {},
        postgresql: { columnName: 'config', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], TransactionTwoFa.prototype, "config", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Account, {
        name: 'account',
        keyFrom: 'accountId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_account', dataType: 'INT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], TransactionTwoFa.prototype, "accountId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => __1.CartItem, { keyTo: 'transactionTwoFaSmsId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], TransactionTwoFa.prototype, "cartItemSmsGroups", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => __1.OrderItem, { keyTo: 'transactionTwoFaSmsId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], TransactionTwoFa.prototype, "orderItemSmsGroups", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => __1.CartItem, { keyTo: 'transactionTwoFaEmailId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], TransactionTwoFa.prototype, "cartItemEmailGroups", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => __1.OrderItem, { keyTo: 'transactionTwoFaEmailId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], TransactionTwoFa.prototype, "orderItemEmailGroups", void 0);
TransactionTwoFa = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'transactions_two_fa' },
            plural: 'transactions_two_fas',
            indexes: {
                idx_is_active: { keys: { is_active: 1 }, options: { unique: false } },
                idx_created_date: { keys: { created_date: 1 }, options: { unique: false } },
                idx_last_modified_date: { keys: { last_modified_date: 1 }, options: { unique: false } },
                idx_txn_ref_no: { keys: { txn_ref_no: 1 }, options: { unique: false } }
            },
            foreignKeys: {
                fkidx_Transaction_two_fa_account_fk_id_account: {
                    name: 'fkidx_Transaction_two_fa_account_fk_id_account',
                    foreignKey: 'fk_id_account',
                    entityKey: 'id',
                    entity: 'Account'
                }
            }
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], TransactionTwoFa);
exports.TransactionTwoFa = TransactionTwoFa;
//# sourceMappingURL=transactions-two-fa.model.js.map