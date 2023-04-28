"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceProviderAccountRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let ServiceProviderAccountRepository = class ServiceProviderAccountRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, accountRepositoryGetter, serviceProviderRepositoryGetter, transactionRepositoryGetter, holdingRepositoryGetter, systematicMethodRepositoryGetter, orderItemRepositoryGetter, historicalHoldingRepositoryGetter, gainRepositoryGetter, depositDetailsRepositoryGetter, AuditTrailRepositoryGetter) {
        super(models_1.ServiceProviderAccount, dataSource);
        this.account = this.createBelongsToAccessorFor('account', accountRepositoryGetter);
        this.serviceProvider = this.createBelongsToAccessorFor('serviceProvider', serviceProviderRepositoryGetter);
        this.transactions = this.createHasManyRepositoryFactoryFor('transactions', transactionRepositoryGetter);
        this.holdings = this.createHasManyRepositoryFactoryFor('holdings', holdingRepositoryGetter);
        this.systematicMethods = this.createHasManyRepositoryFactoryFor('systematicMethods', systematicMethodRepositoryGetter);
        this.orderItems = this.createHasManyRepositoryFactoryFor('orderItems', orderItemRepositoryGetter);
        this.historicalHoldings = this.createHasManyRepositoryFactoryFor('historicalHoldings', historicalHoldingRepositoryGetter);
        this.gains = this.createHasManyRepositoryFactoryFor('gains', gainRepositoryGetter);
        this.depositDetails = this.createHasManyRepositoryFactoryFor('depositDetails', depositDetailsRepositoryGetter);
        this.auditTrail = this.createHasOneRepositoryFactoryFor('auditTrail', AuditTrailRepositoryGetter);
        this.registerInclusionResolver('account', this.account.inclusionResolver);
        this.registerInclusionResolver('serviceProvider', this.serviceProvider.inclusionResolver);
        this.registerInclusionResolver('transactions', this.transactions.inclusionResolver);
        this.registerInclusionResolver('holdings', this.holdings.inclusionResolver);
        this.registerInclusionResolver('systematicMethods', this.systematicMethods.inclusionResolver);
        this.registerInclusionResolver('orderItems', this.orderItems.inclusionResolver);
        this.registerInclusionResolver('historicalHoldings', this.historicalHoldings.inclusionResolver);
        this.registerInclusionResolver('gains', this.gains.inclusionResolver);
        this.registerInclusionResolver('depositDetails', this.depositDetails.inclusionResolver);
        this.registerInclusionResolver('auditTrail', this.auditTrail.inclusionResolver);
    }
};
ServiceProviderAccountRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('AccountRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('ServiceProviderRepository')),
    (0, tslib_1.__param)(3, repository_1.repository.getter('TransactionRepository')),
    (0, tslib_1.__param)(4, repository_1.repository.getter('HoldingRepository')),
    (0, tslib_1.__param)(5, repository_1.repository.getter('SystematicMethodRepository')),
    (0, tslib_1.__param)(6, repository_1.repository.getter('OrderItemRepository')),
    (0, tslib_1.__param)(7, repository_1.repository.getter('HistoricalHoldingRepository')),
    (0, tslib_1.__param)(8, repository_1.repository.getter('GainRepository')),
    (0, tslib_1.__param)(9, repository_1.repository.getter('DepositDetailsRepository')),
    (0, tslib_1.__param)(10, repository_1.repository.getter('AuditTrailRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function])
], ServiceProviderAccountRepository);
exports.ServiceProviderAccountRepository = ServiceProviderAccountRepository;
//# sourceMappingURL=service-provider-account.repository.js.map