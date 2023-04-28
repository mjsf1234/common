"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FamilyRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let FamilyRepository = class FamilyRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, groupRepositoryGetter, appUserRepositoryGetter) {
        super(models_1.Family, dataSource);
        this.group = this.createBelongsToAccessorFor('group', groupRepositoryGetter);
        this.appUsers = this.createHasManyRepositoryFactoryFor('appUsers', appUserRepositoryGetter);
        this.registerInclusionResolver('group', this.group.inclusionResolver);
        this.registerInclusionResolver('appUsers', this.appUsers.inclusionResolver);
    }
};
FamilyRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('GroupRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('AppUserRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function])
], FamilyRepository);
exports.FamilyRepository = FamilyRepository;
//# sourceMappingURL=family.repository.js.map