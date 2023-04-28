"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HoldingRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let HoldingRepository = class HoldingRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, serviceProviderAccountRepositoryGetter, instrumentRepositoryGetter, currencyRepositoryGetter, goalRepositoryGetter) {
        super(models_1.Holding, dataSource);
        this.serviceProviderAccount = this.createBelongsToAccessorFor('serviceProviderAccount', serviceProviderAccountRepositoryGetter);
        this.instrument = this.createBelongsToAccessorFor('instrument', instrumentRepositoryGetter);
        this.currency = this.createBelongsToAccessorFor('currency', currencyRepositoryGetter);
        this.goal = this.createBelongsToAccessorFor('goal', goalRepositoryGetter);
        this.registerInclusionResolver('serviceProviderAccount', this.serviceProviderAccount.inclusionResolver);
        this.registerInclusionResolver('instrument', this.instrument.inclusionResolver);
        this.registerInclusionResolver('currency', this.currency.inclusionResolver);
        this.registerInclusionResolver('goal', this.goal.inclusionResolver);
    }
};
HoldingRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('ServiceProviderAccountRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('InstrumentRepository')),
    (0, tslib_1.__param)(3, repository_1.repository.getter('CurrencyRepository')),
    (0, tslib_1.__param)(4, repository_1.repository.getter('GoalRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function, Function, Function])
], HoldingRepository);
exports.HoldingRepository = HoldingRepository;
//# sourceMappingURL=holding.repository.js.map