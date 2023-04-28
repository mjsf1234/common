"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RebalancingCheckRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let RebalancingCheckRepository = class RebalancingCheckRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, accountRepositoryGetter, goalRepositoryGetter) {
        super(models_1.RebalancingCheck, dataSource);
        this.account = this.createBelongsToAccessorFor('account', accountRepositoryGetter);
        this.goal = this.createBelongsToAccessorFor('goal', goalRepositoryGetter);
        this.registerInclusionResolver('account', this.account.inclusionResolver);
        this.registerInclusionResolver('goal', this.goal.inclusionResolver);
    }
};
RebalancingCheckRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('AccountRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('GoalRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function])
], RebalancingCheckRepository);
exports.RebalancingCheckRepository = RebalancingCheckRepository;
//# sourceMappingURL=rebalancing-check.repository.js.map