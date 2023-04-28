"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoalCategoryRepository = void 0;
const tslib_1 = require("tslib");
const __1 = require("..");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let GoalCategoryRepository = class GoalCategoryRepository extends __1.BaseLocalRepository {
    constructor(dataSource, goalRepositoryGetter) {
        super(models_1.GoalCategory, dataSource);
        this.goal = this.createHasOneRepositoryFactoryFor('goal', goalRepositoryGetter);
        this.registerInclusionResolver('goalCategory', this.goal.inclusionResolver);
    }
};
GoalCategoryRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('GoalRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function])
], GoalCategoryRepository);
exports.GoalCategoryRepository = GoalCategoryRepository;
//# sourceMappingURL=goal-category.repository.js.map