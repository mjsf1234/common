import {
  BaseLocalRepository,
  CurrencyRepository,
  GoalRepository,
  InstrumentRepository,
  ServiceProviderAccountRepository
} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {Currency, Goal, HistoricalHolding, Holding, HoldingRelations, Instrument, ServiceProviderAccount} from '../../models';

export class HoldingRepository extends BaseLocalRepository<Holding, typeof Holding.prototype.id, HoldingRelations> {
  public readonly serviceProviderAccount: BelongsToAccessor<ServiceProviderAccount, typeof HistoricalHolding.prototype.id>;
  public readonly instrument: BelongsToAccessor<Instrument, typeof HistoricalHolding.prototype.id>;
  public readonly currency: BelongsToAccessor<Currency, typeof HistoricalHolding.prototype.id>;
  public readonly goal: BelongsToAccessor<Goal, typeof HistoricalHolding.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('ServiceProviderAccountRepository') serviceProviderAccountRepositoryGetter: Getter<ServiceProviderAccountRepository>,
    @repository.getter('InstrumentRepository') instrumentRepositoryGetter: Getter<InstrumentRepository>,
    @repository.getter('CurrencyRepository') currencyRepositoryGetter: Getter<CurrencyRepository>,
    @repository.getter('GoalRepository') goalRepositoryGetter: Getter<GoalRepository>
  ) {
    super(Holding, dataSource);
    this.serviceProviderAccount = this.createBelongsToAccessorFor('serviceProviderAccount', serviceProviderAccountRepositoryGetter);
    this.instrument = this.createBelongsToAccessorFor('instrument', instrumentRepositoryGetter);
    this.currency = this.createBelongsToAccessorFor('currency', currencyRepositoryGetter);
    this.goal = this.createBelongsToAccessorFor('goal', goalRepositoryGetter);

    this.registerInclusionResolver('serviceProviderAccount', this.serviceProviderAccount.inclusionResolver);
    this.registerInclusionResolver('instrument', this.instrument.inclusionResolver);
    this.registerInclusionResolver('currency', this.currency.inclusionResolver);
    this.registerInclusionResolver('goal', this.goal.inclusionResolver);
  }
}
