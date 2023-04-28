import { BaseLocalRepository, GoalCategoryRepository } from '../../repositories';
import { BelongsToAccessor, Getter, HasManyRepositoryFactory, HasOneRepositoryFactory, juggler } from '@loopback/repository';
import { Account, Goal, GoalCategory, GoalRelations, Holding, RebalancingCheck } from '../../models';
import { AccountRepository } from '../user-management';
import { HoldingRepository, RebalancingCheckRepository } from '../transaction';
export declare class GoalRepository extends BaseLocalRepository<Goal, typeof Goal.prototype.id, GoalRelations> {
    readonly account: BelongsToAccessor<Account, typeof Goal.prototype.id>;
    readonly goalCategory: BelongsToAccessor<GoalCategory, typeof Goal.prototype.id>;
    readonly holdings: HasManyRepositoryFactory<Holding, typeof Goal.prototype.id>;
    readonly rebalancingCheck: HasOneRepositoryFactory<RebalancingCheck, typeof Goal.prototype.id>;
    constructor(dataSource: juggler.DataSource, accountRepositoryGetter: Getter<AccountRepository>, holdingRepositoryGetter: Getter<HoldingRepository>, goalCategoryRepositoryGetter: Getter<GoalCategoryRepository>, rebalancingCheckRepositoryGetter: Getter<RebalancingCheckRepository>);
}
