"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionVerification = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
const cart_model_1 = require("./cart.model");
let TransactionVerification = class TransactionVerification extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'otp_expiry', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], TransactionVerification.prototype, "otpExpiry", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'otp_generation', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], TransactionVerification.prototype, "otpGeneration", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        postgresql: { columnName: 'otp', dataType: 'VARCHAR', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TransactionVerification.prototype, "otp", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        postgresql: { columnName: 'contact_number', dataType: 'VARCHAR', dataLength: 50, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TransactionVerification.prototype, "contactNumber", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'VERIFICATIONSTATUS',
        postgresql: { columnName: 'verification_status', dataType: 'SMALLINT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], TransactionVerification.prototype, "verificationStatus", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'unique_id', dataType: 'VARCHAR', dataLength: 30, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TransactionVerification.prototype, "uniqueId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'cart_items_id', dataType: 'TEXT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TransactionVerification.prototype, "cartItemsId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'otp_retry_count', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], TransactionVerification.prototype, "otpRetryCount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Account, {
        name: 'account',
        keyFrom: 'accountId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_account', dataType: 'INT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], TransactionVerification.prototype, "accountId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => cart_model_1.Cart, {
        name: 'cart',
        keyFrom: 'cartId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_cart', dataType: 'INT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], TransactionVerification.prototype, "cartId", void 0);
TransactionVerification = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'transaction_verification' },
            plural: 'TransactionVerification',
            foreignKeys: {
                fkidx_transaction_verifictation_cart_fk_id_cart: {
                    name: 'fkidx_transaction_verifictation_cart_fk_id_cart',
                    foreignKey: 'fk_id_cart',
                    entityKey: 'id',
                    entity: 'Cart'
                },
                fkidx_transaction_verifictation_account_fk_id_account: {
                    name: 'fkidx_transaction_verifictation_account_fk_id_account',
                    foreignKey: 'fk_id_account',
                    entityKey: 'id',
                    entity: 'Account'
                }
            },
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], TransactionVerification);
exports.TransactionVerification = TransactionVerification;
//# sourceMappingURL=transaction-verification.model.js.map