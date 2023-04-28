import { BaseLocalRepository } from '../../repositories';
import { juggler } from '@loopback/repository';
import { InstrumentType, InstrumentTypeRelations } from '../../models';
export declare class InstrumentTypeRepository extends BaseLocalRepository<InstrumentType, typeof InstrumentType.prototype.id, InstrumentTypeRelations> {
    constructor(dataSource: juggler.DataSource);
}
