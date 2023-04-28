"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyConversionRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let CurrencyConversionRepository = class CurrencyConversionRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, targetCurrencyRepositoryGetter, baseCurrencyRepositoryGetter) {
        super(models_1.CurrencyConversion, dataSource);
        this.targetCurrency = this.createBelongsToAccessorFor('targetCurrency', targetCurrencyRepositoryGetter);
        this.baseCurrency = this.createBelongsToAccessorFor('baseCurrency', baseCurrencyRepositoryGetter);
        this.registerInclusionResolver('targetCurrency', this.targetCurrency.inclusionResolver);
        this.registerInclusionResolver('baseCurrency', this.baseCurrency.inclusionResolver);
    }
};
CurrencyConversionRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('CurrencyRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('CurrencyRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function])
], CurrencyConversionRepository);
exports.CurrencyConversionRepository = CurrencyConversionRepository;
//# sourceMappingURL=currency-conversion.repository.js.map