import {
  BaseLocalRepository,
  AccountRepository,
  GoalRepository
} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {Goal, Account, RebalancingCheck, RebalancingCheckRelations} from '../../models';

export class RebalancingCheckRepository extends BaseLocalRepository<RebalancingCheck, typeof RebalancingCheck.prototype.id, RebalancingCheckRelations> {
  public readonly account: BelongsToAccessor<Account, typeof RebalancingCheck.prototype.id>;
  public readonly goal: BelongsToAccessor<Goal, typeof RebalancingCheck.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('AccountRepository') accountRepositoryGetter: Getter<AccountRepository>,
    @repository.getter('GoalRepository') goalRepositoryGetter: Getter<GoalRepository>
  ) {
    super(RebalancingCheck, dataSource);
    this.account = this.createBelongsToAccessorFor('account', accountRepositoryGetter);
    this.goal = this.createBelongsToAccessorFor('goal', goalRepositoryGetter);

    this.registerInclusionResolver('account', this.account.inclusionResolver);
    this.registerInclusionResolver('goal', this.goal.inclusionResolver);
  }
}
