import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { DailyInstrumentRollingAlphaSnapshot, DailyInstrumentRollingAlphaSnapshotRelations, Instrument } from '../../models';
import { InstrumentRepository } from './instrument.repository';
export declare class DailyInstrumentRollingAlphaSnapshotRepository extends BaseLocalRepository<DailyInstrumentRollingAlphaSnapshot, typeof DailyInstrumentRollingAlphaSnapshot.prototype.id, DailyInstrumentRollingAlphaSnapshotRelations> {
    readonly instrument: BelongsToAccessor<Instrument, typeof DailyInstrumentRollingAlphaSnapshot.prototype.id>;
    constructor(dataSource: juggler.DataSource, instrumentRepositoryGetter: Getter<InstrumentRepository>);
}
