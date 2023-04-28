"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionLogRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let ActionLogRepository = class ActionLogRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, executedByAppUserRepositoryGetter) {
        super(models_1.ActionLog, dataSource);
        this.executedByAppUser = this.createBelongsToAccessorFor('executedByAppUser', executedByAppUserRepositoryGetter);
        this.registerInclusionResolver('executedByAppUser', this.executedByAppUser.inclusionResolver);
    }
};
ActionLogRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('AppUserRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function])
], ActionLogRepository);
exports.ActionLogRepository = ActionLogRepository;
//# sourceMappingURL=action-log.repository.js.map