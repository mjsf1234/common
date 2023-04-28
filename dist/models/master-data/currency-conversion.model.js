"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyConversion = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
const currency_model_1 = require("./currency.model");
let CurrencyConversion = class CurrencyConversion extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        postgresql: { columnName: 'rate', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CurrencyConversion.prototype, "rate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'currency_return_rate', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CurrencyConversion.prototype, "currencyReturnRatePerDay", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'currency_return_rate_per_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CurrencyConversion.prototype, "currencyReturnRatePerYear", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: true,
        postgresql: { columnName: 'rate_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], CurrencyConversion.prototype, "rateDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'daily_return', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CurrencyConversion.prototype, "dailyReturn", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => currency_model_1.Currency, {
        name: 'targetCurrency',
        keyFrom: 'targetCurrencyId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_target_currency', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CurrencyConversion.prototype, "targetCurrencyId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => currency_model_1.Currency, {
        name: 'baseCurrency',
        keyFrom: 'baseCurrencyId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_base_currency', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CurrencyConversion.prototype, "baseCurrencyId", void 0);
CurrencyConversion = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'currency_conversion' },
            plural: 'CurrencyConversions',
            foreignKeys: {
                fkidx_currency_conversion_currency_fk_id_base_currency: {
                    name: 'fkidx_currency_conversion_currency_fk_id_base_currency',
                    foreignKey: 'fk_id_base_currency',
                    entityKey: 'id',
                    entity: 'Currency'
                },
                fkidx_currency_conversion_currency_fk_id_target_currency: {
                    name: 'fkidx_currency_conversion_currency_fk_id_target_currency',
                    foreignKey: 'fk_id_target_currency',
                    entityKey: 'id',
                    entity: 'Currency'
                }
            },
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], CurrencyConversion);
exports.CurrencyConversion = CurrencyConversion;
//# sourceMappingURL=currency-conversion.model.js.map