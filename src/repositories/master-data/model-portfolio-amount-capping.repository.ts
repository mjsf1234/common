import {BaseLocalRepository} from '../../repositories';
import {juggler} from '@loopback/repository';
import {ModelPortfolioAmountCapping, ModelPortfolioAmountCappingRelations} from '../../models';

export class ModelPortfolioAmountCappingRepository extends BaseLocalRepository<ModelPortfolioAmountCapping, typeof ModelPortfolioAmountCapping.prototype.id, ModelPortfolioAmountCappingRelations> {
    constructor(dataSource: juggler.DataSource) {
      super(ModelPortfolioAmountCapping, dataSource);
    }
  }
