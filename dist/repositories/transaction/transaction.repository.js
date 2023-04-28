"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let TransactionRepository = class TransactionRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, orderItemRepositoryGetter, instrumentRepositoryGetter, secondaryInstrumentRepositoryGetter, accountRepositoryGetter, serviceProviderAccountRepositoryGetter, currencyRepositoryGetter, transactionTypeRepositoryGetter, goalRepositoryGetter) {
        super(models_1.Transaction, dataSource);
        this.orderItem = this.createBelongsToAccessorFor('orderItem', orderItemRepositoryGetter);
        this.instrument = this.createBelongsToAccessorFor('instrument', instrumentRepositoryGetter);
        this.secondaryInstrument = this.createBelongsToAccessorFor('secondaryInstrument', secondaryInstrumentRepositoryGetter);
        this.account = this.createBelongsToAccessorFor('account', accountRepositoryGetter);
        this.serviceProviderAccount = this.createBelongsToAccessorFor('serviceProviderAccount', serviceProviderAccountRepositoryGetter);
        this.currency = this.createBelongsToAccessorFor('currency', currencyRepositoryGetter);
        this.transactionType = this.createBelongsToAccessorFor('transactionType', transactionTypeRepositoryGetter);
        this.goal = this.createBelongsToAccessorFor('goal', goalRepositoryGetter);
        this.registerInclusionResolver('orderItem', this.orderItem.inclusionResolver);
        this.registerInclusionResolver('instrument', this.instrument.inclusionResolver);
        this.registerInclusionResolver('secondaryInstrument', this.secondaryInstrument.inclusionResolver);
        this.registerInclusionResolver('account', this.account.inclusionResolver);
        this.registerInclusionResolver('serviceProviderAccount', this.serviceProviderAccount.inclusionResolver);
        this.registerInclusionResolver('currency', this.currency.inclusionResolver);
        this.registerInclusionResolver('transactionType', this.transactionType.inclusionResolver);
        this.registerInclusionResolver('goal', this.goal.inclusionResolver);
    }
};
TransactionRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('OrderItemRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('InstrumentRepository')),
    (0, tslib_1.__param)(3, repository_1.repository.getter('InstrumentRepository')),
    (0, tslib_1.__param)(4, repository_1.repository.getter('AccountRepository')),
    (0, tslib_1.__param)(5, repository_1.repository.getter('ServiceProviderAccountRepository')),
    (0, tslib_1.__param)(6, repository_1.repository.getter('CurrencyRepository')),
    (0, tslib_1.__param)(7, repository_1.repository.getter('TransactionTypeRepository')),
    (0, tslib_1.__param)(8, repository_1.repository.getter('GoalRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function, Function, Function, Function, Function, Function, Function])
], TransactionRepository);
exports.TransactionRepository = TransactionRepository;
//# sourceMappingURL=transaction.repository.js.map