"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsrFatcaRepository = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
const base_local_repository_1 = require("../base-local.repository");
let CsrFatcaRepository = class CsrFatcaRepository extends base_local_repository_1.BaseLocalRepository {
    constructor(dataSource, accountRepositoryGetter, userManagementAppFileRepositoryGetter, rtaRepositoryGetter) {
        super(models_1.CsrFatca, dataSource);
        this.account = this.createBelongsToAccessorFor('account', accountRepositoryGetter);
        this.userManagementAppFile = this.createBelongsToAccessorFor('userManagementAppFile', userManagementAppFileRepositoryGetter);
        this.rta = this.createBelongsToAccessorFor('rta', rtaRepositoryGetter);
        this.registerInclusionResolver('account', this.account.inclusionResolver);
        this.registerInclusionResolver('userManagementAppFile', this.userManagementAppFile.inclusionResolver);
        this.registerInclusionResolver('rta', this.rta.inclusionResolver);
    }
};
CsrFatcaRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('AccountRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('UserManagementAppFileRepository')),
    (0, tslib_1.__param)(3, repository_1.repository.getter('RtaRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function, Function])
], CsrFatcaRepository);
exports.CsrFatcaRepository = CsrFatcaRepository;
//# sourceMappingURL=csr-fatca.repository.js.map