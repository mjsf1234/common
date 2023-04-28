"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppUserRoleMappingRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let AppUserRoleMappingRepository = class AppUserRoleMappingRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, appUserRepositoryGetter, appRoleRepositoryGetter) {
        super(models_1.AppUserRoleMapping, dataSource);
        this.appUser = this.createBelongsToAccessorFor('appUser', appUserRepositoryGetter);
        this.appRole = this.createBelongsToAccessorFor('appRole', appRoleRepositoryGetter);
        this.registerInclusionResolver('appUser', this.appUser.inclusionResolver);
        this.registerInclusionResolver('appRole', this.appRole.inclusionResolver);
    }
};
AppUserRoleMappingRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('AppUserRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('AppRoleRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function])
], AppUserRoleMappingRepository);
exports.AppUserRoleMappingRepository = AppUserRoleMappingRepository;
//# sourceMappingURL=app-user-role-mapping.repository.js.map