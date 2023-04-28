import {BaseLocalRepository} from '../../repositories';
import {juggler} from '@loopback/repository';
import {BankAccountType, BankAccountTypeRelations} from '../../models';

export class BankAccountTypeRepository extends BaseLocalRepository<
  BankAccountType,
  typeof BankAccountType.prototype.id,
  BankAccountTypeRelations
> {
  constructor(dataSource: juggler.DataSource) {
    super(BankAccountType, dataSource);
  }
}
