import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { Currency, Goal, HistoricalHolding, HistoricalHoldingRelations, Instrument, ServiceProviderAccount } from '../../models';
import { ServiceProviderAccountRepository } from './service-provider-account.repository';
import { CurrencyRepository, InstrumentRepository } from '../master-data';
import { GoalRepository } from '../order-execution';
export declare class HistoricalHoldingRepository extends BaseLocalRepository<HistoricalHolding, typeof HistoricalHolding.prototype.id, HistoricalHoldingRelations> {
    readonly serviceProviderAccount: BelongsToAccessor<ServiceProviderAccount, typeof HistoricalHolding.prototype.id>;
    readonly instrument: BelongsToAccessor<Instrument, typeof HistoricalHolding.prototype.id>;
    readonly currency: BelongsToAccessor<Currency, typeof HistoricalHolding.prototype.id>;
    readonly goal: BelongsToAccessor<Goal, typeof HistoricalHolding.prototype.id>;
    constructor(dataSource: juggler.DataSource, serviceProviderAccountRepositoryGetter: Getter<ServiceProviderAccountRepository>, instrumentRepositoryGetter: Getter<InstrumentRepository>, currencyRepositoryGetter: Getter<CurrencyRepository>, goalRepositoryGetter: Getter<GoalRepository>);
}
