import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { Instrument, InstrumentSectorMapping, InstrumentSectorMappingRelations, Sector, SectorClassification } from '../../models';
import { InstrumentRepository } from './instrument.repository';
import { SectorRepository } from './sector.repository';
import { SectorClassificationRepository } from './sector-classification.repository';
export declare class InstrumentSectorMappingRepository extends BaseLocalRepository<InstrumentSectorMapping, typeof InstrumentSectorMapping.prototype.id, InstrumentSectorMappingRelations> {
    readonly instrument: BelongsToAccessor<Instrument, typeof InstrumentSectorMapping.prototype.id>;
    readonly sector: BelongsToAccessor<Sector, typeof InstrumentSectorMapping.prototype.id>;
    readonly sectorClassificaion: BelongsToAccessor<SectorClassification, typeof InstrumentSectorMapping.prototype.id>;
    constructor(dataSource: juggler.DataSource, instrumentRepositoryGetter: Getter<InstrumentRepository>, sectorRepositoryGetter: Getter<SectorRepository>, sectorClassificaionRepositoryGetter: Getter<SectorClassificationRepository>);
}
