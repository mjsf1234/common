import {BaseLocalRepository} from '../../repositories';
import {juggler} from '@loopback/repository';
import {TransactionType, TransactionTypeRelations} from '../../models';

export class TransactionTypeRepository extends BaseLocalRepository<
  TransactionType,
  typeof TransactionType.prototype.id,
  TransactionTypeRelations
> {
  constructor(dataSource: juggler.DataSource) {
    super(TransactionType, dataSource);
  }
}
