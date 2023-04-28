"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReverseFeedReconciliationRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let ReverseFeedReconciliationRepository = class ReverseFeedReconciliationRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, reverseFeedRepositoryGetter, transactionRepositoryGetter, instrumentRepositoryGetter, serviceProviderRepositoryGetter, orderItemRepositoryGetter, transactionTypeRepositoryGetter) {
        super(models_1.ReverseFeedReconciliation, dataSource);
        this.reverseFeed = this.createBelongsToAccessorFor('reverseFeed', reverseFeedRepositoryGetter);
        this.transaction = this.createBelongsToAccessorFor('transaction', transactionRepositoryGetter);
        this.instrument = this.createBelongsToAccessorFor('instrument', instrumentRepositoryGetter);
        this.serviceProvider = this.createBelongsToAccessorFor('serviceProvider', serviceProviderRepositoryGetter);
        this.orderItem = this.createBelongsToAccessorFor('orderItem', orderItemRepositoryGetter);
        this.transactionType = this.createBelongsToAccessorFor('transactionType', transactionTypeRepositoryGetter);
        this.registerInclusionResolver('reverseFeed', this.reverseFeed.inclusionResolver);
        this.registerInclusionResolver('transaction', this.transaction.inclusionResolver);
        this.registerInclusionResolver('instrument', this.instrument.inclusionResolver);
        this.registerInclusionResolver('serviceProvider', this.serviceProvider.inclusionResolver);
        this.registerInclusionResolver('orderItem', this.orderItem.inclusionResolver);
        this.registerInclusionResolver('transactionType', this.transactionType.inclusionResolver);
    }
};
ReverseFeedReconciliationRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('ReverseFeedRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('TransactionRepository')),
    (0, tslib_1.__param)(3, repository_1.repository.getter('InstrumentRepository')),
    (0, tslib_1.__param)(4, repository_1.repository.getter('ServiceProviderRepository')),
    (0, tslib_1.__param)(5, repository_1.repository.getter('OrderItemRepository')),
    (0, tslib_1.__param)(6, repository_1.repository.getter('TransactionTypeRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function, Function, Function, Function, Function])
], ReverseFeedReconciliationRepository);
exports.ReverseFeedReconciliationRepository = ReverseFeedReconciliationRepository;
//# sourceMappingURL=reverse-feed-reconciliation.repository.js.map