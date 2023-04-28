"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
const country_model_1 = require("./country.model");
const currency_conversion_model_1 = require("./currency-conversion.model");
let Currency = class Currency extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'name', dataType: 'VARCHAR', dataLength: 100, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Currency.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'short_name', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Currency.prototype, "shortName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'rta_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Currency.prototype, "rtaCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Currency.prototype, "bosCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'nse_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Currency.prototype, "nseCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'bse_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Currency.prototype, "bseCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => country_model_1.Country, {
        name: 'country',
        keyFrom: 'countryId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_country', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Currency.prototype, "countryId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => currency_conversion_model_1.CurrencyConversion, { keyTo: 'baseCurrencyId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], Currency.prototype, "conversions", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => currency_conversion_model_1.CurrencyConversion, { keyTo: 'targetCurrencyId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], Currency.prototype, "reverseConversions", void 0);
Currency = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            indexes: {
                idx_is_active: { keys: { is_active: 1 }, options: { unique: false } },
                idx_created_date: { keys: { created_date: 1 }, options: { unique: false } },
                idx_last_modified_date: { keys: { last_modified_date: 1 }, options: { unique: false } },
                idx_currency_name: { keys: { name: 1 }, options: { unique: true, caseInsensitiveUnique: true } }
            },
            postgresql: { tableName: 'currency' },
            plural: 'Currencies',
            foreignKeys: {
                fkidx_currency_country_fk_id_country: {
                    name: 'fkidx_currency_country_fk_id_country',
                    foreignKey: 'fk_id_country',
                    entityKey: 'id',
                    entity: 'Country'
                }
            },
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Currency);
exports.Currency = Currency;
//# sourceMappingURL=currency.model.js.map