"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditLogRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let AuditLogRepository = class AuditLogRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, appUserRepositoryGetter) {
        super(models_1.AuditLog, dataSource);
        this.changedByAppUser = this.createBelongsToAccessorFor('changedByAppUser', appUserRepositoryGetter);
        this.registerInclusionResolver('changedByAppUser', this.changedByAppUser.inclusionResolver);
    }
};
AuditLogRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('AppUserRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function])
], AuditLogRepository);
exports.AuditLogRepository = AuditLogRepository;
//# sourceMappingURL=audit-log.repository.js.map