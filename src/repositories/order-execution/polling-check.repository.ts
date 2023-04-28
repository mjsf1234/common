import {BaseLocalRepository} from '..';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {Account, PollingCheck, PollingCheckRelations} from '../../models';
import {AccountRepository} from '../user-management';

export class PollingCheckRepository extends BaseLocalRepository<PollingCheck, typeof PollingCheck.prototype.id, PollingCheckRelations> {
  public readonly account: BelongsToAccessor<Account, typeof PollingCheck.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('AccountRepository') accountRepositoryGetter: Getter<AccountRepository>
  ) {
    super(PollingCheck, dataSource);
    this.account = this.createBelongsToAccessorFor('account', accountRepositoryGetter);

    this.registerInclusionResolver('account', this.account.inclusionResolver);
  }
}
