"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GainRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let GainRepository = class GainRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, serviceProviderAccountRepositoryGetter, instrumentRepositoryGetter, currencyRepositoryGetter, buyTransactionRepositoryGetter, sellTransactionRepositoryGetter, productRepositoryGetter) {
        super(models_1.Gain, dataSource);
        this.serviceProviderAccount = this.createBelongsToAccessorFor('serviceProviderAccount', serviceProviderAccountRepositoryGetter);
        this.instrument = this.createBelongsToAccessorFor('instrument', instrumentRepositoryGetter);
        this.currency = this.createBelongsToAccessorFor('currency', currencyRepositoryGetter);
        this.buyTransaction = this.createBelongsToAccessorFor('buyTransaction', buyTransactionRepositoryGetter);
        this.sellTransaction = this.createBelongsToAccessorFor('sellTransaction', sellTransactionRepositoryGetter);
        this.product = this.createBelongsToAccessorFor('product', productRepositoryGetter);
        this.registerInclusionResolver('serviceProviderAccount', this.serviceProviderAccount.inclusionResolver);
        this.registerInclusionResolver('instrument', this.instrument.inclusionResolver);
        this.registerInclusionResolver('currency', this.currency.inclusionResolver);
        this.registerInclusionResolver('buyTransaction', this.buyTransaction.inclusionResolver);
        this.registerInclusionResolver('sellTransaction', this.sellTransaction.inclusionResolver);
        this.registerInclusionResolver('product', this.product.inclusionResolver);
    }
};
GainRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('ServiceProviderAccountRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('InstrumentRepository')),
    (0, tslib_1.__param)(3, repository_1.repository.getter('CurrencyRepository')),
    (0, tslib_1.__param)(4, repository_1.repository.getter('TransactionRepository')),
    (0, tslib_1.__param)(5, repository_1.repository.getter('TransactionRepository')),
    (0, tslib_1.__param)(6, repository_1.repository.getter('ProductRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function, Function, Function, Function, Function])
], GainRepository);
exports.GainRepository = GainRepository;
//# sourceMappingURL=gain.repository.js.map