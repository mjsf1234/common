import { BaseLocalRepository, ModelPortfolioAmountCappingRepository, ModelPortfolioRepository } from '..';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { ModelPortfolioConfig, ModelPortfolioConfigRelations, ModelPortfolioAmountCapping, ModelPortfolio } from '../..';
export declare class ModelPortfolioConfigRepository extends BaseLocalRepository<ModelPortfolioConfig, typeof ModelPortfolioConfig.prototype.id, ModelPortfolioConfigRelations> {
    [x: string]: any;
    readonly modelPortfolio: BelongsToAccessor<ModelPortfolio, typeof ModelPortfolioConfig.prototype.id>;
    readonly modelPortfolioAmountCapping: BelongsToAccessor<ModelPortfolioAmountCapping, typeof ModelPortfolioConfig.prototype.id>;
    constructor(dataSource: juggler.DataSource, modelPortfolioRepositoryGetter: Getter<ModelPortfolioRepository>, modelPortfolioAmountCappingRepositoryGetter: Getter<ModelPortfolioAmountCappingRepository>);
}
