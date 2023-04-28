"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceProviderAccountReconciliationRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let ServiceProviderAccountReconciliationRepository = class ServiceProviderAccountReconciliationRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, serviceProviderRepositoryGetter) {
        super(models_1.ServiceProviderAccountReconciliation, dataSource);
        this.serviceProvider = this.createBelongsToAccessorFor('serviceProvider', serviceProviderRepositoryGetter);
        this.registerInclusionResolver('serviceProvider', this.serviceProvider.inclusionResolver);
    }
};
ServiceProviderAccountReconciliationRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('ServiceProviderRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function])
], ServiceProviderAccountReconciliationRepository);
exports.ServiceProviderAccountReconciliationRepository = ServiceProviderAccountReconciliationRepository;
//# sourceMappingURL=service-provider-account-reconciliation.repository.js.map