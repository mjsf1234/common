import { BaseLocalRepository, InstrumentCategoryRepository, ModelPortfolioAssetRepository, ModelPortfolioProductRepository } from '..';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { InstrumentCategory, ModelPortfolio, ModelPortfolioAsset, ModelPortfolioCategory, ModelPortfolioCategoryRelations, ModelPortfolioProduct } from '../..';
import { ModelPortfolioRepository } from './model-portfolio.repository';
export declare class ModelPortfolioCategoryRepository extends BaseLocalRepository<ModelPortfolioCategory, typeof ModelPortfolioCategory.prototype.id, ModelPortfolioCategoryRelations> {
    readonly modelPortfolio: BelongsToAccessor<ModelPortfolio, typeof ModelPortfolioCategory.prototype.id>;
    readonly modelPortfolioAsset: BelongsToAccessor<ModelPortfolioAsset, typeof ModelPortfolioCategory.prototype.id>;
    readonly modelPortfolioProduct: BelongsToAccessor<ModelPortfolioProduct, typeof ModelPortfolioCategory.prototype.id>;
    readonly instrumentCategory: BelongsToAccessor<InstrumentCategory, typeof ModelPortfolioCategory.prototype.id>;
    constructor(dataSource: juggler.DataSource, modelPortfolioRepositoryGetter: Getter<ModelPortfolioRepository>, modelPortfolioAssetRepositoryGetter: Getter<ModelPortfolioAssetRepository>, modelPortfolioProductRepositoryGetter: Getter<ModelPortfolioProductRepository>, instrumentCategoryGetter: Getter<InstrumentCategoryRepository>);
}
