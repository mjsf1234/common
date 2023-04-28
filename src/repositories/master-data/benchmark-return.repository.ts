import {BaseLocalRepository, InstrumentRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {BenchmarkReturn, BenchmarkReturnRelations, Instrument} from '../../models';

export class BenchmarkReturnRepository extends BaseLocalRepository<
  BenchmarkReturn,
  typeof BenchmarkReturn.prototype.id,
  BenchmarkReturnRelations
> {
  public readonly instrument: BelongsToAccessor<Instrument, typeof BenchmarkReturn.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('InstrumentRepository') instrumentRepositoryGetter: Getter<InstrumentRepository>
  ) {
    super(BenchmarkReturn, dataSource);

    this.instrument = this.createBelongsToAccessorFor('instrument', instrumentRepositoryGetter);

    this.registerInclusionResolver('instrument', this.instrument.inclusionResolver);
  }
}
