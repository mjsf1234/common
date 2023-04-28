"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FamilyMappingRepository = void 0;
const tslib_1 = require("tslib");
const __1 = require("..");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let FamilyMappingRepository = class FamilyMappingRepository extends __1.BaseLocalRepository {
    constructor(dataSource, parentAppUserRepositoryGetter, childAppUserRepositoryGetter) {
        super(models_1.FamilyMapping, dataSource);
        this.parentAppUser = this.createBelongsToAccessorFor('parentAppUser', parentAppUserRepositoryGetter);
        this.childAppUser = this.createBelongsToAccessorFor('childAppUser', childAppUserRepositoryGetter);
        this.registerInclusionResolver('parentAppUser', this.parentAppUser.inclusionResolver);
        this.registerInclusionResolver('childAppUser', this.childAppUser.inclusionResolver);
    }
};
FamilyMappingRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('AppUserRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('AppUserRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function])
], FamilyMappingRepository);
exports.FamilyMappingRepository = FamilyMappingRepository;
//# sourceMappingURL=family-mapping.repository.js.map