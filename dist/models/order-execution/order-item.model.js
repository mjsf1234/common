"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItem = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
const transaction_1 = require("../transaction");
const goal_model_1 = require("./goal.model");
const order_model_1 = require("./order.model");
const transaction_feed_log_model_1 = require("./transaction-feed-log.model");
const queues_1 = require("../../queues");
let OrderItem = class OrderItem extends __1.BaseSQLModel {
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
], OrderItem.prototype, "lineNumber", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'unique_id', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItem.prototype, "uniqueId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: true,
        postgresql: { columnName: 'order_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], OrderItem.prototype, "orderDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'reverse_feed_unique_hash', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItem.prototype, "reverseFeedUniqueHash", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItem.prototype, "bosCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'nse_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItem.prototype, "nseCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'bse_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItem.prototype, "bseCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'rta_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItem.prototype, "rtaCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'external_service_provider_account', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItem.prototype, "externalServiceProviderAccount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        optionLabelIdentifier: 'TRANSACTIONSTATUS',
        postgresql: { columnName: 'order_item_status', dataType: 'SMALLINT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItem.prototype, "orderItemStatus", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'SERVICEPROVIDERACCOUNTOPTIONS',
        postgresql: { columnName: 'service_provider_account_option', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItem.prototype, "serviceProviderAccountOption", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'STOPLOSSTRIGGERPRICE',
        postgresql: { columnName: 'stop_loss_trigger_price', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItem.prototype, "stopLossTriggerPrice", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'stop_loss_booking_profit', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItem.prototype, "stopLossBookingProfit", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'SYSTEMATICMETHODFREQUENCY',
        postgresql: { columnName: 'systematic_method_frequency', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItem.prototype, "systematicMethodFrequency", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'number_of_installments', nullable: 'Y', dataType: 'SMALLINT' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItem.prototype, "numberOfInstallments", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'systematic_start_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], OrderItem.prototype, "systematicStartDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'quantity', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItem.prototype, "quantity", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'price_per_unit', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItem.prototype, "pricePerUnit", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'total_amount', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItem.prototype, "totalAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'committed_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItem.prototype, "committedAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'accrued_interest', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItem.prototype, "accruedInterest", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'stamp_duty', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItem.prototype, "stampDuty", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'service_provider_reference_number', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItem.prototype, "serviceProviderReferenceNumber", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'remarks', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItem.prototype, "remarks", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'BSEPURCHASETYPE',
        postgresql: { columnName: 'bse_purchase_type', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItem.prototype, "bsePurchaseType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'BSEREDEMPTIONTYPE',
        postgresql: { columnName: 'bse_redemption_type', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItem.prototype, "bseRedemptionType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: true,
        default: true,
        postgresql: { columnName: 'is_all_units', dataType: 'BOOLEAN', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], OrderItem.prototype, "isAllUnits", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: true,
        default: false,
        postgresql: { columnName: 'is_reconciled', dataType: 'BOOLEAN', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], OrderItem.prototype, "isReconciled", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'confirmed_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], OrderItem.prototype, "confirmedDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'confirmed_quantity', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItem.prototype, "confirmedQuantity", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'confirmed_price_per_unit', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItem.prototype, "confirmedPricePerUnit", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'confirmed_service_provider_account', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItem.prototype, "confirmedServiceProviderAccount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'confirmed_total_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItem.prototype, "confirmedTotalAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'bse_order_remarks', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItem.prototype, "bseOrderRemarks", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'bse_order_status', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItem.prototype, "bseOrderStatus", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        optionLabelIdentifier: 'ORDERMEDIUM',
        postgresql: { columnName: 'order_medium', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItem.prototype, "orderMedium", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'value_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], OrderItem.prototype, "valueDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'TRANSACTIONGENERATIONSTATUS',
        postgresql: { columnName: 'order_item_sent_status', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItem.prototype, "orderItemSentStatus", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'object',
        default: {},
        postgresql: { columnName: 'config', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], OrderItem.prototype, "config", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'PAYMENTCONFIRMATIONTOAMCSTATUS',
        postgresql: { columnName: 'payment_confirmation_to_amc_status', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItem.prototype, "paymentConfirmationToAMCStatus", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 1,
        optionLabelIdentifier: 'ORDERITEMSOURCE',
        postgresql: { columnName: 'order_item_source', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItem.prototype, "orderItemSource", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'registered_email', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItem.prototype, "registeredEmail", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'registered_mobile', nullable: 'Y', dataType: 'VARCHAR', dataLength: 50 }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItem.prototype, "registeredMobile", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        default: false,
        postgresql: { columnName: 'is_nominee_document_flag', dataType: 'BOOLEAN', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], OrderItem.prototype, "isNomineeDocumentGenerated", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => order_model_1.Order, {
        name: 'order',
        keyFrom: 'orderId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_order', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItem.prototype, "orderId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Instrument, {
        name: 'instrument',
        keyFrom: 'instrumentId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_instrument', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItem.prototype, "instrumentId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Instrument, {
        name: 'secondaryInstrument',
        keyFrom: 'secondaryInstrumentId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_secondary_instrument', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItem.prototype, "secondaryInstrumentId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.ServiceProviderAccount, {
        name: 'serviceProviderAccount',
        keyFrom: 'serviceProviderAccountId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_service_provider_account', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItem.prototype, "serviceProviderAccountId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Currency, {
        name: 'currency',
        keyFrom: 'currencyId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_currency', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItem.prototype, "currencyId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.TransactionType, {
        name: 'transactionType',
        keyFrom: 'transactionTypeId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_transaction_type', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItem.prototype, "transactionTypeId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.SystematicMethod, {
        name: 'systematicMethod',
        keyFrom: 'systematicMethodId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_systematic_method', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItem.prototype, "systematicMethodId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => goal_model_1.Goal, {
        name: 'goal',
        keyFrom: 'goalId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_goal', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItem.prototype, "goalId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => goal_model_1.Goal, {
        name: 'secondaryGoal',
        keyFrom: 'secondaryGoalId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_secondary_goal', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItem.prototype, "secondaryGoalId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Rta, {
        name: 'rta',
        keyFrom: 'rtaId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_rta', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItem.prototype, "rtaId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => transaction_feed_log_model_1.TransactionFeedLog, {
        name: 'txnFeedLog',
        keyFrom: 'txnFeedLogId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_txn_feed_log', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItem.prototype, "txnFeedLogId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => transaction_1.Transaction, { keyTo: 'orderItemId' }),
    (0, tslib_1.__metadata)("design:type", transaction_1.Transaction)
], OrderItem.prototype, "transaction", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasOne)(() => __1.PaymentDetails, { keyTo: 'orderItemId' }),
    (0, tslib_1.__metadata)("design:type", __1.PaymentDetails)
], OrderItem.prototype, "paymentDetails", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.PaymentConfirmationFeedLog, {
        name: 'paymentConfirmationFeedLog',
        keyFrom: 'paymentConfirmationFeedLogId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_payment_confirmation_feed_log', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItem.prototype, "paymentConfirmationFeedLogId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.TransactionTwoFa, {
        name: 'transactionTwoFaSms',
        keyFrom: 'transactionTwoFaSmsId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_transaction_two_fa_sms', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItem.prototype, "transactionTwoFaSmsId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.TransactionTwoFa, {
        name: 'transactionTwoFaEmail',
        keyFrom: 'transactionTwoFaEmailId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_transaction_two_fa_email', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItem.prototype, "transactionTwoFaEmailId", void 0);
OrderItem = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            indexes: {
                idx_is_active: { keys: { is_active: 1 }, options: { unique: false } },
                idx_created_date: { keys: { created_date: 1 }, options: { unique: false } },
                idx_last_modified_date: { keys: { last_modified_date: 1 }, options: { unique: false } },
                idx_unique_id: { keys: { unique_id: 1 }, options: { unique: false } },
                idx_reverse_feed_unique_hash: { keys: { reverse_feed_unique_hash: 1 }, options: { unique: false } }
            },
            postgresql: { tableName: 'order_item' },
            plural: 'OrderItems',
            foreignKeys: {
                fkidx_order_item_order_fk_id_order: {
                    name: 'fkidx_order_item_order_fk_id_order',
                    foreignKey: 'fk_id_order',
                    entityKey: 'id',
                    entity: 'Order'
                },
                fkidx_order_item_transaction_type_fk_id_transaction_type: {
                    name: 'fkidx_order_item_transaction_type_fk_id_transaction_type',
                    foreignKey: 'fk_id_transaction_type',
                    entityKey: 'id',
                    entity: 'TransactionType'
                },
                fkidx_order_item_instrument_fk_id_instrument: {
                    name: 'fkidx_order_item_instrument_fk_id_instrument',
                    foreignKey: 'fk_id_instrument',
                    entityKey: 'id',
                    entity: 'Instrument'
                },
                fkidx_order_item_instrument_fk_id_secondary_instrument: {
                    name: 'fkidx_order_item_instrument_fk_id_secondary_instrument',
                    foreignKey: 'fk_id_secondary_instrument',
                    entityKey: 'id',
                    entity: 'Instrument'
                },
                fkidx_order_item_goal_fk_id_goal: {
                    name: 'fkidx_order_item_goal_fk_id_goal',
                    foreignKey: 'fk_id_goal',
                    entityKey: 'id',
                    entity: 'Goal'
                },
                fkidx_order_item_secondary_goal_fk_id_secondary_goal: {
                    name: 'fkidx_order_item_secondary_goal_fk_id_secondary_goal',
                    foreignKey: 'fk_id_secondary_goal',
                    entityKey: 'id',
                    entity: 'Goal'
                },
                fkidx_order_item_systematic_method_fk_id_systematic_method: {
                    name: 'fkidx_order_item_systematic_method_fk_id_systematic_method',
                    foreignKey: 'fk_id_systematic_method',
                    entityKey: 'id',
                    entity: 'SystematicMethod'
                },
                fkidx_order_item_service_provider_account_fk_id_spa: {
                    name: 'fkidx_order_item_service_provider_account_fk_id_spa',
                    foreignKey: 'fk_id_service_provider_account',
                    entityKey: 'id',
                    entity: 'ServiceProviderAccount'
                },
                fkidx_order_item_currency_fk_id_currency: {
                    name: 'fkidx_order_item_currency_fk_id_currency',
                    foreignKey: 'fk_id_currency',
                    entityKey: 'id',
                    entity: 'Currency'
                },
                fkidx_order_item_transaction_two_fa_fk_id_transaction_two_fa_sms: {
                    name: 'fkidx_order_item_fa_fk_id_transaction_two_fa_sms',
                    foreignKey: 'fk_id_transaction_two_fa_sms',
                    entityKey: 'id',
                    entity: 'TransactionTwoFa'
                },
                fkidx_order_item_transaction_two_fa_fk_id_transaction_two_fa_email: {
                    name: 'fkidx_order_item_fa_fk_id_transaction_two_fa_email',
                    foreignKey: 'fk_id_transaction_two_fa_email',
                    entityKey: 'id',
                    entity: 'TransactionTwoFa'
                }
            },
            hiddenProperties: [],
            syncRefresher: {
                eventType: queues_1.TransactionalDataRefreshingQueueMessageEventType.ORDER_ITEM_REPLICATION_BY_ORDER_ITEM_IDS,
                params: {
                    orderItemIds: 'id',
                    type: 'Array'
                }
            }
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], OrderItem);
exports.OrderItem = OrderItem;
//# sourceMappingURL=order-item.model.js.map