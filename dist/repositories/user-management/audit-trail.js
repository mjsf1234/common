"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditTrailRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let AuditTrailRepository = class AuditTrailRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, accountAppFileMappingRepositoryGetter, serviceProviderAccountRepositoryGetter, auditTrailFileRepositoryGetter) {
        super(models_1.AuditTrail, dataSource);
        this.accountAppFileMapping = this.createBelongsToAccessorFor('accountAppFileMapping', accountAppFileMappingRepositoryGetter);
        this.registerInclusionResolver('accountAppFileMapping', this.accountAppFileMapping.inclusionResolver);
        this.serviceProviderAccount = this.createBelongsToAccessorFor('serviceProviderAccount', serviceProviderAccountRepositoryGetter);
        this.registerInclusionResolver('serviceProviderAccount', this.serviceProviderAccount.inclusionResolver);
        this.auditTrailFile = this.createBelongsToAccessorFor('auditTrailFile', auditTrailFileRepositoryGetter);
        this.registerInclusionResolver('auditTrailFile', this.auditTrailFile.inclusionResolver);
    }
};
AuditTrailRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('AccountAppFileMappingRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('ServiceProviderAccountRepository')),
    (0, tslib_1.__param)(3, repository_1.repository.getter('AuditTrailFileRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function, Function])
], AuditTrailRepository);
exports.AuditTrailRepository = AuditTrailRepository;
//# sourceMappingURL=audit-trail.js.map