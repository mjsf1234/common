import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {
  AppUser,
  Holding,
  Instrument,
  RtaHolding,
  RtaHoldingReconciliation,
  RtaHoldingReconciliationRelations,
  ServiceProvider,
  ServiceProviderAccount
} from '../../models';
import {RtaHoldingRepository} from './rta-holding.repository';
import {InstrumentRepository, ServiceProviderRepository} from '../master-data';
import {ServiceProviderAccountRepository} from './service-provider-account.repository';
import {AppUserRepository} from '../user-management';
import {HoldingRepository} from './holding.repository';

export class RtaHoldingReconciliationRepository extends BaseLocalRepository<
  RtaHoldingReconciliation,
  typeof RtaHoldingReconciliation.prototype.id,
  RtaHoldingReconciliationRelations
> {
  public readonly rtaHolding: BelongsToAccessor<RtaHolding, typeof RtaHoldingReconciliation.prototype.id>;
  public readonly instrument: BelongsToAccessor<Instrument, typeof RtaHoldingReconciliation.prototype.id>;
  public readonly serviceProvider: BelongsToAccessor<ServiceProvider, typeof RtaHoldingReconciliation.prototype.id>;
  public readonly serviceProviderAccount: BelongsToAccessor<ServiceProviderAccount, typeof RtaHoldingReconciliation.prototype.id>;
  public readonly uploadedByAppUser: BelongsToAccessor<AppUser, typeof RtaHoldingReconciliation.prototype.id>;
  public readonly holding: BelongsToAccessor<Holding, typeof RtaHoldingReconciliation.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('RtaHoldingRepository') rtaHoldingRepositoryGetter: Getter<RtaHoldingRepository>,
    @repository.getter('InstrumentRepository') instrumentRepositoryGetter: Getter<InstrumentRepository>,
    @repository.getter('ServiceProviderRepository') serviceProviderRepositoryGetter: Getter<ServiceProviderRepository>,
    @repository.getter('ServiceProviderAccountRepository') serviceProviderAccountRepositoryGetter: Getter<ServiceProviderAccountRepository>,
    @repository.getter('AppUserRepository') uploadedByAppUserRepositoryGetter: Getter<AppUserRepository>,
    @repository.getter('HoldingRepository') holdingRepositoryGetter: Getter<HoldingRepository>
  ) {
    super(RtaHoldingReconciliation, dataSource);
    this.rtaHolding = this.createBelongsToAccessorFor('rtaHolding', rtaHoldingRepositoryGetter);
    this.instrument = this.createBelongsToAccessorFor('instrument', instrumentRepositoryGetter);
    this.serviceProvider = this.createBelongsToAccessorFor('serviceProvider', serviceProviderRepositoryGetter);
    this.serviceProviderAccount = this.createBelongsToAccessorFor('serviceProviderAccount', serviceProviderAccountRepositoryGetter);
    this.uploadedByAppUser = this.createBelongsToAccessorFor('uploadedByAppUser', uploadedByAppUserRepositoryGetter);
    this.holding = this.createBelongsToAccessorFor('holding', holdingRepositoryGetter);

    this.registerInclusionResolver('rtaHolding', this.rtaHolding.inclusionResolver);
    this.registerInclusionResolver('instrument', this.instrument.inclusionResolver);
    this.registerInclusionResolver('serviceProvider', this.serviceProvider.inclusionResolver);
    this.registerInclusionResolver('serviceProviderAccount', this.serviceProviderAccount.inclusionResolver);
    this.registerInclusionResolver('uploadedByAppUser', this.uploadedByAppUser.inclusionResolver);
    this.registerInclusionResolver('holding', this.holding.inclusionResolver);
  }
}
