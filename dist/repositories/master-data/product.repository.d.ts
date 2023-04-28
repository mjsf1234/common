import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { Instrument, Product, ProductRelations } from '../../models';
import { InstrumentRepository } from './instrument.repository';
export declare class ProductRepository extends BaseLocalRepository<Product, typeof Product.prototype.id, ProductRelations> {
    readonly benchmarkInstrument: BelongsToAccessor<Instrument, typeof Product.prototype.id>;
    constructor(dataSource: juggler.DataSource, benchmarkInstrumentRepositoryGetter: Getter<InstrumentRepository>);
}
