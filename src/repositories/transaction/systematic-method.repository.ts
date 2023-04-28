import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {
  Account,
  AppUser,
  Currency,
  Goal,
  Instrument,
  Mandate,
  ServiceProviderAccount,
  SystematicMethod,
  SystematicMethodRelations,
  OrderItem,
  SystematicMethodStatusHistory
} from '../../models';
import {AccountRepository, MandateRepository} from '../user-management';
import {ServiceProviderAccountRepository} from './service-provider-account.repository';
import {CurrencyRepository, InstrumentRepository} from '../master-data';
import {GoalRepository, OrderItemRepository} from '../order-execution';
import { SystematicMethodStatusHistoryRepository } from '.';

export class SystematicMethodRepository extends BaseLocalRepository<
  SystematicMethod,
  typeof SystematicMethod.prototype.id,
  SystematicMethodRelations
> {
  public readonly account: BelongsToAccessor<Account, typeof SystematicMethod.prototype.id>;
  public readonly mandate: BelongsToAccessor<Mandate, typeof SystematicMethod.prototype.id>;
  public readonly serviceProviderAccount: BelongsToAccessor<ServiceProviderAccount, typeof SystematicMethod.prototype.id>;
  public readonly currency: BelongsToAccessor<Currency, typeof SystematicMethod.prototype.id>;
  public readonly instrument: BelongsToAccessor<Instrument, typeof SystematicMethod.prototype.id>;
  public readonly toInstrument: BelongsToAccessor<Instrument, typeof SystematicMethod.prototype.id>;
  public readonly goal: BelongsToAccessor<Goal, typeof SystematicMethod.prototype.id>;
  public readonly orderItems: HasManyRepositoryFactory<OrderItem, typeof SystematicMethod.prototype.id>;
  public readonly statusHistories: HasManyRepositoryFactory<SystematicMethodStatusHistory, typeof SystematicMethod.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('AccountRepository') accountRepositoryGetter: Getter<AccountRepository>,
    @repository.getter('MandateRepository') mandateRepositoryGetter: Getter<MandateRepository>,
    @repository.getter('ServiceProviderAccountRepository') serviceProviderAccountRepositoryGetter: Getter<ServiceProviderAccountRepository>,
    @repository.getter('CurrencyRepository') currencyRepositoryGetter: Getter<CurrencyRepository>,
    @repository.getter('InstrumentRepository') instrumentRepositoryGetter: Getter<InstrumentRepository>,
    @repository.getter('InstrumentRepository') toInstrumentRepositoryGetter: Getter<InstrumentRepository>,
    @repository.getter('GoalRepository') goalRepositoryGetter: Getter<GoalRepository>,
    @repository.getter('OrderItemRepository') orderItemRepositoryGetter: Getter<OrderItemRepository>,
    @repository.getter('SystematicMethodStatusHistoryRepository') systematicMethodStatusHistoryRepositoryGetter: Getter<SystematicMethodStatusHistoryRepository>
  ) {
    super(SystematicMethod, dataSource);
    this.account = this.createBelongsToAccessorFor('account', accountRepositoryGetter);
    this.mandate = this.createBelongsToAccessorFor('mandate', mandateRepositoryGetter);
    this.serviceProviderAccount = this.createBelongsToAccessorFor('serviceProviderAccount', serviceProviderAccountRepositoryGetter);
    this.currency = this.createBelongsToAccessorFor('currency', currencyRepositoryGetter);
    this.instrument = this.createBelongsToAccessorFor('instrument', instrumentRepositoryGetter);
    this.toInstrument = this.createBelongsToAccessorFor('toInstrument', toInstrumentRepositoryGetter);
    this.goal = this.createBelongsToAccessorFor('goal', goalRepositoryGetter);
    this.orderItems = this.createHasManyRepositoryFactoryFor('orderItems', orderItemRepositoryGetter);
    this.statusHistories = this.createHasManyRepositoryFactoryFor('statusHistories', systematicMethodStatusHistoryRepositoryGetter);


    this.registerInclusionResolver('account', this.account.inclusionResolver);
    this.registerInclusionResolver('mandate', this.mandate.inclusionResolver);
    this.registerInclusionResolver('serviceProviderAccount', this.serviceProviderAccount.inclusionResolver);
    this.registerInclusionResolver('currency', this.currency.inclusionResolver);
    this.registerInclusionResolver('instrument', this.instrument.inclusionResolver);
    this.registerInclusionResolver('toInstrument', this.toInstrument.inclusionResolver);
    this.registerInclusionResolver('goal', this.goal.inclusionResolver);
    this.registerInclusionResolver('orderItems', this.orderItems.inclusionResolver);
    this.registerInclusionResolver('statusHistories', this.statusHistories.inclusionResolver);
  }
}
