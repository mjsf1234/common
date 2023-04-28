import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, HasManyRepositoryFactory, juggler, repository} from '@loopback/repository';
import {Account, AccountReferral, AccountReferralRelations} from '../../models';
import {AccountRepository} from '../user-management';

export class AccountReferralRepository extends BaseLocalRepository<
  AccountReferral,
  typeof AccountReferral.prototype.id,
  AccountReferralRelations
> {
  public readonly account: BelongsToAccessor<Account, typeof AccountReferral.prototype.id>;

  constructor(dataSource: juggler.DataSource, @repository.getter('AccountRepository') accountRepositoryGetter: Getter<AccountRepository>) {
    super(AccountReferral, dataSource);
    this.account = this.createBelongsToAccessorFor('account', accountRepositoryGetter);

    this.registerInclusionResolver('account', this.account.inclusionResolver);
  }
}
