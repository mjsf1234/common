import { BaseLocalRepository, TransactionTwoFaRepository } from '../../repositories';
import { BelongsToAccessor, Getter, HasManyRepositoryFactory, HasOneRepositoryFactory, juggler } from '@loopback/repository';
import { OrderItem, OrderItemRelations, Order, Instrument, ServiceProviderAccount, Currency, TransactionType, SystematicMethod, Goal, Transaction, PaymentDetails, Rta, TransactionFeedLog, PaymentConfirmationFeedLog, TransactionTwoFa } from '../../models';
import { OrderRepository } from './order.repository';
import { CurrencyRepository, InstrumentRepository, TransactionTypeRepository, RtaRepository } from '../master-data';
import { ServiceProviderAccountRepository, SystematicMethodRepository, TransactionRepository } from '../transaction';
import { GoalRepository } from './goal.repository';
import { PaymentDetailsRepository } from './payment-details.repository';
import { TransactionFeedLogRepository } from './transaction-feed-log.repository';
import { PaymentConfirmationFeedLogRepository } from './payment-confirmation-feed-log.repository';
export declare class OrderItemRepository extends BaseLocalRepository<OrderItem, typeof OrderItem.prototype.id, OrderItemRelations> {
    readonly order: BelongsToAccessor<Order, typeof OrderItem.prototype.id>;
    readonly instrument: BelongsToAccessor<Instrument, typeof OrderItem.prototype.id>;
    readonly secondaryInstrument: BelongsToAccessor<Instrument, typeof OrderItem.prototype.id>;
    readonly serviceProviderAccount: BelongsToAccessor<ServiceProviderAccount, typeof OrderItem.prototype.id>;
    readonly currency: BelongsToAccessor<Currency, typeof OrderItem.prototype.id>;
    readonly transactionType: BelongsToAccessor<TransactionType, typeof OrderItem.prototype.id>;
    readonly systematicMethod: BelongsToAccessor<SystematicMethod, typeof OrderItem.prototype.id>;
    readonly goal: BelongsToAccessor<Goal, typeof OrderItem.prototype.id>;
    readonly secondaryGoal: BelongsToAccessor<Goal, typeof OrderItem.prototype.id>;
    readonly rta: BelongsToAccessor<Rta, typeof OrderItem.prototype.id>;
    readonly txnFeedLog: BelongsToAccessor<TransactionFeedLog, typeof OrderItem.prototype.id>;
    readonly paymentConfirmationFeedLog: BelongsToAccessor<PaymentConfirmationFeedLog, typeof OrderItem.prototype.id>;
    readonly transactionTwoFaSms: BelongsToAccessor<TransactionTwoFa, typeof OrderItem.prototype.id>;
    readonly transactionTwoFaEmail: BelongsToAccessor<TransactionTwoFa, typeof OrderItem.prototype.id>;
    readonly transaction: HasManyRepositoryFactory<Transaction, typeof Transaction.prototype.id>;
    readonly paymentDetails: HasOneRepositoryFactory<PaymentDetails, typeof PaymentDetails.prototype.id>;
    constructor(dataSource: juggler.DataSource, orderRepositoryGetter: Getter<OrderRepository>, instrumentRepositoryGetter: Getter<InstrumentRepository>, secondaryInstrumentRepositoryGetter: Getter<InstrumentRepository>, serviceProviderAccountRepositoryGetter: Getter<ServiceProviderAccountRepository>, currencyRepositoryGetter: Getter<CurrencyRepository>, transactionTypeRepositoryGetter: Getter<TransactionTypeRepository>, systematicMethodRepositoryGetter: Getter<SystematicMethodRepository>, goalRepositoryGetter: Getter<GoalRepository>, secondaryGoalRepositoryGetter: Getter<GoalRepository>, transactionRepositoryGetter: Getter<TransactionRepository>, paymentDetailsRepositoryGetter: Getter<PaymentDetailsRepository>, rtaRepositoryGetter: Getter<RtaRepository>, transactionFeedLogRepositoryGetter: Getter<TransactionFeedLogRepository>, paymentConfirmationFeedLogRepositoryGetter: Getter<PaymentConfirmationFeedLogRepository>, transactionTwoFaRepositoryGetter: Getter<TransactionTwoFaRepository>);
}
