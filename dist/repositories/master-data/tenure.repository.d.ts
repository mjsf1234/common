import { BaseLocalRepository, ModelPortfolioRepository } from '../../repositories';
import { Getter, HasManyRepositoryFactory, juggler } from '@loopback/repository';
import { ModelPortfolio, Tenure, TenureRelations } from '../../models';
export declare class TenureRepository extends BaseLocalRepository<Tenure, typeof Tenure.prototype.id, TenureRelations> {
    readonly modelPortfolios: HasManyRepositoryFactory<ModelPortfolio, typeof Tenure.prototype.id>;
    constructor(dataSource: juggler.DataSource, modelPortfolioRepositoryGetter: Getter<ModelPortfolioRepository>);
}
