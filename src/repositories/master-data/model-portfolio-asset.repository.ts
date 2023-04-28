import {AssetRepository, BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {Asset, ModelPortfolio, ModelPortfolioAsset, ModelPortfolioAssetRelations} from '../../models';
import {ModelPortfolioRepository} from './model-portfolio.repository';

export class ModelPortfolioAssetRepository extends BaseLocalRepository<
  ModelPortfolioAsset,
  typeof ModelPortfolioAsset.prototype.id,
  ModelPortfolioAssetRelations
> {
  public readonly modelPortfolio: BelongsToAccessor<ModelPortfolio, typeof ModelPortfolioAsset.prototype.id>;
  public readonly asset: BelongsToAccessor<Asset, typeof ModelPortfolioAsset.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('ModelPortfolioRepository') modelPortfolioRepositoryGetter: Getter<ModelPortfolioRepository>,
    @repository.getter('AssetRepository') assetRepositoryGetter: Getter<AssetRepository>
  ) {
    super(ModelPortfolioAsset, dataSource);
    this.modelPortfolio = this.createBelongsToAccessorFor('modelPortfolio', modelPortfolioRepositoryGetter);
    this.asset = this.createBelongsToAccessorFor('asset', assetRepositoryGetter);

    this.registerInclusionResolver('modelPortfolio', this.modelPortfolio.inclusionResolver);
    this.registerInclusionResolver('asset', this.asset.inclusionResolver);
  }
}
