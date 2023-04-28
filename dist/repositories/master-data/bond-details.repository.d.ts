import { BaseLocalRepository, InstrumentRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { BondDetails, BondDetailsRelations, Instrument } from '../../models';
export declare class BondDetailsRepository extends BaseLocalRepository<BondDetails, typeof BondDetails.prototype.id, BondDetailsRelations> {
    readonly instrument: BelongsToAccessor<Instrument, typeof BondDetails.prototype.id>;
    constructor(dataSource: juggler.DataSource, instrumentRepositoryGetter: Getter<InstrumentRepository>);
}
