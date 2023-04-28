"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
const service_provider_account_model_1 = require("./service-provider-account.model");
let Transaction = class Transaction extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: true,
        default: false,
        postgresql: { columnName: 'is_dummy', dataType: 'BOOLEAN', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], Transaction.prototype, "isDummy", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        default: false,
        postgresql: { columnName: 'is_remapped_to_account', dataType: 'BOOLEAN', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], Transaction.prototype, "isRemappedToAccount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'reverse_feed_unique_hash', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Transaction.prototype, "reverseFeedUniqueHash", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Transaction.prototype, "bosCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'nse_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Transaction.prototype, "nseCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'bse_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Transaction.prototype, "bseCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: true,
        postgresql: { columnName: 'transaction_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], Transaction.prototype, "transactionDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'order_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], Transaction.prototype, "orderDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'acquisition_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], Transaction.prototype, "acquisitionDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        default: 3,
        optionLabelIdentifier: 'TRANSACTIONSTATUS',
        postgresql: { columnName: 'status', dataType: 'SMALLINT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Transaction.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        default: 1,
        optionLabelIdentifier: 'TRANSACTIONSUBTYPE',
        postgresql: { columnName: 'transaction_sub_type', dataType: 'SMALLINT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Transaction.prototype, "transactionSubType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'quantity', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Transaction.prototype, "quantity", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'opening_quantity', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Transaction.prototype, "openingQuantity", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'closing_quantity', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Transaction.prototype, "closingQuantity", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'price_per_unit', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Transaction.prototype, "pricePerUnit", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        postgresql: { columnName: 'total_amount', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Transaction.prototype, "totalAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'brokerage_amount', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Transaction.prototype, "brokerageAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'accrued_interest', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Transaction.prototype, "accruedInterest", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'opening_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Transaction.prototype, "openingAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'closing_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Transaction.prototype, "closingAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'service_provider_reference_number', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Transaction.prototype, "serviceProviderReferenceNumber", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'user_transaction_number', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Transaction.prototype, "userTransactionNumber", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'bank_name', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Transaction.prototype, "bankName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        postgresql: { columnName: 'bank_account_number', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Transaction.prototype, "bankAccountNumber", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'remark', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Transaction.prototype, "remark", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        default: false,
        postgresql: { columnName: 'is_transferred', dataType: 'BOOLEAN', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], Transaction.prototype, "isTransferred", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        default: true,
        postgresql: { columnName: 'is_metro_area', dataType: 'BOOLEAN', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], Transaction.prototype, "isMetroArea", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: true,
        default: false,
        postgresql: { columnName: 'is_uploaded', dataType: 'BOOLEAN', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], Transaction.prototype, "isUploaded", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        default: 1,
        optionLabelIdentifier: 'TRANSACTIONSOURCE',
        postgresql: { columnName: 'source', dataType: 'SMALLINT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Transaction.prototype, "source", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: true,
        default: false,
        postgresql: { columnName: 'is_ca_applied_transaction', dataType: 'BOOLEAN', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], Transaction.prototype, "isCAAppliedTransaction", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'batch_code', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Transaction.prototype, "batchCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'ORDERRECEIPTMODE',
        postgresql: { columnName: 'order_receipt_mode', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Transaction.prototype, "orderReceiptMode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'committed_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Transaction.prototype, "committedAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'adjustment_factor', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Transaction.prototype, "adjustmentFactor", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'STOPLOSSTRIGGERPRICE',
        postgresql: { columnName: 'stop_loss_trigger_price', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Transaction.prototype, "stopLossTriggerPrice", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'stop_loss_booking_profit', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Transaction.prototype, "stopLossBookingProfit", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'stamp_duty', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Transaction.prototype, "stampDuty", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        default: false,
        postgresql: { columnName: 'revenue_applicable', dataType: 'BOOLEAN', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], Transaction.prototype, "revenueApplicable", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: false,
        postgresql: { columnName: 'nav_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], Transaction.prototype, "navDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.OrderItem, {
        name: 'orderItem',
        keyFrom: 'orderItemId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_order_item', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Transaction.prototype, "orderItemId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Instrument, {
        name: 'instrument',
        keyFrom: 'instrumentId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_instrument', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Transaction.prototype, "instrumentId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Instrument, {
        name: 'secondaryInstrument',
        keyFrom: 'secondaryInstrumentId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_secondary_instrument', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Transaction.prototype, "secondaryInstrumentId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Account, {
        name: 'account',
        keyFrom: 'accountId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_account', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Transaction.prototype, "accountId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => service_provider_account_model_1.ServiceProviderAccount, {
        name: 'serviceProviderAccount',
        keyFrom: 'serviceProviderAccountId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_service_provider_account', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Transaction.prototype, "serviceProviderAccountId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Currency, {
        name: 'currency',
        keyFrom: 'currencyId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_currency', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Transaction.prototype, "currencyId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.TransactionType, {
        name: 'transactionType',
        keyFrom: 'transactionTypeId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_transaction_type', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Transaction.prototype, "transactionTypeId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Goal, {
        name: 'goal',
        keyFrom: 'goalId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_goal', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Transaction.prototype, "goalId", void 0);
Transaction = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            indexes: {
                idx_is_active: { keys: { is_active: 1 }, options: { unique: false } },
                idx_created_date: { keys: { created_date: 1 }, options: { unique: false } },
                idx_last_modified_date: { keys: { last_modified_date: 1 }, options: { unique: false } },
                idx_status: { keys: { status: 1 }, options: { unique: false } },
                idx_reverse_feed_unique_hash: { keys: { reverse_feed_unique_hash: 1 }, options: { unique: false } },
                idx_is_active_is_dummy_status_fk_id_spa: {
                    keys: { is_active: 1, is_dummy: 1, status: 1, fk_id_service_provider_account: 1 },
                    options: { unique: false }
                },
                idx_is_active_status_fk_id_spa: {
                    keys: { is_active: 1, status: 1, fk_id_service_provider_account: 1 },
                    options: { unique: false }
                },
                idx_is_active_is_ca_applied_transaction_fk_id_account: {
                    keys: { is_active: 1, is_ca_applied_transaction: 1, fk_id_account: 1 },
                    options: { unique: false }
                }
            },
            postgresql: { tableName: 'transaction' },
            plural: 'Transactions',
            foreignKeys: {
                fkidx_transaction_order_item_fk_id_order_item: {
                    name: 'fkidx_transaction_order_item_fk_id_order_item',
                    foreignKey: 'fk_id_order_item',
                    entityKey: 'id',
                    entity: 'OrderItem'
                },
                fkidx_transaction_transaction_type_fk_id_transaction_type: {
                    name: 'fkidx_transaction_transaction_type_fk_id_transaction_type',
                    foreignKey: 'fk_id_transaction_type',
                    entityKey: 'id',
                    entity: 'TransactionType'
                },
                fkidx_transaction_instrument_fk_id_instrument: {
                    name: 'fkidx_transaction_instrument_fk_id_instrument',
                    foreignKey: 'fk_id_instrument',
                    entityKey: 'id',
                    entity: 'Instrument'
                },
                fkidx_transaction_secondary_instrument_fk_id: {
                    name: 'fkidx_transaction_secondary_instrument_fk_id',
                    foreignKey: 'fk_id_secondary_instrument',
                    entityKey: 'id',
                    entity: 'Instrument'
                },
                fkidx_transaction_account_fk_id_account: {
                    name: 'fkidx_transaction_account_fk_id_account',
                    foreignKey: 'fk_id_account',
                    entityKey: 'id',
                    entity: 'Account'
                },
                fkidx_transaction_service_provider_account_fk_id_spa: {
                    name: 'fkidx_transaction_service_provider_account_fk_id_spa',
                    foreignKey: 'fk_id_service_provider_account',
                    entityKey: 'id',
                    entity: 'ServiceProviderAccount'
                },
                fkidx_transaction_currency_fk_id_currency: {
                    name: 'fkidx_transaction_currency_fk_id_currency',
                    foreignKey: 'fk_id_currency',
                    entityKey: 'id',
                    entity: 'Currency'
                },
                fkidx_transaction_goal_fk_id_goal: {
                    name: 'fkidx_transaction_goal_fk_id_goal',
                    foreignKey: 'fk_id_goal',
                    entityKey: 'id',
                    entity: 'Goal'
                }
            },
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Transaction);
exports.Transaction = Transaction;
//# sourceMappingURL=transaction.model.js.map