import {BaseLocalRepository} from '../../repositories';
import {juggler} from '@loopback/repository';
import {IncomeSlab, IncomeSlabRelations} from '../../models';

export class IncomeSlabRepository extends BaseLocalRepository<IncomeSlab, typeof IncomeSlab.prototype.id, IncomeSlabRelations> {
  constructor(dataSource: juggler.DataSource) {
    super(IncomeSlab, dataSource);
  }
}
