import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {Instrument, MutualFundDetailsHistory, MutualFundDetailsHistoryRelations} from '../../models';
import {InstrumentRepository} from './instrument.repository';

export class MutualFundDetailsHistoryRepository extends BaseLocalRepository<
  MutualFundDetailsHistory,
  typeof MutualFundDetailsHistory.prototype.id,
  MutualFundDetailsHistoryRelations
> {
  public readonly instrument: BelongsToAccessor<Instrument, typeof MutualFundDetailsHistory.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('InstrumentRepository') instrumentRepositoryGetter: Getter<InstrumentRepository>
  ) {
    super(MutualFundDetailsHistory, dataSource);
    this.instrument = this.createBelongsToAccessorFor('instrument', instrumentRepositoryGetter);

    this.registerInclusionResolver('instrument', this.instrument.inclusionResolver);
  }
}
