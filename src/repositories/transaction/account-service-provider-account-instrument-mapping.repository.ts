import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {
  Account,
  AccountServiceProviderAccountInstrumentMapping,
  AccountServiceProviderAccountInstrumentMappingRelations,
  Instrument,
  ServiceProviderAccount
} from '../../models';
import {AccountRepository} from '../user-management';
import {ServiceProviderAccountRepository} from './service-provider-account.repository';
import {InstrumentRepository} from '../master-data';

export class AccountServiceProviderAccountInstrumentMappingRepository extends BaseLocalRepository<
  AccountServiceProviderAccountInstrumentMapping,
  typeof AccountServiceProviderAccountInstrumentMapping.prototype.id,
  AccountServiceProviderAccountInstrumentMappingRelations
> {
  public readonly account: BelongsToAccessor<Account, typeof AccountServiceProviderAccountInstrumentMapping.prototype.id>;
  public readonly serviceProviderAccount: BelongsToAccessor<
    ServiceProviderAccount,
    typeof AccountServiceProviderAccountInstrumentMapping.prototype.id
  >;
  public readonly instrument: BelongsToAccessor<Instrument, typeof AccountServiceProviderAccountInstrumentMapping.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('AccountRepository') accountRepositoryGetter: Getter<AccountRepository>,
    @repository.getter('ServiceProviderAccountRepository') serviceProviderAccountRepositoryGetter: Getter<ServiceProviderAccountRepository>,
    @repository.getter('InstrumentRepository') instrumentRepositoryGetter: Getter<InstrumentRepository>
  ) {
    super(AccountServiceProviderAccountInstrumentMapping, dataSource);
    this.account = this.createBelongsToAccessorFor('account', accountRepositoryGetter);
    this.serviceProviderAccount = this.createBelongsToAccessorFor('serviceProviderAccount', serviceProviderAccountRepositoryGetter);
    this.instrument = this.createBelongsToAccessorFor('instrument', instrumentRepositoryGetter);

    this.registerInclusionResolver('account', this.account.inclusionResolver);
    this.registerInclusionResolver('serviceProviderAccount', this.serviceProviderAccount.inclusionResolver);
    this.registerInclusionResolver('instrument', this.instrument.inclusionResolver);
  }
}
