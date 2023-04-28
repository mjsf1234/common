"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityLogRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let ActivityLogRepository = class ActivityLogRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, appUserRepositoryGetter) {
        super(models_1.ActivityLog, dataSource);
        this.appUser = this.createBelongsToAccessorFor('appUser', appUserRepositoryGetter);
        this.registerInclusionResolver('appUser', this.appUser.inclusionResolver);
    }
};
ActivityLogRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('AppUserRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function])
], ActivityLogRepository);
exports.ActivityLogRepository = ActivityLogRepository;
//# sourceMappingURL=activity-log.repository.js.map