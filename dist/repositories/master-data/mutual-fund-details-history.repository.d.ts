import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { Instrument, MutualFundDetailsHistory, MutualFundDetailsHistoryRelations } from '../../models';
import { InstrumentRepository } from './instrument.repository';
export declare class MutualFundDetailsHistoryRepository extends BaseLocalRepository<MutualFundDetailsHistory, typeof MutualFundDetailsHistory.prototype.id, MutualFundDetailsHistoryRelations> {
    readonly instrument: BelongsToAccessor<Instrument, typeof MutualFundDetailsHistory.prototype.id>;
    constructor(dataSource: juggler.DataSource, instrumentRepositoryGetter: Getter<InstrumentRepository>);
}
