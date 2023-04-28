import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {Instrument, InstrumentSectorMapping, InstrumentSectorMappingRelations, Sector, SectorClassification} from '../../models';
import {InstrumentRepository} from './instrument.repository';
import {SectorRepository} from './sector.repository';
import {SectorClassificationRepository} from './sector-classification.repository';

export class InstrumentSectorMappingRepository extends BaseLocalRepository<
  InstrumentSectorMapping,
  typeof InstrumentSectorMapping.prototype.id,
  InstrumentSectorMappingRelations
> {
  public readonly instrument: BelongsToAccessor<Instrument, typeof InstrumentSectorMapping.prototype.id>;
  public readonly sector: BelongsToAccessor<Sector, typeof InstrumentSectorMapping.prototype.id>;
  public readonly sectorClassificaion: BelongsToAccessor<SectorClassification, typeof InstrumentSectorMapping.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('InstrumentRepository') instrumentRepositoryGetter: Getter<InstrumentRepository>,
    @repository.getter('SectorRepository') sectorRepositoryGetter: Getter<SectorRepository>,
    @repository.getter('SectorClassificationRepository') sectorClassificaionRepositoryGetter: Getter<SectorClassificationRepository>
  ) {
    super(InstrumentSectorMapping, dataSource);
    this.instrument = this.createBelongsToAccessorFor('instrument', instrumentRepositoryGetter);
    this.sector = this.createBelongsToAccessorFor('sector', sectorRepositoryGetter);
    this.sectorClassificaion = this.createBelongsToAccessorFor('sectorClassificaion', sectorClassificaionRepositoryGetter);

    this.registerInclusionResolver('instrument', this.instrument.inclusionResolver);
    this.registerInclusionResolver('sector', this.sector.inclusionResolver);
    this.registerInclusionResolver('sectorClassificaion', this.sectorClassificaion.inclusionResolver);
  }
}
