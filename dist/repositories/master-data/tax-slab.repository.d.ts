import { BaseLocalRepository } from '../../repositories';
import { juggler } from '@loopback/repository';
import { TaxSlab, TaxSlabRelations } from '../../models';
export declare class TaxSlabRepository extends BaseLocalRepository<TaxSlab, typeof TaxSlab.prototype.id, TaxSlabRelations> {
    constructor(dataSource: juggler.DataSource);
}
