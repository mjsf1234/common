"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceProviderRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let ServiceProviderRepository = class ServiceProviderRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, rtaRepositoryGetter, bankBranchRepositoryGetter) {
        super(models_1.ServiceProvider, dataSource);
        this.rta = this.createBelongsToAccessorFor('rta', rtaRepositoryGetter);
        this.bankBranch = this.createBelongsToAccessorFor('bankBranch', bankBranchRepositoryGetter);
        this.registerInclusionResolver('rta', this.rta.inclusionResolver);
        this.registerInclusionResolver('bankBranch', this.bankBranch.inclusionResolver);
    }
};
ServiceProviderRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('RtaRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('BankBranchRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function])
], ServiceProviderRepository);
exports.ServiceProviderRepository = ServiceProviderRepository;
//# sourceMappingURL=service-provider.repository.js.map