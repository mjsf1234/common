"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RtaHoldingReconciliationRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let RtaHoldingReconciliationRepository = class RtaHoldingReconciliationRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, rtaHoldingRepositoryGetter, instrumentRepositoryGetter, serviceProviderRepositoryGetter, serviceProviderAccountRepositoryGetter, uploadedByAppUserRepositoryGetter, holdingRepositoryGetter) {
        super(models_1.RtaHoldingReconciliation, dataSource);
        this.rtaHolding = this.createBelongsToAccessorFor('rtaHolding', rtaHoldingRepositoryGetter);
        this.instrument = this.createBelongsToAccessorFor('instrument', instrumentRepositoryGetter);
        this.serviceProvider = this.createBelongsToAccessorFor('serviceProvider', serviceProviderRepositoryGetter);
        this.serviceProviderAccount = this.createBelongsToAccessorFor('serviceProviderAccount', serviceProviderAccountRepositoryGetter);
        this.uploadedByAppUser = this.createBelongsToAccessorFor('uploadedByAppUser', uploadedByAppUserRepositoryGetter);
        this.holding = this.createBelongsToAccessorFor('holding', holdingRepositoryGetter);
        this.registerInclusionResolver('rtaHolding', this.rtaHolding.inclusionResolver);
        this.registerInclusionResolver('instrument', this.instrument.inclusionResolver);
        this.registerInclusionResolver('serviceProvider', this.serviceProvider.inclusionResolver);
        this.registerInclusionResolver('serviceProviderAccount', this.serviceProviderAccount.inclusionResolver);
        this.registerInclusionResolver('uploadedByAppUser', this.uploadedByAppUser.inclusionResolver);
        this.registerInclusionResolver('holding', this.holding.inclusionResolver);
    }
};
RtaHoldingReconciliationRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('RtaHoldingRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('InstrumentRepository')),
    (0, tslib_1.__param)(3, repository_1.repository.getter('ServiceProviderRepository')),
    (0, tslib_1.__param)(4, repository_1.repository.getter('ServiceProviderAccountRepository')),
    (0, tslib_1.__param)(5, repository_1.repository.getter('AppUserRepository')),
    (0, tslib_1.__param)(6, repository_1.repository.getter('HoldingRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function, Function, Function, Function, Function])
], RtaHoldingReconciliationRepository);
exports.RtaHoldingReconciliationRepository = RtaHoldingReconciliationRepository;
//# sourceMappingURL=rta-holding-reconciliation.repository.js.map