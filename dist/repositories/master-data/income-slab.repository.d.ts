import { BaseLocalRepository } from '../../repositories';
import { juggler } from '@loopback/repository';
import { IncomeSlab, IncomeSlabRelations } from '../../models';
export declare class IncomeSlabRepository extends BaseLocalRepository<IncomeSlab, typeof IncomeSlab.prototype.id, IncomeSlabRelations> {
    constructor(dataSource: juggler.DataSource);
}
