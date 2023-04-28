import {BaseLocalRepository, ModelPortfolioAssetRepository, ProductRepository} from '..';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {ModelPortfolio, ModelPortfolioAsset, ModelPortfolioProduct, ModelPortfolioProductRelations, Product} from '../..';
import {ModelPortfolioRepository} from './model-portfolio.repository';

export class ModelPortfolioProductRepository extends BaseLocalRepository<
  ModelPortfolioProduct,
  typeof ModelPortfolioProduct.prototype.id,
  ModelPortfolioProductRelations
> {
  public readonly modelPortfolio: BelongsToAccessor<ModelPortfolio, typeof ModelPortfolioProduct.prototype.id>;
  public readonly modelPortfolioAsset: BelongsToAccessor<ModelPortfolioAsset, typeof ModelPortfolioProduct.prototype.id>;
  public readonly product: BelongsToAccessor<Product, typeof ModelPortfolioProduct.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('ModelPortfolioRepository') modelPortfolioRepositoryGetter: Getter<ModelPortfolioRepository>,
    @repository.getter('ModelPortfolioAssetRepository') modelPortfolioAssetRepositoryGetter: Getter<ModelPortfolioAssetRepository>,
    @repository.getter('ProductRepository') productRepositoryGetter: Getter<ProductRepository>
  ) {
    super(ModelPortfolioProduct, dataSource);
    this.modelPortfolio = this.createBelongsToAccessorFor('modelPortfolio', modelPortfolioRepositoryGetter);
    this.modelPortfolioAsset = this.createBelongsToAccessorFor('modelPortfolioAsset', modelPortfolioAssetRepositoryGetter);
    this.product = this.createBelongsToAccessorFor('product', productRepositoryGetter);

    this.registerInclusionResolver('modelPortfolio', this.modelPortfolio.inclusionResolver);
    this.registerInclusionResolver('modelPortfolioAsset', this.modelPortfolioAsset.inclusionResolver);
    this.registerInclusionResolver('product', this.product.inclusionResolver);
  }
}
