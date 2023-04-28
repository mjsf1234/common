"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystematicMethodRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let SystematicMethodRepository = class SystematicMethodRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, accountRepositoryGetter, mandateRepositoryGetter, serviceProviderAccountRepositoryGetter, currencyRepositoryGetter, instrumentRepositoryGetter, toInstrumentRepositoryGetter, goalRepositoryGetter, orderItemRepositoryGetter, systematicMethodStatusHistoryRepositoryGetter) {
        super(models_1.SystematicMethod, dataSource);
        this.account = this.createBelongsToAccessorFor('account', accountRepositoryGetter);
        this.mandate = this.createBelongsToAccessorFor('mandate', mandateRepositoryGetter);
        this.serviceProviderAccount = this.createBelongsToAccessorFor('serviceProviderAccount', serviceProviderAccountRepositoryGetter);
        this.currency = this.createBelongsToAccessorFor('currency', currencyRepositoryGetter);
        this.instrument = this.createBelongsToAccessorFor('instrument', instrumentRepositoryGetter);
        this.toInstrument = this.createBelongsToAccessorFor('toInstrument', toInstrumentRepositoryGetter);
        this.goal = this.createBelongsToAccessorFor('goal', goalRepositoryGetter);
        this.orderItems = this.createHasManyRepositoryFactoryFor('orderItems', orderItemRepositoryGetter);
        this.statusHistories = this.createHasManyRepositoryFactoryFor('statusHistories', systematicMethodStatusHistoryRepositoryGetter);
        this.registerInclusionResolver('account', this.account.inclusionResolver);
        this.registerInclusionResolver('mandate', this.mandate.inclusionResolver);
        this.registerInclusionResolver('serviceProviderAccount', this.serviceProviderAccount.inclusionResolver);
        this.registerInclusionResolver('currency', this.currency.inclusionResolver);
        this.registerInclusionResolver('instrument', this.instrument.inclusionResolver);
        this.registerInclusionResolver('toInstrument', this.toInstrument.inclusionResolver);
        this.registerInclusionResolver('goal', this.goal.inclusionResolver);
        this.registerInclusionResolver('orderItems', this.orderItems.inclusionResolver);
        this.registerInclusionResolver('statusHistories', this.statusHistories.inclusionResolver);
    }
};
SystematicMethodRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('AccountRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('MandateRepository')),
    (0, tslib_1.__param)(3, repository_1.repository.getter('ServiceProviderAccountRepository')),
    (0, tslib_1.__param)(4, repository_1.repository.getter('CurrencyRepository')),
    (0, tslib_1.__param)(5, repository_1.repository.getter('InstrumentRepository')),
    (0, tslib_1.__param)(6, repository_1.repository.getter('InstrumentRepository')),
    (0, tslib_1.__param)(7, repository_1.repository.getter('GoalRepository')),
    (0, tslib_1.__param)(8, repository_1.repository.getter('OrderItemRepository')),
    (0, tslib_1.__param)(9, repository_1.repository.getter('SystematicMethodStatusHistoryRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function, Function, Function, Function, Function, Function, Function, Function])
], SystematicMethodRepository);
exports.SystematicMethodRepository = SystematicMethodRepository;
//# sourceMappingURL=systematic-method.repository.js.map