import {BaseLocalRepository, InstrumentCategoryRepository, ModelPortfolioAssetRepository, ModelPortfolioProductRepository} from '..';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {
  InstrumentCategory,
  ModelPortfolio,
  ModelPortfolioAsset,
  ModelPortfolioCategory,
  ModelPortfolioCategoryRelations,
  ModelPortfolioProduct
} from '../..';
import {ModelPortfolioRepository} from './model-portfolio.repository';

export class ModelPortfolioCategoryRepository extends BaseLocalRepository<
  ModelPortfolioCategory,
  typeof ModelPortfolioCategory.prototype.id,
  ModelPortfolioCategoryRelations
> {
  public readonly modelPortfolio: BelongsToAccessor<ModelPortfolio, typeof ModelPortfolioCategory.prototype.id>;
  public readonly modelPortfolioAsset: BelongsToAccessor<ModelPortfolioAsset, typeof ModelPortfolioCategory.prototype.id>;
  public readonly modelPortfolioProduct: BelongsToAccessor<ModelPortfolioProduct, typeof ModelPortfolioCategory.prototype.id>;
  public readonly instrumentCategory: BelongsToAccessor<InstrumentCategory, typeof ModelPortfolioCategory.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('ModelPortfolioRepository') modelPortfolioRepositoryGetter: Getter<ModelPortfolioRepository>,
    @repository.getter('ModelPortfolioAssetRepository') modelPortfolioAssetRepositoryGetter: Getter<ModelPortfolioAssetRepository>,
    @repository.getter('ModelPortfolioProductRepository') modelPortfolioProductRepositoryGetter: Getter<ModelPortfolioProductRepository>,
    @repository.getter('InstrumentCategoryRepository') instrumentCategoryGetter: Getter<InstrumentCategoryRepository>
  ) {
    super(ModelPortfolioCategory, dataSource);
    this.modelPortfolio = this.createBelongsToAccessorFor('modelPortfolio', modelPortfolioRepositoryGetter);
    this.modelPortfolioAsset = this.createBelongsToAccessorFor('modelPortfolioAsset', modelPortfolioAssetRepositoryGetter);
    this.modelPortfolioProduct = this.createBelongsToAccessorFor('modelPortfolioProduct', modelPortfolioProductRepositoryGetter);
    this.instrumentCategory = this.createBelongsToAccessorFor('instrumentCategory', instrumentCategoryGetter);

    this.registerInclusionResolver('modelPortfolio', this.modelPortfolio.inclusionResolver);
    this.registerInclusionResolver('modelPortfolioAsset', this.modelPortfolioAsset.inclusionResolver);
    this.registerInclusionResolver('modelPortfolioProduct', this.modelPortfolioProduct.inclusionResolver);
    this.registerInclusionResolver('instrumentCategory', this.instrumentCategory.inclusionResolver);
  }
}
