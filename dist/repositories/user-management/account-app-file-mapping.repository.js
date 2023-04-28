"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountAppFileMappingRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let AccountAppFileMappingRepository = class AccountAppFileMappingRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, accountRepositoryGetter, userManagementAppFileRepositoryGetter, AuditTrailRepositoryGetter) {
        super(models_1.AccountAppFileMapping, dataSource);
        this.account = this.createBelongsToAccessorFor('account', accountRepositoryGetter);
        this.userManagementAppFile = this.createBelongsToAccessorFor('userManagementAppFile', userManagementAppFileRepositoryGetter);
        this.auditTrail = this.createHasOneRepositoryFactoryFor('auditTrail', AuditTrailRepositoryGetter);
        this.registerInclusionResolver('account', this.account.inclusionResolver);
        this.registerInclusionResolver('userManagementAppFile', this.userManagementAppFile.inclusionResolver);
        this.registerInclusionResolver('auditTrail', this.auditTrail.inclusionResolver);
    }
};
AccountAppFileMappingRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('AccountRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('UserManagementAppFileRepository')),
    (0, tslib_1.__param)(3, repository_1.repository.getter('AuditTrailRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function, Function])
], AccountAppFileMappingRepository);
exports.AccountAppFileMappingRepository = AccountAppFileMappingRepository;
//# sourceMappingURL=account-app-file-mapping.repository.js.map