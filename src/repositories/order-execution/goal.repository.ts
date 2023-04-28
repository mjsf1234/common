import {BaseLocalRepository, GoalCategoryRepository} from '../../repositories';
import {BelongsToAccessor, Getter, HasManyRepositoryFactory, HasOneRepositoryFactory, juggler, repository} from '@loopback/repository';
import {Account, Goal, GoalCategory, GoalRelations, Holding, RebalancingCheck} from '../../models';
import {AccountRepository} from '../user-management';
import {HoldingRepository, RebalancingCheckRepository} from '../transaction';

export class GoalRepository extends BaseLocalRepository<Goal, typeof Goal.prototype.id, GoalRelations> {
  public readonly account: BelongsToAccessor<Account, typeof Goal.prototype.id>;
  public readonly goalCategory: BelongsToAccessor<GoalCategory, typeof Goal.prototype.id>;
  public readonly holdings: HasManyRepositoryFactory<Holding, typeof Goal.prototype.id>;
  public readonly rebalancingCheck: HasOneRepositoryFactory<RebalancingCheck, typeof Goal.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('AccountRepository') accountRepositoryGetter: Getter<AccountRepository>,
    @repository.getter('HoldingRepository') holdingRepositoryGetter: Getter<HoldingRepository>,
    @repository.getter('GoalCategoryRepository') goalCategoryRepositoryGetter: Getter<GoalCategoryRepository>,
    @repository.getter('RebalancingCheckRepository') rebalancingCheckRepositoryGetter: Getter<RebalancingCheckRepository>,
  ) {
    super(Goal, dataSource);
    this.account = this.createBelongsToAccessorFor('account', accountRepositoryGetter);
    this.goalCategory = this.createBelongsToAccessorFor('goalCategory', goalCategoryRepositoryGetter);
    this.holdings = this.createHasManyRepositoryFactoryFor('holdings', holdingRepositoryGetter);
    this.rebalancingCheck = this.createHasOneRepositoryFactoryFor('rebalancingCheck', rebalancingCheckRepositoryGetter);

    this.registerInclusionResolver('goalCategory', this.goalCategory.inclusionResolver);
    this.registerInclusionResolver('account', this.account.inclusionResolver);
    this.registerInclusionResolver('holdings', this.holdings.inclusionResolver);
    this.registerInclusionResolver('rebalancingCheck', this.rebalancingCheck.inclusionResolver);
  }
}
