"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartItem = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
const cart_model_1 = require("./cart.model");
const goal_model_1 = require("./goal.model");
const transaction_1 = require("../transaction");
let CartItem = class CartItem extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        postgresql: { columnName: 'line_number', dataType: 'INT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CartItem.prototype, "lineNumber", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'frequency', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CartItem.prototype, "frequency", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'frequency_day', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CartItem.prototype, "frequencyDay", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'start_date_for_sip', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], CartItem.prototype, "startDateForSip", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'end_date_for_sip', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], CartItem.prototype, "endDateForSip", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'quantity', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CartItem.prototype, "quantity", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'transaction_subtype', dataType: 'INT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CartItem.prototype, "transactionSubType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'external_service_provider_account', dataType: 'VARCHAR', nullable: 'Y', dataLength: 30 }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CartItem.prototype, "externalServiceProviderAccount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'price_per_unit', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CartItem.prototype, "pricePerUnit", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'total_amount', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CartItem.prototype, "totalAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'remarks', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CartItem.prototype, "remarks", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'installments', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 15, dataScale: 3 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CartItem.prototype, "transactionCount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'object',
        default: {},
        postgresql: { columnName: 'config', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], CartItem.prototype, "config", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: true,
        default: false,
        postgresql: { columnName: 'is_all_units', dataType: 'BOOLEAN', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CartItem.prototype, "isAllUnits", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        default: false,
        postgresql: { columnName: 'is_stop_sip', dataType: 'BOOLEAN', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CartItem.prototype, "isStopSip", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        default: false,
        postgresql: { columnName: 'is_rebalancing_item', dataType: 'BOOLEAN', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CartItem.prototype, "isRebalancingItem", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        postgresql: { columnName: 'is_valid_item', dataType: 'BOOLEAN', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CartItem.prototype, "isValidItem", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        postgresql: { columnName: 'is_specific_valid', dataType: 'BOOLEAN', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CartItem.prototype, "isSpecificValid", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'validation_message', dataType: 'VARCHAR', nullable: 'Y', dataLength: 150 }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CartItem.prototype, "validationMessage", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'specific_validation_message', dataType: 'VARCHAR', nullable: 'Y', dataLength: 150 }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CartItem.prototype, "specificValidationMessage", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'verified_otp_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], CartItem.prototype, "verifiedOtpDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => cart_model_1.Cart, {
        name: 'cart',
        keyFrom: 'cartId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_cart', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CartItem.prototype, "cartId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Instrument, {
        name: 'instrument',
        keyFrom: 'instrumentId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_instrument', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CartItem.prototype, "instrumentId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Instrument, {
        name: 'secondaryInstrument',
        keyFrom: 'secondaryInstrumentId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_secondary_instrument', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CartItem.prototype, "secondaryInstrumentId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.ServiceProviderAccount, {
        name: 'serviceProviderAccount',
        keyFrom: 'serviceProviderAccountId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_service_provider_account', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CartItem.prototype, "serviceProviderAccountId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.TransactionType, {
        name: 'transactionType',
        keyFrom: 'transactionTypeId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_transaction_type', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CartItem.prototype, "transactionTypeId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => goal_model_1.Goal, {
        name: 'goal',
        keyFrom: 'goalId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_goal', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CartItem.prototype, "goalId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => transaction_1.SystematicMethod, {
        name: 'systematicMethod',
        keyFrom: 'systematicMethodId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_systematic_method', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CartItem.prototype, "systematicMethodId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.TransactionTwoFa, {
        name: 'transactionTwoFaSms',
        keyFrom: 'transactionTwoFaSmsId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_transaction_two_fa_sms', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CartItem.prototype, "transactionTwoFaSmsId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.TransactionTwoFa, {
        name: 'transactionTwoFaEmail',
        keyFrom: 'transactionTwoFaEmailId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_transaction_two_fa_email', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CartItem.prototype, "transactionTwoFaEmailId", void 0);
CartItem = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'cart_item' },
            plural: 'CartItems',
            foreignKeys: {
                fkidx_cart_item_cart_fk_id_cart: {
                    name: 'fkidx_cart_item_cart_fk_id_cart',
                    foreignKey: 'fk_id_cart',
                    entityKey: 'id',
                    entity: 'Cart'
                },
                fkidx_cart_item_instrument_fk_id_instrument: {
                    name: 'fkidx_cart_item_instrument_fk_id_instrument',
                    foreignKey: 'fk_id_instrument',
                    entityKey: 'id',
                    entity: 'Instrument'
                },
                fkidx_cart_item_instrument_fk_id_instrument_secondary: {
                    name: 'fkidx_cart_item_instrument_fk_id_instrument_secondary',
                    foreignKey: 'fk_id_secondary_instrument',
                    entityKey: 'id',
                    entity: 'Instrument'
                },
                fkidx_cart_item_goal_fk_id_goal: {
                    name: 'fkidx_cart_item_goal_fk_id_goal',
                    foreignKey: 'fk_id_goal',
                    entityKey: 'id',
                    entity: 'Goal'
                },
                fkidx_cart_item_transaction_type_fk_id_transaction_type: {
                    name: 'fkidx_cart_item_transaction_type_fk_id_transaction_type',
                    foreignKey: 'fk_id_transaction_type',
                    entityKey: 'id',
                    entity: 'TransactionType'
                },
                fkidx_cart_item_spa_fk_id_service_provider_account: {
                    name: 'fkidx_cart_item_spa_fk_id_service_provider_account',
                    foreignKey: 'fk_id_service_provider_account',
                    entityKey: 'id',
                    entity: 'ServiceProviderAccount'
                },
                fkidx_cart_item_systematic_method_fk_id_goal: {
                    name: 'fkidx_cart_item_systematic_method_fk_id_systematic_method',
                    foreignKey: 'fk_id_systematic_method',
                    entityKey: 'id',
                    entity: 'SystematicMethod'
                },
                fkidx_cart_transaction_two_fa_fk_id_transaction_two_fa_sms: {
                    name: 'fkidx_cart_transaction_two_fa_fk_id_transaction_two_fa_sms',
                    foreignKey: 'fk_id_transaction_two_fa_sms',
                    entityKey: 'id',
                    entity: 'TransactionTwoFa'
                },
                fkidx_cart_transaction_two_fa_fk_id_transaction_two_fa_email: {
                    name: 'fkidx_cart_transaction_two_fa_fk_id_transaction_two_fa_email',
                    foreignKey: 'fk_id_transaction_two_fa_email',
                    entityKey: 'id',
                    entity: 'TransactionTwoFa'
                }
            },
            hiddenProperties: [
                'fk_id_cart',
                'fk_id_instrument',
                'fk_id_secondary_instrument',
                'fk_id_goal',
                'fk_id_transaction_type',
                'fk_id_service_provider_account'
            ]
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], CartItem);
exports.CartItem = CartItem;
//# sourceMappingURL=cart-item.model.js.map