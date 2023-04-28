"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gain = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let Gain = class Gain extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'unique_id', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Gain.prototype, "uniqueId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: true,
        postgresql: { columnName: 'buy_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], Gain.prototype, "buyDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'buy_financial_year', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Gain.prototype, "buyFinancialYear", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'buy_indexation_cost', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Gain.prototype, "buyIndexationCost", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'indexed_cost', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Gain.prototype, "indexedCost", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'price_per_unit_grandfathering_date', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Gain.prototype, "pricePerUnitAsOnGrandfatheringDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'nav', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Gain.prototype, "nav", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'adjusted_purchase_cost', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Gain.prototype, "adjustedPurchaseCost", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: true,
        postgresql: { columnName: 'sell_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], Gain.prototype, "sellDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'sell_financial_year', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Gain.prototype, "sellFinancialYear", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'sell_indexation_cost', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Gain.prototype, "sellIndexationCost", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        postgresql: { columnName: 'holding_days', dataType: 'INT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Gain.prototype, "holdingDays", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        postgresql: { columnName: 'quantity', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Gain.prototype, "quantity", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        postgresql: { columnName: 'average_buy_price_per_unit', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Gain.prototype, "averageBuyPricePerUnit", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        postgresql: { columnName: 'average_sell_price_per_unit', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Gain.prototype, "averageSellPricePerUnit", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        postgresql: { columnName: 'total_buy_amount', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Gain.prototype, "totalBuyAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        postgresql: { columnName: 'total_sell_amount', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Gain.prototype, "totalSellAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        postgresql: { columnName: 'short_term_capital_gain', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Gain.prototype, "shortTermCapitalGain", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        postgresql: { columnName: 'long_term_capital_gain', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Gain.prototype, "longTermCapitalGain", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'business_capital_gain', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Gain.prototype, "businessCapitalGain", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'total_capital_gain', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Gain.prototype, "totalCapitalGain", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'total_capital_gain_with_indexation', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Gain.prototype, "totalCapitalGainWithIndexation", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'difference_due_to_indexation', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Gain.prototype, "differenceDueToIndexation", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'CAPITALGAINTYPE',
        postgresql: { columnName: 'capital_gain_type', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Gain.prototype, "capitalGainType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'object',
        default: {},
        postgresql: { columnName: 'calculations', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], Gain.prototype, "calculations", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'effective_cost', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 30, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Gain.prototype, "effectiveCost", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'price_as_on_31jan2018', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 30, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Gain.prototype, "priceAsOn31Jan2018", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.ServiceProviderAccount, {
        name: 'serviceProviderAccount',
        keyFrom: 'serviceProviderAccountId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_service_provider_account', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Gain.prototype, "serviceProviderAccountId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Instrument, {
        name: 'instrument',
        keyFrom: 'instrumentId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_instrument', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Gain.prototype, "instrumentId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Currency, {
        name: 'currency',
        keyFrom: 'currencyId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_currency', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Gain.prototype, "currencyId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Transaction, {
        name: 'buyTransaction',
        keyFrom: 'buyTransactionId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_buy_transaction', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Gain.prototype, "buyTransactionId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Transaction, {
        name: 'sellTransaction',
        keyFrom: 'sellTransactionId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_sell_transaction', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Gain.prototype, "sellTransactionId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Product, {
        name: 'product',
        keyFrom: 'productId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_product', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Gain.prototype, "productId", void 0);
Gain = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            indexes: {
                idx_is_active: { keys: { is_active: 1 }, options: { unique: false } },
                idx_created_date: { keys: { created_date: 1 }, options: { unique: false } },
                idx_last_modified_date: { keys: { last_modified_date: 1 }, options: { unique: false } },
                idx_sell_date: { keys: { sell_date: 1 }, options: { unique: false } }
            },
            postgresql: { tableName: 'gain' },
            plural: 'Gains',
            foreignKeys: {
                fkidx_gain_service_provider_account_fk_id_spa: {
                    name: 'fkidx_gain_service_provider_account_fk_id_spa',
                    foreignKey: 'fk_id_service_provider_account',
                    entityKey: 'id',
                    entity: 'ServiceProviderAccount'
                },
                fkidx_gain_instrument_fk_id_instrument: {
                    name: 'fkidx_gain_instrument_fk_id_instrument',
                    foreignKey: 'fk_id_instrument',
                    entityKey: 'id',
                    entity: 'Instrument'
                },
                fkidx_gain_currency_fk_id_currency: {
                    name: 'fkidx_gain_currency_fk_id_currency',
                    foreignKey: 'fk_id_currency',
                    entityKey: 'id',
                    entity: 'Currency'
                },
                fkidx_gain_transaction_fk_id_buy_transaction: {
                    name: 'fkidx_gain_transaction_fk_id_buy_transaction',
                    foreignKey: 'fk_id_buy_transaction',
                    entityKey: 'id',
                    entity: 'Transaction'
                },
                fkidx_gain_transaction_fk_id_sell_transaction: {
                    name: 'fkidx_gain_transaction_fk_id_sell_transaction',
                    foreignKey: 'fk_id_sell_transaction',
                    entityKey: 'id',
                    entity: 'Transaction'
                },
                fkidx_gain_transaction_fk_id_product: {
                    name: 'fkidx_gain_transaction_fk_id_product',
                    foreignKey: 'fk_id_product',
                    entityKey: 'id',
                    entity: 'Product'
                }
            },
            hiddenProperties: [
                'fk_id_service_provider_account',
                'fk_id_instrument',
                'fk_id_currency',
                'fk_id_buy_transaction',
                'fk_id_sell_transaction',
                'fk_id_product'
            ]
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Gain);
exports.Gain = Gain;
//# sourceMappingURL=gain.model.js.map