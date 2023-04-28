import {BaseLocalRepository, TransactionTwoFaRepository} from '../../repositories';
import {BelongsToAccessor, Getter, HasManyRepositoryFactory, HasOneRepositoryFactory, juggler, repository} from '@loopback/repository';
import {
  OrderItem,
  OrderItemRelations,
  Order,
  Instrument,
  ServiceProviderAccount,
  Currency,
  TransactionType,
  SystematicMethod,
  Goal,
  Transaction,
  PaymentDetails,
  Rta,
  TransactionFeedLog,
  PaymentConfirmationFeedLog,
  TransactionTwoFa
} from '../../models';
import {OrderRepository} from './order.repository';
import {CurrencyRepository, InstrumentRepository, TransactionTypeRepository, RtaRepository} from '../master-data';
import {ServiceProviderAccountRepository, SystematicMethodRepository, TransactionRepository} from '../transaction';
import {GoalRepository} from './goal.repository';
import {PaymentDetailsRepository} from './payment-details.repository';
import {TransactionFeedLogRepository} from './transaction-feed-log.repository';
import {PaymentConfirmationFeedLogRepository} from './payment-confirmation-feed-log.repository';

export class OrderItemRepository extends BaseLocalRepository<OrderItem, typeof OrderItem.prototype.id, OrderItemRelations> {
  public readonly order: BelongsToAccessor<Order, typeof OrderItem.prototype.id>;
  public readonly instrument: BelongsToAccessor<Instrument, typeof OrderItem.prototype.id>;
  public readonly secondaryInstrument: BelongsToAccessor<Instrument, typeof OrderItem.prototype.id>;
  public readonly serviceProviderAccount: BelongsToAccessor<ServiceProviderAccount, typeof OrderItem.prototype.id>;
  public readonly currency: BelongsToAccessor<Currency, typeof OrderItem.prototype.id>;
  public readonly transactionType: BelongsToAccessor<TransactionType, typeof OrderItem.prototype.id>;
  public readonly systematicMethod: BelongsToAccessor<SystematicMethod, typeof OrderItem.prototype.id>;
  public readonly goal: BelongsToAccessor<Goal, typeof OrderItem.prototype.id>;
  public readonly secondaryGoal: BelongsToAccessor<Goal, typeof OrderItem.prototype.id>;
  public readonly rta: BelongsToAccessor<Rta, typeof OrderItem.prototype.id>;
  public readonly txnFeedLog: BelongsToAccessor<TransactionFeedLog, typeof OrderItem.prototype.id>;
  public readonly paymentConfirmationFeedLog: BelongsToAccessor<PaymentConfirmationFeedLog, typeof OrderItem.prototype.id>;
  public readonly transactionTwoFaSms: BelongsToAccessor<TransactionTwoFa, typeof OrderItem.prototype.id>;
  public readonly transactionTwoFaEmail: BelongsToAccessor<TransactionTwoFa, typeof OrderItem.prototype.id>;

  public readonly transaction: HasManyRepositoryFactory<Transaction, typeof Transaction.prototype.id>;
  public readonly paymentDetails: HasOneRepositoryFactory<PaymentDetails, typeof PaymentDetails.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('OrderRepository') orderRepositoryGetter: Getter<OrderRepository>,
    @repository.getter('InstrumentRepository') instrumentRepositoryGetter: Getter<InstrumentRepository>,
    @repository.getter('InstrumentRepository') secondaryInstrumentRepositoryGetter: Getter<InstrumentRepository>,
    @repository.getter('ServiceProviderAccountRepository') serviceProviderAccountRepositoryGetter: Getter<ServiceProviderAccountRepository>,
    @repository.getter('CurrencyRepository') currencyRepositoryGetter: Getter<CurrencyRepository>,
    @repository.getter('TransactionTypeRepository') transactionTypeRepositoryGetter: Getter<TransactionTypeRepository>,
    @repository.getter('SystematicMethodRepository') systematicMethodRepositoryGetter: Getter<SystematicMethodRepository>,
    @repository.getter('GoalRepository') goalRepositoryGetter: Getter<GoalRepository>,
    @repository.getter('GoalRepository') secondaryGoalRepositoryGetter: Getter<GoalRepository>,
    @repository.getter('TransactionRepository') transactionRepositoryGetter: Getter<TransactionRepository>,
    @repository.getter('PaymentDetailsRepository') paymentDetailsRepositoryGetter: Getter<PaymentDetailsRepository>,
    @repository.getter('RtaRepository') rtaRepositoryGetter: Getter<RtaRepository>,
    @repository.getter('TransactionFeedLogRepository') transactionFeedLogRepositoryGetter: Getter<TransactionFeedLogRepository>,
    @repository.getter('PaymentConfirmationFeedLogRepository')
    paymentConfirmationFeedLogRepositoryGetter: Getter<PaymentConfirmationFeedLogRepository>,
    @repository.getter('TransactionTwoFaRepository') transactionTwoFaRepositoryGetter: Getter<TransactionTwoFaRepository>
  ) {
    super(OrderItem, dataSource);
    this.order = this.createBelongsToAccessorFor('order', orderRepositoryGetter);
    this.instrument = this.createBelongsToAccessorFor('instrument', instrumentRepositoryGetter);
    this.secondaryInstrument = this.createBelongsToAccessorFor('secondaryInstrument', secondaryInstrumentRepositoryGetter);
    this.serviceProviderAccount = this.createBelongsToAccessorFor('serviceProviderAccount', serviceProviderAccountRepositoryGetter);
    this.currency = this.createBelongsToAccessorFor('currency', currencyRepositoryGetter);
    this.transactionType = this.createBelongsToAccessorFor('transactionType', transactionTypeRepositoryGetter);
    this.systematicMethod = this.createBelongsToAccessorFor('systematicMethod', systematicMethodRepositoryGetter);
    this.goal = this.createBelongsToAccessorFor('goal', goalRepositoryGetter);
    this.secondaryGoal = this.createBelongsToAccessorFor('secondaryGoal', secondaryGoalRepositoryGetter);
    this.rta = this.createBelongsToAccessorFor('rta', rtaRepositoryGetter);
    this.txnFeedLog = this.createBelongsToAccessorFor('txnFeedLog', transactionFeedLogRepositoryGetter);
    this.paymentConfirmationFeedLog = this.createBelongsToAccessorFor(
      'paymentConfirmationFeedLog',
      paymentConfirmationFeedLogRepositoryGetter
    );

    this.transactionTwoFaSms = this.createBelongsToAccessorFor('transactionTwoFaSms', transactionTwoFaRepositoryGetter);
    this.transactionTwoFaEmail = this.createBelongsToAccessorFor('transactionTwoFaEmail', transactionTwoFaRepositoryGetter);

    this.transaction = this.createHasManyRepositoryFactoryFor('transaction', transactionRepositoryGetter);
    this.paymentDetails = this.createHasOneRepositoryFactoryFor('paymentDetails', paymentDetailsRepositoryGetter);

    this.registerInclusionResolver('order', this.order.inclusionResolver);
    this.registerInclusionResolver('instrument', this.instrument.inclusionResolver);
    this.registerInclusionResolver('secondaryInstrument', this.secondaryInstrument.inclusionResolver);
    this.registerInclusionResolver('serviceProviderAccount', this.serviceProviderAccount.inclusionResolver);
    this.registerInclusionResolver('currency', this.currency.inclusionResolver);
    this.registerInclusionResolver('transactionType', this.transactionType.inclusionResolver);
    this.registerInclusionResolver('systematicMethod', this.systematicMethod.inclusionResolver);
    this.registerInclusionResolver('goal', this.goal.inclusionResolver);
    this.registerInclusionResolver('secondaryGoal', this.secondaryGoal.inclusionResolver);
    this.registerInclusionResolver('transaction', this.transaction.inclusionResolver);
    this.registerInclusionResolver('paymentDetails', this.paymentDetails.inclusionResolver);
    this.registerInclusionResolver('rta', this.rta.inclusionResolver);
    this.registerInclusionResolver('txnFeedLog', this.txnFeedLog.inclusionResolver);
    this.registerInclusionResolver('paymentConfirmationFeedLog', this.paymentConfirmationFeedLog.inclusionResolver);
    this.registerInclusionResolver('transactionTwoFaSms', this.transactionTwoFaSms.inclusionResolver);
    this.registerInclusionResolver('transactionTwoFaEmail', this.transactionTwoFaEmail.inclusionResolver);
  }
}
