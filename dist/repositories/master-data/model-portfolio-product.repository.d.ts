import { BaseLocalRepository, ModelPortfolioAssetRepository, ProductRepository } from '..';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { ModelPortfolio, ModelPortfolioAsset, ModelPortfolioProduct, ModelPortfolioProductRelations, Product } from '../..';
import { ModelPortfolioRepository } from './model-portfolio.repository';
export declare class ModelPortfolioProductRepository extends BaseLocalRepository<ModelPortfolioProduct, typeof ModelPortfolioProduct.prototype.id, ModelPortfolioProductRelations> {
    readonly modelPortfolio: BelongsToAccessor<ModelPortfolio, typeof ModelPortfolioProduct.prototype.id>;
    readonly modelPortfolioAsset: BelongsToAccessor<ModelPortfolioAsset, typeof ModelPortfolioProduct.prototype.id>;
    readonly product: BelongsToAccessor<Product, typeof ModelPortfolioProduct.prototype.id>;
    constructor(dataSource: juggler.DataSource, modelPortfolioRepositoryGetter: Getter<ModelPortfolioRepository>, modelPortfolioAssetRepositoryGetter: Getter<ModelPortfolioAssetRepository>, productRepositoryGetter: Getter<ProductRepository>);
}
