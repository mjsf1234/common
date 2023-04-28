import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { Account, RiskProfile, RiskProfileHistory, RiskProfileHistoryRelations } from '../../models';
import { RiskProfileRepository } from '../master-data';
import { AccountRepository } from './account.repository';
export declare class RiskProfileHistoryRepository extends BaseLocalRepository<RiskProfileHistory, typeof RiskProfileHistory.prototype.id, RiskProfileHistoryRelations> {
    readonly account: BelongsToAccessor<Account, typeof RiskProfileHistory.prototype.id>;
    readonly riskProfile: BelongsToAccessor<RiskProfile, typeof RiskProfileHistory.prototype.id>;
    constructor(dataSource: juggler.DataSource, accountRepositoryGetter: Getter<AccountRepository>, riskProfileRepositoryGetter: Getter<RiskProfileRepository>);
}
