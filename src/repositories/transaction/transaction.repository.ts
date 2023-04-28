import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {
  Account,
  AppUser,
  Currency,
  Goal,
  Instrument,
  OrderItem,
  ServiceProviderAccount,
  Transaction,
  TransactionRelations,
  TransactionType
} from '../../models';
import {GoalRepository, OrderItemRepository} from '../order-execution';
import {CurrencyRepository, InstrumentRepository, TransactionTypeRepository} from '../master-data';
import {AccountRepository} from '../user-management';
import {ServiceProviderAccountRepository} from './service-provider-account.repository';

export class TransactionRepository extends BaseLocalRepository<Transaction, typeof Transaction.prototype.id, TransactionRelations> {
  public readonly orderItem: BelongsToAccessor<OrderItem, typeof Transaction.prototype.id>;
  public readonly instrument: BelongsToAccessor<Instrument, typeof Transaction.prototype.id>;
  public readonly secondaryInstrument: BelongsToAccessor<Instrument, typeof Transaction.prototype.id>;
  public readonly executedByAppUser: BelongsToAccessor<AppUser, typeof Transaction.prototype.id>;
  public readonly account: BelongsToAccessor<Account, typeof Transaction.prototype.id>;
  public readonly serviceProviderAccount: BelongsToAccessor<ServiceProviderAccount, typeof Transaction.prototype.id>;
  public readonly currency: BelongsToAccessor<Currency, typeof Transaction.prototype.id>;
  public readonly transactionType: BelongsToAccessor<TransactionType, typeof Transaction.prototype.id>;
  public readonly goal: BelongsToAccessor<Goal, typeof Transaction.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('OrderItemRepository') orderItemRepositoryGetter: Getter<OrderItemRepository>,
    @repository.getter('InstrumentRepository') instrumentRepositoryGetter: Getter<InstrumentRepository>,
    @repository.getter('InstrumentRepository') secondaryInstrumentRepositoryGetter: Getter<InstrumentRepository>,
    @repository.getter('AccountRepository') accountRepositoryGetter: Getter<AccountRepository>,
    @repository.getter('ServiceProviderAccountRepository') serviceProviderAccountRepositoryGetter: Getter<ServiceProviderAccountRepository>,
    @repository.getter('CurrencyRepository') currencyRepositoryGetter: Getter<CurrencyRepository>,
    @repository.getter('TransactionTypeRepository') transactionTypeRepositoryGetter: Getter<TransactionTypeRepository>,
    @repository.getter('GoalRepository') goalRepositoryGetter: Getter<GoalRepository>
  ) {
    super(Transaction, dataSource);
    this.orderItem = this.createBelongsToAccessorFor('orderItem', orderItemRepositoryGetter);
    this.instrument = this.createBelongsToAccessorFor('instrument', instrumentRepositoryGetter);
    this.secondaryInstrument = this.createBelongsToAccessorFor('secondaryInstrument', secondaryInstrumentRepositoryGetter);
    this.account = this.createBelongsToAccessorFor('account', accountRepositoryGetter);
    this.serviceProviderAccount = this.createBelongsToAccessorFor('serviceProviderAccount', serviceProviderAccountRepositoryGetter);
    this.currency = this.createBelongsToAccessorFor('currency', currencyRepositoryGetter);
    this.transactionType = this.createBelongsToAccessorFor('transactionType', transactionTypeRepositoryGetter);
    this.goal = this.createBelongsToAccessorFor('goal', goalRepositoryGetter);

    this.registerInclusionResolver('orderItem', this.orderItem.inclusionResolver);
    this.registerInclusionResolver('instrument', this.instrument.inclusionResolver);
    this.registerInclusionResolver('secondaryInstrument', this.secondaryInstrument.inclusionResolver);
    this.registerInclusionResolver('account', this.account.inclusionResolver);
    this.registerInclusionResolver('serviceProviderAccount', this.serviceProviderAccount.inclusionResolver);
    this.registerInclusionResolver('currency', this.currency.inclusionResolver);
    this.registerInclusionResolver('transactionType', this.transactionType.inclusionResolver);
    this.registerInclusionResolver('goal', this.goal.inclusionResolver);
  }
}
