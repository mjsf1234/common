"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Holding = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let Holding = class Holding extends __1.BaseSQLModel {
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
], Holding.prototype, "uniqueId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: true,
        postgresql: { columnName: 'holding_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], Holding.prototype, "holdingDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'investment_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], Holding.prototype, "investmentDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        default: 0,
        postgresql: { columnName: 'quantity', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Holding.prototype, "quantity", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'average_price_per_unit', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 30, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Holding.prototype, "averagePricePerUnit", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        default: 0,
        postgresql: { columnName: 'total_invested_amount', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Holding.prototype, "totalInvestedAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'current_price_per_unit', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Holding.prototype, "currentPricePerUnit", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        default: 0,
        postgresql: { columnName: 'total_current_value', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Holding.prototype, "totalCurrentValue", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'total_commitment_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Holding.prototype, "totalCommitmentAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'total_drawdown_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Holding.prototype, "totalDrawdownAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'sellable_quantity', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Holding.prototype, "sellableQuantity", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'total_interest_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Holding.prototype, "totalInterestAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'total_return_of_capital_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Holding.prototype, "totalReturnOfCapitalAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'total_return_on_capital_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Holding.prototype, "totalReturnOnCapitalAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'dividend_reinvested', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Holding.prototype, "dividendReinvested", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'dividend_paid', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Holding.prototype, "dividendPaid", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'total_income', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Holding.prototype, "totalIncome", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'accrued_interest', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Holding.prototype, "accruedInterest", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'absolute_profit_loss', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Holding.prototype, "absoluteProfitLoss", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'percentage_profit_loss', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Holding.prototype, "percentageProfitLoss", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'xirr', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Holding.prototype, "xirr", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'unrealized_short_term_capital_gain', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Holding.prototype, "unrealizedShortTermCapitalGain", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'unrealized_long_term_capital_gain', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Holding.prototype, "unrealizedLongTermCapitalGain", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'unrealized_business_capital_gain', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Holding.prototype, "unrealizedBusinessCapitalGain", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'realized_short_term_capital_gain', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Holding.prototype, "realizedShortTermCapitalGain", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'realized_long_term_capital_gain', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 30, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Holding.prototype, "realizedLongTermCapitalGain", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'realized_business_capital_gain', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 30, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Holding.prototype, "realizedBusinessCapitalGain", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'unrealized_short_term_capital_quantity', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Holding.prototype, "unrealizedShortTermCapitalQuantity", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'unrealized_long_term_capital_quantity', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Holding.prototype, "unrealizedLongTermCapitalQuantity", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Holding.prototype, "bosCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'benchmark_total_current_value', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Holding.prototype, "benchmarkTotalCurrentValue", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'benchmark_xirr', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Holding.prototype, "benchmarkXirr", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'beginning_market_value', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Holding.prototype, "beginningMarketValue", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'beginning_market_quantity', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Holding.prototype, "beginningMarketQuantity", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'flows', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Holding.prototype, "flows", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'inflows', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Holding.prototype, "inflows", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'outflows', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Holding.prototype, "outflows", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'benchmark_flows', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Holding.prototype, "benchmarkFlows", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'benchmark_inflows', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Holding.prototype, "benchmarkInflows", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'benchmark_outflows', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Holding.prototype, "benchmarkOutflows", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'absolute_return', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Holding.prototype, "absoluteReturn", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'benchmark_absolute_return', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Holding.prototype, "benchmarkAbsoluteReturn", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'profit', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Holding.prototype, "profit", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'object',
        default: [],
        postgresql: { columnName: 'xirr_data', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], Holding.prototype, "xirrData", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'object',
        default: [],
        postgresql: { columnName: 'benchmark_xirr_data', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], Holding.prototype, "benchmarkXirrData", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'object',
        default: {},
        postgresql: { columnName: 'states', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], Holding.prototype, "states", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: true,
        default: false,
        postgresql: { columnName: 'is_zeroised', dataType: 'BOOLEAN', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], Holding.prototype, "isZeroised", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        postgresql: { columnName: 'is_sell_allowed', dataType: 'BOOLEAN', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], Holding.prototype, "isSellAllowed", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.ServiceProviderAccount, {
        name: 'serviceProviderAccount',
        keyFrom: 'serviceProviderAccountId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_service_provider_account', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Holding.prototype, "serviceProviderAccountId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Instrument, {
        name: 'instrument',
        keyFrom: 'instrumentId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_instrument', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Holding.prototype, "instrumentId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Currency, {
        name: 'currency',
        keyFrom: 'currencyId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_currency', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Holding.prototype, "currencyId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Goal, {
        name: 'goal',
        keyFrom: 'goalId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_goal', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Holding.prototype, "goalId", void 0);
Holding = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            indexes: {
                idx_is_active: { keys: { is_active: 1 }, options: { unique: false } },
                idx_created_date: { keys: { created_date: 1 }, options: { unique: false } },
                idx_last_modified_date: { keys: { last_modified_date: 1 }, options: { unique: false } },
                idx_holding_date: { keys: { holding_date: 1 }, options: { unique: false } }
            },
            postgresql: { tableName: 'holding' },
            plural: 'Holdings',
            foreignKeys: {
                fkidx_holding_service_provider_account_fk_id_spa: {
                    name: 'fkidx_holding_service_provider_account_fk_id_spa',
                    foreignKey: 'fk_id_service_provider_account',
                    entityKey: 'id',
                    entity: 'ServiceProviderAccount'
                },
                fkidx_holding_instrument_fk_id_instrument: {
                    name: 'fkidx_holding_instrument_fk_id_instrument',
                    foreignKey: 'fk_id_instrument',
                    entityKey: 'id',
                    entity: 'Instrument'
                },
                fkidx_holding_currency_fk_id_currency: {
                    name: 'fkidx_holding_currency_fk_id_currency',
                    foreignKey: 'fk_id_currency',
                    entityKey: 'id',
                    entity: 'Currency'
                },
                fkidx_holding_goal_fk_id_goal: {
                    name: 'fkidx_holding_goal_fk_id_goal',
                    foreignKey: 'fk_id_goal',
                    entityKey: 'id',
                    entity: 'Goal'
                }
            },
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Holding);
exports.Holding = Holding;
//# sourceMappingURL=holding.model.js.map