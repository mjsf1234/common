import { BaseLocalRepository } from '../../repositories';
import { juggler } from '@loopback/repository';
import { InstrumentCategoryGroup, InstrumentCategoryGroupRelations } from '../../models';
export declare class InstrumentCategoryGroupRepository extends BaseLocalRepository<InstrumentCategoryGroup, typeof InstrumentCategoryGroup.prototype.id, InstrumentCategoryGroupRelations> {
    constructor(dataSource: juggler.DataSource);
}
