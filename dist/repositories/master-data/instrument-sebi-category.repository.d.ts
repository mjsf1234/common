import { BaseLocalRepository } from '../../repositories';
import { juggler } from '@loopback/repository';
import { InstrumentSebiCategory, InstrumentSebiCategoryRelations } from '../../models';
export declare class InstrumentSebiCategoryRepository extends BaseLocalRepository<InstrumentSebiCategory, typeof InstrumentSebiCategory.prototype.id, InstrumentSebiCategoryRelations> {
    constructor(dataSource: juggler.DataSource);
}
