import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {Instrument, InstrumentHolding, InstrumentHoldingRelations} from '../../models';
import {InstrumentRepository} from './instrument.repository';

export class InstrumentHoldingRepository extends BaseLocalRepository<
  InstrumentHolding,
  typeof InstrumentHolding.prototype.id,
  InstrumentHoldingRelations
> {
  public readonly parentInstrument: BelongsToAccessor<Instrument, typeof InstrumentHolding.prototype.id>;
  public readonly childInstrument: BelongsToAccessor<Instrument, typeof InstrumentHolding.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('InstrumentRepository') parentInstrumentRepositoryGetter: Getter<InstrumentRepository>,
    @repository.getter('InstrumentRepository') childInstrumentRepositoryGetter: Getter<InstrumentRepository>
  ) {
    super(InstrumentHolding, dataSource);
    this.parentInstrument = this.createBelongsToAccessorFor('parentInstrument', parentInstrumentRepositoryGetter);
    this.childInstrument = this.createBelongsToAccessorFor('childInstrument', childInstrumentRepositoryGetter);

    this.registerInclusionResolver('parentInstrument', this.parentInstrument.inclusionResolver);
    this.registerInclusionResolver('childInstrument', this.childInstrument.inclusionResolver);
  }
}
