import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {Instrument, MutualFundLoadHistory, MutualFundLoadHistoryRelations} from '../../models';
import {InstrumentRepository} from './instrument.repository';

export class MutualFundLoadHistoryRepository extends BaseLocalRepository<
  MutualFundLoadHistory,
  typeof MutualFundLoadHistory.prototype.id,
  MutualFundLoadHistoryRelations
> {
  public readonly instrument: BelongsToAccessor<Instrument, typeof MutualFundLoadHistory.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('InstrumentRepository') instrumentRepositoryGetter: Getter<InstrumentRepository>
  ) {
    super(MutualFundLoadHistory, dataSource);
    this.instrument = this.createBelongsToAccessorFor('instrument', instrumentRepositoryGetter);
    this.registerInclusionResolver('instrument', this.instrument.inclusionResolver);
  }
}
