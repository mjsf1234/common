import { AssetRepository, BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { Asset, ModelPortfolio, ModelPortfolioAsset, ModelPortfolioAssetRelations } from '../../models';
import { ModelPortfolioRepository } from './model-portfolio.repository';
export declare class ModelPortfolioAssetRepository extends BaseLocalRepository<ModelPortfolioAsset, typeof ModelPortfolioAsset.prototype.id, ModelPortfolioAssetRelations> {
    readonly modelPortfolio: BelongsToAccessor<ModelPortfolio, typeof ModelPortfolioAsset.prototype.id>;
    readonly asset: BelongsToAccessor<Asset, typeof ModelPortfolioAsset.prototype.id>;
    constructor(dataSource: juggler.DataSource, modelPortfolioRepositoryGetter: Getter<ModelPortfolioRepository>, assetRepositoryGetter: Getter<AssetRepository>);
}
