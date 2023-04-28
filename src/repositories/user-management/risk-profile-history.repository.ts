import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {Account, RiskProfile, RiskProfileHistory, RiskProfileHistoryRelations} from '../../models';
import {RiskProfileRepository} from '../master-data';
import {AccountRepository} from './account.repository';

export class RiskProfileHistoryRepository extends BaseLocalRepository<
  RiskProfileHistory,
  typeof RiskProfileHistory.prototype.id,
  RiskProfileHistoryRelations
> {
  public readonly account: BelongsToAccessor<Account, typeof RiskProfileHistory.prototype.id>;
  public readonly riskProfile: BelongsToAccessor<RiskProfile, typeof RiskProfileHistory.prototype.id>;
  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('AccountRepository') accountRepositoryGetter: Getter<AccountRepository>,
    @repository.getter('RiskProfileRepository') riskProfileRepositoryGetter: Getter<RiskProfileRepository>
  ) {
    super(RiskProfileHistory, dataSource);
    this.account = this.createBelongsToAccessorFor('account', accountRepositoryGetter);
    this.riskProfile = this.createBelongsToAccessorFor('riskProfile', riskProfileRepositoryGetter);
    this.registerInclusionResolver('account', this.account.inclusionResolver);
    this.registerInclusionResolver('riskProfile', this.riskProfile.inclusionResolver);
  }
}
