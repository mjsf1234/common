"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRolePreferencesRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let UserRolePreferencesRepository = class UserRolePreferencesRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, appUserRoleMappingRepositoryGetter) {
        super(models_1.UserRolePreferences, dataSource);
        this.appUserRoleMapping = this.createBelongsToAccessorFor('appUserRoleMapping', appUserRoleMappingRepositoryGetter);
        this.registerInclusionResolver('appUserRoleMapping', this.appUserRoleMapping.inclusionResolver);
    }
};
UserRolePreferencesRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('AppUserRoleMappingRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function])
], UserRolePreferencesRepository);
exports.UserRolePreferencesRepository = UserRolePreferencesRepository;
//# sourceMappingURL=user-role-preferences.repository.js.map