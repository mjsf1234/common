"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditTrailFileRepository = void 0;
const tslib_1 = require("tslib");
const __1 = require("..");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let AuditTrailFileRepository = class AuditTrailFileRepository extends __1.BaseLocalRepository {
    constructor(dataSource, rtaRepositoryGetter, uploadedByAppUserRepositoryGetter, uploadedFileGetter, deletedByAppUserRepositoryGetter, auditTrailRepositoryGetter, exportedFileGetter) {
        super(models_1.AuditTrailFile, dataSource);
        this.rta = this.createBelongsToAccessorFor('rta', rtaRepositoryGetter);
        this.uploadedByAppUser = this.createBelongsToAccessorFor('uploadedByAppUser', uploadedByAppUserRepositoryGetter);
        this.uploadedFile = this.createBelongsToAccessorFor('uploadedFile', uploadedFileGetter);
        this.deletedByAppUser = this.createBelongsToAccessorFor('deletedByAppUser', deletedByAppUserRepositoryGetter);
        this.auditTrail = this.createHasManyRepositoryFactoryFor('auditTrail', auditTrailRepositoryGetter);
        this.exportedFile = this.createBelongsToAccessorFor('exportedFile', exportedFileGetter);
        this.registerInclusionResolver('rta', this.rta.inclusionResolver);
        this.registerInclusionResolver('uploadedByAppUser', this.uploadedByAppUser.inclusionResolver);
        this.registerInclusionResolver('uploadedFile', this.uploadedFile.inclusionResolver);
        this.registerInclusionResolver('deletedByAppUser', this.deletedByAppUser.inclusionResolver);
        this.registerInclusionResolver('auditTrail', this.auditTrail.inclusionResolver);
        this.registerInclusionResolver('exportedFile', this.exportedFile.inclusionResolver);
    }
};
AuditTrailFileRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('RtaRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('AppUserRepository')),
    (0, tslib_1.__param)(3, repository_1.repository.getter('UserManagementAppFileRepository')),
    (0, tslib_1.__param)(4, repository_1.repository.getter('AppUserRepository')),
    (0, tslib_1.__param)(5, repository_1.repository.getter('AuditTrailRepository')),
    (0, tslib_1.__param)(6, repository_1.repository.getter('UserManagementAppFileRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function, Function, Function, Function, Function])
], AuditTrailFileRepository);
exports.AuditTrailFileRepository = AuditTrailFileRepository;
//# sourceMappingURL=audit-trail-file.repository.js.map