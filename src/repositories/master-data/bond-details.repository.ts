import {BaseLocalRepository, InstrumentRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {BondDetails, BondDetailsRelations, Instrument} from '../../models';

export class BondDetailsRepository extends BaseLocalRepository<BondDetails, typeof BondDetails.prototype.id, BondDetailsRelations> {
  public readonly instrument: BelongsToAccessor<Instrument, typeof BondDetails.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('InstrumentRepository') instrumentRepositoryGetter: Getter<InstrumentRepository>
  ) {
    super(BondDetails, dataSource);

    this.instrument = this.createBelongsToAccessorFor('instrument', instrumentRepositoryGetter);

    this.registerInclusionResolver('instrument', this.instrument.inclusionResolver);
  }
}
