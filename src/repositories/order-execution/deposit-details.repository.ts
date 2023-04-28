import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {Account, Instrument, ServiceProviderAccount, DepositDetails, DepositDetailsRelations, Currency} from '../../models';
import {BaseLocalRepository} from '../base-local.repository';
import {InstrumentRepository} from '../master-data';
import {ServiceProviderAccountRepository} from '../transaction';
import {AccountRepository} from '../user-management';
import {CurrencyRepository} from '../'

export class DepositDetailsRepository extends BaseLocalRepository<
  DepositDetails,
  typeof DepositDetails.prototype.id,
  DepositDetailsRelations
> {
  public readonly instrument: BelongsToAccessor<Instrument, typeof DepositDetails.prototype.id>;
  public readonly serviceProviderAccount: BelongsToAccessor<ServiceProviderAccount, typeof DepositDetails.prototype.id>;
  public readonly account: BelongsToAccessor<Account, typeof DepositDetails.prototype.id>;
  public readonly currency: BelongsToAccessor<Currency, typeof DepositDetails.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('InstrumentRepository') instrumentRepositoryGetter: Getter<InstrumentRepository>,
    @repository.getter('ServiceProviderAccountRepository') serviceProviderAccountRepositoryGetter: Getter<ServiceProviderAccountRepository>,
    @repository.getter('AccountRepository') accountRepositoryGetter: Getter<AccountRepository>,
    @repository.getter('CurrencyRepository') currencyRepositoryGetter: Getter<CurrencyRepository>,
  ) {
    super(DepositDetails, dataSource);
    this.instrument = this.createBelongsToAccessorFor('instrument', instrumentRepositoryGetter);
    this.serviceProviderAccount = this.createBelongsToAccessorFor('serviceProviderAccount', serviceProviderAccountRepositoryGetter);

    this.account = this.createBelongsToAccessorFor('account', accountRepositoryGetter);
    this.currency = this.createBelongsToAccessorFor('currency', currencyRepositoryGetter);

    this.registerInclusionResolver('instrument', this.instrument.inclusionResolver);
    this.registerInclusionResolver('serviceProviderAccount', this.serviceProviderAccount.inclusionResolver);
    this.registerInclusionResolver('currency', this.currency.inclusionResolver);
    this.registerInclusionResolver('account', this.account.inclusionResolver);
  }
}
