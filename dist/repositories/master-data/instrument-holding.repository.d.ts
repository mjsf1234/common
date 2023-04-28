import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { Instrument, InstrumentHolding, InstrumentHoldingRelations } from '../../models';
import { InstrumentRepository } from './instrument.repository';
export declare class InstrumentHoldingRepository extends BaseLocalRepository<InstrumentHolding, typeof InstrumentHolding.prototype.id, InstrumentHoldingRelations> {
    readonly parentInstrument: BelongsToAccessor<Instrument, typeof InstrumentHolding.prototype.id>;
    readonly childInstrument: BelongsToAccessor<Instrument, typeof InstrumentHolding.prototype.id>;
    constructor(dataSource: juggler.DataSource, parentInstrumentRepositoryGetter: Getter<InstrumentRepository>, childInstrumentRepositoryGetter: Getter<InstrumentRepository>);
}
