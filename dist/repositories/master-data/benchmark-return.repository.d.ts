import { BaseLocalRepository, InstrumentRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { BenchmarkReturn, BenchmarkReturnRelations, Instrument } from '../../models';
export declare class BenchmarkReturnRepository extends BaseLocalRepository<BenchmarkReturn, typeof BenchmarkReturn.prototype.id, BenchmarkReturnRelations> {
    readonly instrument: BelongsToAccessor<Instrument, typeof BenchmarkReturn.prototype.id>;
    constructor(dataSource: juggler.DataSource, instrumentRepositoryGetter: Getter<InstrumentRepository>);
}
