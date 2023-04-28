import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {Instrument, Product, ProductRelations} from '../../models';
import {InstrumentRepository} from './instrument.repository';

export class ProductRepository extends BaseLocalRepository<Product, typeof Product.prototype.id, ProductRelations> {
  public readonly benchmarkInstrument: BelongsToAccessor<Instrument, typeof Product.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('InstrumentRepository') benchmarkInstrumentRepositoryGetter: Getter<InstrumentRepository>
  ) {
    super(Product, dataSource);
    this.benchmarkInstrument = this.createBelongsToAccessorFor('benchmarkInstrument', benchmarkInstrumentRepositoryGetter);

    this.registerInclusionResolver('benchmarkInstrument', this.benchmarkInstrument.inclusionResolver);
  }
}
