import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { Instrument, MutualFundLoadHistory, MutualFundLoadHistoryRelations } from '../../models';
import { InstrumentRepository } from './instrument.repository';
export declare class MutualFundLoadHistoryRepository extends BaseLocalRepository<MutualFundLoadHistory, typeof MutualFundLoadHistory.prototype.id, MutualFundLoadHistoryRelations> {
    readonly instrument: BelongsToAccessor<Instrument, typeof MutualFundLoadHistory.prototype.id>;
    constructor(dataSource: juggler.DataSource, instrumentRepositoryGetter: Getter<InstrumentRepository>);
}
