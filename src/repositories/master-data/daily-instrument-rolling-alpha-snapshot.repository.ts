import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {DailyInstrumentRollingAlphaSnapshot, DailyInstrumentRollingAlphaSnapshotRelations, Instrument} from '../../models';
import {InstrumentRepository} from './instrument.repository';

export class DailyInstrumentRollingAlphaSnapshotRepository extends BaseLocalRepository<
  DailyInstrumentRollingAlphaSnapshot,
  typeof DailyInstrumentRollingAlphaSnapshot.prototype.id,
  DailyInstrumentRollingAlphaSnapshotRelations
> {
  public readonly instrument: BelongsToAccessor<Instrument, typeof DailyInstrumentRollingAlphaSnapshot.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('InstrumentRepository') instrumentRepositoryGetter: Getter<InstrumentRepository>
  ) {
    super(DailyInstrumentRollingAlphaSnapshot, dataSource);
    this.instrument = this.createBelongsToAccessorFor('instrument', instrumentRepositoryGetter);

    this.registerInclusionResolver('instrument', this.instrument.inclusionResolver);
  }
}
