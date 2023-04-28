import { BaseLocalRepository, AccountRepository, GoalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { Goal, Account, RebalancingCheck, RebalancingCheckRelations } from '../../models';
export declare class RebalancingCheckRepository extends BaseLocalRepository<RebalancingCheck, typeof RebalancingCheck.prototype.id, RebalancingCheckRelations> {
    readonly account: BelongsToAccessor<Account, typeof RebalancingCheck.prototype.id>;
    readonly goal: BelongsToAccessor<Goal, typeof RebalancingCheck.prototype.id>;
    constructor(dataSource: juggler.DataSource, accountRepositoryGetter: Getter<AccountRepository>, goalRepositoryGetter: Getter<GoalRepository>);
}
