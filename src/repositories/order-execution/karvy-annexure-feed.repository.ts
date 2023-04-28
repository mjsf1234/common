import {BaseLocalRepository} from '..';
import {BelongsToAccessor, Getter, HasManyRepositoryFactory, juggler, repository} from '@loopback/repository';
import {Account, KarvyAnnexureFeed, KarvyAnnexureFeedRelations} from '../../models';
import {AccountRepository} from '../user-management';

export class KarvyAnnexureFeedRepository extends BaseLocalRepository<KarvyAnnexureFeed, typeof KarvyAnnexureFeed.prototype.id, KarvyAnnexureFeedRelations> {
  public readonly account: BelongsToAccessor<Account, typeof KarvyAnnexureFeed.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('AccountRepository') accountRepositoryGetter: Getter<AccountRepository>
  ) {
    super(KarvyAnnexureFeed, dataSource);
    this.account = this.createBelongsToAccessorFor('account', accountRepositoryGetter);
    this.registerInclusionResolver('account', this.account.inclusionResolver);
  }
}
