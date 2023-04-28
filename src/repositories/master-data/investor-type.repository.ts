import {BaseLocalRepository} from '../../repositories';
import {juggler} from '@loopback/repository';
import {InvestorType, InvestorTypeRelations} from '../../models';

export class InvestorTypeRepository extends BaseLocalRepository<InvestorType, typeof InvestorType.prototype.id, InvestorTypeRelations> {
  constructor(dataSource: juggler.DataSource) {
    super(InvestorType, dataSource);
  }
}
