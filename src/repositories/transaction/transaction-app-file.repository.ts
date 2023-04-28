import {BaseLocalRepository} from '..';
import {juggler} from '@loopback/repository';
import {TransactionAppFile, TransactionAppFileRelations} from '../../models';

export class TransactionAppFileRepository extends BaseLocalRepository<
  TransactionAppFile,
  typeof TransactionAppFile.prototype.id,
  TransactionAppFileRelations
> {
  constructor(dataSource: juggler.DataSource) {
    super(TransactionAppFile, dataSource);
  }
}
