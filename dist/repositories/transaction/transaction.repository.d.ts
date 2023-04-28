import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { Account, AppUser, Currency, Goal, Instrument, OrderItem, ServiceProviderAccount, Transaction, TransactionRelations, TransactionType } from '../../models';
import { GoalRepository, OrderItemRepository } from '../order-execution';
import { CurrencyRepository, InstrumentRepository, TransactionTypeRepository } from '../master-data';
import { AccountRepository } from '../user-management';
import { ServiceProviderAccountRepository } from './service-provider-account.repository';
export declare class TransactionRepository extends BaseLocalRepository<Transaction, typeof Transaction.prototype.id, TransactionRelations> {
    readonly orderItem: BelongsToAccessor<OrderItem, typeof Transaction.prototype.id>;
    readonly instrument: BelongsToAccessor<Instrument, typeof Transaction.prototype.id>;
    readonly secondaryInstrument: BelongsToAccessor<Instrument, typeof Transaction.prototype.id>;
    readonly executedByAppUser: BelongsToAccessor<AppUser, typeof Transaction.prototype.id>;
    readonly account: BelongsToAccessor<Account, typeof Transaction.prototype.id>;
    readonly serviceProviderAccount: BelongsToAccessor<ServiceProviderAccount, typeof Transaction.prototype.id>;
    readonly currency: BelongsToAccessor<Currency, typeof Transaction.prototype.id>;
    readonly transactionType: BelongsToAccessor<TransactionType, typeof Transaction.prototype.id>;
    readonly goal: BelongsToAccessor<Goal, typeof Transaction.prototype.id>;
    constructor(dataSource: juggler.DataSource, orderItemRepositoryGetter: Getter<OrderItemRepository>, instrumentRepositoryGetter: Getter<InstrumentRepository>, secondaryInstrumentRepositoryGetter: Getter<InstrumentRepository>, accountRepositoryGetter: Getter<AccountRepository>, serviceProviderAccountRepositoryGetter: Getter<ServiceProviderAccountRepository>, currencyRepositoryGetter: Getter<CurrencyRepository>, transactionTypeRepositoryGetter: Getter<TransactionTypeRepository>, goalRepositoryGetter: Getter<GoalRepository>);
}
