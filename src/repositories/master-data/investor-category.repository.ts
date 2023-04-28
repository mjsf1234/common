import {BaseLocalRepository} from '../../repositories';
import {juggler} from '@loopback/repository';
import {InvestorCategory, InvestorCategoryRelations} from '../../models';

export class InvestorCategoryRepository extends BaseLocalRepository<
  InvestorCategory,
  typeof InvestorCategory.prototype.id,
  InvestorCategoryRelations
> {
  constructor(dataSource: juggler.DataSource) {
    super(InvestorCategory, dataSource);
  }
}
