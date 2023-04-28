"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let CurrencyRepository = class CurrencyRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, countryRepositoryGetter, currencyConversionRepositoryGetter) {
        super(models_1.Currency, dataSource);
        this.country = this.createBelongsToAccessorFor('country', countryRepositoryGetter);
        this.conversions = this.createHasManyRepositoryFactoryFor('conversions', currencyConversionRepositoryGetter);
        this.reverseConversions = this.createHasManyRepositoryFactoryFor('reverseConversions', currencyConversionRepositoryGetter);
        this.registerInclusionResolver('conversions', this.conversions.inclusionResolver);
        this.registerInclusionResolver('reverseConversions', this.reverseConversions.inclusionResolver);
    }
};
CurrencyRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('CountryRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('CurrencyConversionRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function])
], CurrencyRepository);
exports.CurrencyRepository = CurrencyRepository;
//# sourceMappingURL=currency.repository.js.map