import { BaseLocalRepository, ModelPortfolioAssetRepository, ModelPortfolioCategoryRepository, ModelPortfolioProductRepository, RiskProfileRepository, TenureRepository, ModelPortfolioAmountCappingRepository, ModelPortfolioConfigRepository } from '..';
import { BelongsToAccessor, Getter, HasManyRepositoryFactory, juggler } from '@loopback/repository';
import { ModelPortfolio, ModelPortfolioAsset, ModelPortfolioCategory, ModelPortfolioProduct, ModelPortfolioRelations, RiskProfile, Tenure, ModelPortfolioAmountCapping, ModelPortfolioConfig } from '../..';
export declare class ModelPortfolioRepository extends BaseLocalRepository<ModelPortfolio, typeof ModelPortfolio.prototype.id, ModelPortfolioRelations> {
    [x: string]: any;
    readonly tenure: BelongsToAccessor<Tenure, typeof ModelPortfolio.prototype.id>;
    readonly riskProfile: BelongsToAccessor<RiskProfile, typeof ModelPortfolio.prototype.id>;
    readonly modelPortfolioCategories: HasManyRepositoryFactory<ModelPortfolioCategory, typeof ModelPortfolio.prototype.id>;
    readonly modelPortfolioAssets: HasManyRepositoryFactory<ModelPortfolioAsset, typeof ModelPortfolio.prototype.id>;
    readonly modelPortfolioProducts: HasManyRepositoryFactory<ModelPortfolioProduct, typeof ModelPortfolio.prototype.id>;
    readonly modelPortfolioAmountCapping: BelongsToAccessor<ModelPortfolioAmountCapping, typeof ModelPortfolio.prototype.id>;
    readonly modelPortfolioConfig: HasManyRepositoryFactory<ModelPortfolioConfig, typeof ModelPortfolio.prototype.id>;
    constructor(dataSource: juggler.DataSource, tenureRepositoryGetter: Getter<TenureRepository>, riskProfileRepositoryGetter: Getter<RiskProfileRepository>, modelPortfolioAssetRepositoryGetter: Getter<ModelPortfolioAssetRepository>, modelPortfolioProductRepositoryGetter: Getter<ModelPortfolioProductRepository>, modelPortfolioCategoryRepositoryGetter: Getter<ModelPortfolioCategoryRepository>, modelPortfolioAmountCappingRepositoryGetter: Getter<ModelPortfolioAmountCappingRepository>, modelPortfolioConfigRepositoryGetter: Getter<ModelPortfolioConfigRepository>);
}
