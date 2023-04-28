"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let GroupRepository = class GroupRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, familyRepositoryGetter) {
        super(models_1.Group, dataSource);
        this.families = this.createHasManyRepositoryFactoryFor('families', familyRepositoryGetter);
        this.registerInclusionResolver('families', this.families.inclusionResolver);
    }
};
GroupRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('FamilyRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function])
], GroupRepository);
exports.GroupRepository = GroupRepository;
//# sourceMappingURL=group.repository.js.map