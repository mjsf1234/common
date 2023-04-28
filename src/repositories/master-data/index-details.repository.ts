import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {IndexDetails, IndexDetailsRelations, Instrument} from '../../models';
import {InstrumentRepository} from './instrument.repository';

export class IndexDetailsRepository extends BaseLocalRepository<IndexDetails, typeof IndexDetails.prototype.id, IndexDetailsRelations> {
  public readonly instrument: BelongsToAccessor<Instrument, typeof IndexDetails.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('InstrumentRepository') instrumentRepositoryGetter: Getter<InstrumentRepository>
  ) {
    super(IndexDetails, dataSource);
    this.instrument = this.createBelongsToAccessorFor('instrument', instrumentRepositoryGetter);

    this.registerInclusionResolver('instrument', this.instrument.inclusionResolver);
  }
}
