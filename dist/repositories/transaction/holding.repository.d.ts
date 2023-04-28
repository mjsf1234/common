import { BaseLocalRepository, CurrencyRepository, GoalRepository, InstrumentRepository, ServiceProviderAccountRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { Currency, Goal, HistoricalHolding, Holding, HoldingRelations, Instrument, ServiceProviderAccount } from '../../models';
export declare class HoldingRepository extends BaseLocalRepository<Holding, typeof Holding.prototype.id, HoldingRelations> {
    readonly serviceProviderAccount: BelongsToAccessor<ServiceProviderAccount, typeof HistoricalHolding.prototype.id>;
    readonly instrument: BelongsToAccessor<Instrument, typeof HistoricalHolding.prototype.id>;
    readonly currency: BelongsToAccessor<Currency, typeof HistoricalHolding.prototype.id>;
    readonly goal: BelongsToAccessor<Goal, typeof HistoricalHolding.prototype.id>;
    constructor(dataSource: juggler.DataSource, serviceProviderAccountRepositoryGetter: Getter<ServiceProviderAccountRepository>, instrumentRepositoryGetter: Getter<InstrumentRepository>, currencyRepositoryGetter: Getter<CurrencyRepository>, goalRepositoryGetter: Getter<GoalRepository>);
}
