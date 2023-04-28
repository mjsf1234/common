import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { IndexDetails, IndexDetailsRelations, Instrument } from '../../models';
import { InstrumentRepository } from './instrument.repository';
export declare class IndexDetailsRepository extends BaseLocalRepository<IndexDetails, typeof IndexDetails.prototype.id, IndexDetailsRelations> {
    readonly instrument: BelongsToAccessor<Instrument, typeof IndexDetails.prototype.id>;
    constructor(dataSource: juggler.DataSource, instrumentRepositoryGetter: Getter<InstrumentRepository>);
}
