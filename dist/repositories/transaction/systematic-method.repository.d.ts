import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler, HasManyRepositoryFactory } from '@loopback/repository';
import { Account, Currency, Goal, Instrument, Mandate, ServiceProviderAccount, SystematicMethod, SystematicMethodRelations, OrderItem, SystematicMethodStatusHistory } from '../../models';
import { AccountRepository, MandateRepository } from '../user-management';
import { ServiceProviderAccountRepository } from './service-provider-account.repository';
import { CurrencyRepository, InstrumentRepository } from '../master-data';
import { GoalRepository, OrderItemRepository } from '../order-execution';
import { SystematicMethodStatusHistoryRepository } from '.';
export declare class SystematicMethodRepository extends BaseLocalRepository<SystematicMethod, typeof SystematicMethod.prototype.id, SystematicMethodRelations> {
    readonly account: BelongsToAccessor<Account, typeof SystematicMethod.prototype.id>;
    readonly mandate: BelongsToAccessor<Mandate, typeof SystematicMethod.prototype.id>;
    readonly serviceProviderAccount: BelongsToAccessor<ServiceProviderAccount, typeof SystematicMethod.prototype.id>;
    readonly currency: BelongsToAccessor<Currency, typeof SystematicMethod.prototype.id>;
    readonly instrument: BelongsToAccessor<Instrument, typeof SystematicMethod.prototype.id>;
    readonly toInstrument: BelongsToAccessor<Instrument, typeof SystematicMethod.prototype.id>;
    readonly goal: BelongsToAccessor<Goal, typeof SystematicMethod.prototype.id>;
    readonly orderItems: HasManyRepositoryFactory<OrderItem, typeof SystematicMethod.prototype.id>;
    readonly statusHistories: HasManyRepositoryFactory<SystematicMethodStatusHistory, typeof SystematicMethod.prototype.id>;
    constructor(dataSource: juggler.DataSource, accountRepositoryGetter: Getter<AccountRepository>, mandateRepositoryGetter: Getter<MandateRepository>, serviceProviderAccountRepositoryGetter: Getter<ServiceProviderAccountRepository>, currencyRepositoryGetter: Getter<CurrencyRepository>, instrumentRepositoryGetter: Getter<InstrumentRepository>, toInstrumentRepositoryGetter: Getter<InstrumentRepository>, goalRepositoryGetter: Getter<GoalRepository>, orderItemRepositoryGetter: Getter<OrderItemRepository>, systematicMethodStatusHistoryRepositoryGetter: Getter<SystematicMethodStatusHistoryRepository>);
}
