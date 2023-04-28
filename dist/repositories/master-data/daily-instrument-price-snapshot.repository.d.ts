import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { DailyInstrumentPriceSnapshot, DailyInstrumentPriceSnapshotRelations, Instrument } from '../../models';
import { InstrumentRepository } from './instrument.repository';
export declare class DailyInstrumentPriceSnapshotRepository extends BaseLocalRepository<DailyInstrumentPriceSnapshot, typeof DailyInstrumentPriceSnapshot.prototype.id, DailyInstrumentPriceSnapshotRelations> {
    readonly instrument: BelongsToAccessor<Instrument, typeof DailyInstrumentPriceSnapshot.prototype.id>;
    constructor(dataSource: juggler.DataSource, instrumentRepositoryGetter: Getter<InstrumentRepository>);
}
