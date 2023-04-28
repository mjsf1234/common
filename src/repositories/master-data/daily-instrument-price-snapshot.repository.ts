import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {DailyInstrumentPriceSnapshot, DailyInstrumentPriceSnapshotRelations, Instrument} from '../../models';
import {InstrumentRepository} from './instrument.repository';

export class DailyInstrumentPriceSnapshotRepository extends BaseLocalRepository<
  DailyInstrumentPriceSnapshot,
  typeof DailyInstrumentPriceSnapshot.prototype.id,
  DailyInstrumentPriceSnapshotRelations
> {
  public readonly instrument: BelongsToAccessor<Instrument, typeof DailyInstrumentPriceSnapshot.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('InstrumentRepository') instrumentRepositoryGetter: Getter<InstrumentRepository>
  ) {
    super(DailyInstrumentPriceSnapshot, dataSource);
    this.instrument = this.createBelongsToAccessorFor('instrument', instrumentRepositoryGetter);

    this.registerInclusionResolver('instrument', this.instrument.inclusionResolver);
  }
}
