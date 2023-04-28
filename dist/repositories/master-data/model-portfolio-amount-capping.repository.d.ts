import { BaseLocalRepository } from '../../repositories';
import { juggler } from '@loopback/repository';
import { ModelPortfolioAmountCapping, ModelPortfolioAmountCappingRelations } from '../../models';
export declare class ModelPortfolioAmountCappingRepository extends BaseLocalRepository<ModelPortfolioAmountCapping, typeof ModelPortfolioAmountCapping.prototype.id, ModelPortfolioAmountCappingRelations> {
    constructor(dataSource: juggler.DataSource);
}
