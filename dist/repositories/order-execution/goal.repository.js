"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoalRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let GoalRepository = class GoalRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, accountRepositoryGetter, holdingRepositoryGetter, goalCategoryRepositoryGetter, rebalancingCheckRepositoryGetter) {
        super(models_1.Goal, dataSource);
        this.account = this.createBelongsToAccessorFor('account', accountRepositoryGetter);
        this.goalCategory = this.createBelongsToAccessorFor('goalCategory', goalCategoryRepositoryGetter);
        this.holdings = this.createHasManyRepositoryFactoryFor('holdings', holdingRepositoryGetter);
        this.rebalancingCheck = this.createHasOneRepositoryFactoryFor('rebalancingCheck', rebalancingCheckRepositoryGetter);
        this.registerInclusionResolver('goalCategory', this.goalCategory.inclusionResolver);
        this.registerInclusionResolver('account', this.account.inclusionResolver);
        this.registerInclusionResolver('holdings', this.holdings.inclusionResolver);
        this.registerInclusionResolver('rebalancingCheck', this.rebalancingCheck.inclusionResolver);
    }
};
GoalRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('AccountRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('HoldingRepository')),
    (0, tslib_1.__param)(3, repository_1.repository.getter('GoalCategoryRepository')),
    (0, tslib_1.__param)(4, repository_1.repository.getter('RebalancingCheckRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function, Function, Function])
], GoalRepository);
exports.GoalRepository = GoalRepository;
//# sourceMappingURL=goal.repository.js.map