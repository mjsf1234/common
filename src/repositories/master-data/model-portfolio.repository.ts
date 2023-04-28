import {
  BaseLocalRepository,
  ModelPortfolioAssetRepository,
  ModelPortfolioCategoryRepository,
  ModelPortfolioInstrumentRepository,
  ModelPortfolioProductRepository,
  RiskProfileRepository,
  TenureRepository,
  ModelPortfolioAmountCappingRepository,
  ModelPortfolioConfigRepository
} from '..';
import {BelongsToAccessor, Getter, HasManyRepositoryFactory, juggler, repository} from '@loopback/repository';
import {
  ModelPortfolio,
  ModelPortfolioAsset,
  ModelPortfolioCategory,
  ModelPortfolioInstrument,
  ModelPortfolioProduct,
  ModelPortfolioRelations,
  RiskProfile,
  Tenure,
  ModelPortfolioAmountCapping,
  ModelPortfolioConfig
} from '../..';

export class ModelPortfolioRepository extends BaseLocalRepository<
  ModelPortfolio,
  typeof ModelPortfolio.prototype.id,
  ModelPortfolioRelations
> {
  [x: string]: any;
  public readonly tenure: BelongsToAccessor<Tenure, typeof ModelPortfolio.prototype.id>;
  public readonly riskProfile: BelongsToAccessor<RiskProfile, typeof ModelPortfolio.prototype.id>;
  public readonly modelPortfolioCategories: HasManyRepositoryFactory<ModelPortfolioCategory, typeof ModelPortfolio.prototype.id>;
  public readonly modelPortfolioAssets: HasManyRepositoryFactory<ModelPortfolioAsset, typeof ModelPortfolio.prototype.id>;
  public readonly modelPortfolioProducts: HasManyRepositoryFactory<ModelPortfolioProduct, typeof ModelPortfolio.prototype.id>;
  //public readonly modelPortfolioInstruments: HasManyRepositoryFactory<ModelPortfolioInstrument, typeof ModelPortfolio.prototype.id>;
  public readonly modelPortfolioAmountCapping: BelongsToAccessor<ModelPortfolioAmountCapping, typeof ModelPortfolio.prototype.id>;
  public readonly modelPortfolioConfig: HasManyRepositoryFactory<ModelPortfolioConfig, typeof ModelPortfolio.prototype.id>;
  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('TenureRepository') tenureRepositoryGetter: Getter<TenureRepository>,
    @repository.getter('RiskProfileRepository') riskProfileRepositoryGetter: Getter<RiskProfileRepository>,
    @repository.getter('ModelPortfolioAssetRepository') modelPortfolioAssetRepositoryGetter: Getter<ModelPortfolioAssetRepository>,
    @repository.getter('ModelPortfolioProductRepository') modelPortfolioProductRepositoryGetter: Getter<ModelPortfolioProductRepository>,
    @repository.getter('ModelPortfolioCategoryRepository') modelPortfolioCategoryRepositoryGetter: Getter<ModelPortfolioCategoryRepository>,
    @repository.getter('ModelPortfolioAmountCappingRepository') modelPortfolioAmountCappingRepositoryGetter: Getter<ModelPortfolioAmountCappingRepository>,
    @repository.getter('ModelPortfolioConfigRepository') modelPortfolioConfigRepositoryGetter: Getter<ModelPortfolioConfigRepository>
    //@repository.getter('ModelPortfolioInstrumentRepository') modelPortfolioInstrumentRepositoryGetter: Getter<ModelPortfolioInstrumentRepository>
  ) {
    super(ModelPortfolio, dataSource);
    this.tenure = this.createBelongsToAccessorFor('tenure', tenureRepositoryGetter);
    this.riskProfile = this.createBelongsToAccessorFor('riskProfile', riskProfileRepositoryGetter);
    this.modelPortfolioAssets = this.createHasManyRepositoryFactoryFor('modelPortfolioAssets', modelPortfolioAssetRepositoryGetter);
    this.modelPortfolioProducts = this.createHasManyRepositoryFactoryFor('modelPortfolioProducts', modelPortfolioProductRepositoryGetter);
    this.modelPortfolioCategories = this.createHasManyRepositoryFactoryFor('modelPortfolioCategories', modelPortfolioCategoryRepositoryGetter);
    //this.modelPortfolioInstruments = this.createHasManyRepositoryFactoryFor('modelPortfolioInstruments', modelPortfolioInstrumentRepositoryGetter);
    this.modelPortfolioAmountCapping = this.createBelongsToAccessorFor('modelPortfolioAmountCapping', modelPortfolioAmountCappingRepositoryGetter);
    this.modelPortfolioConfig = this.createHasManyRepositoryFactoryFor('modelPortfolioConfig', modelPortfolioConfigRepositoryGetter);

    this.registerInclusionResolver('tenure', this.tenure.inclusionResolver);
    this.registerInclusionResolver('riskProfile', this.riskProfile.inclusionResolver);
    this.registerInclusionResolver('modelPortfolioAssets', this.modelPortfolioAssets.inclusionResolver);
    this.registerInclusionResolver('modelPortfolioProducts', this.modelPortfolioProducts.inclusionResolver);
    this.registerInclusionResolver('modelPortfolioCategories', this.modelPortfolioCategories.inclusionResolver);
    //this.registerInclusionResolver('modelPortfolioInstruments', this.modelPortfolioInstruments.inclusionResolver);
    this.registerInclusionResolver('modelPortfolioAmountCapping', this.modelPortfolioAmountCapping.inclusionResolver);
    this.registerInclusionResolver('modelPortfolioConfig', this.modelPortfolioConfig.inclusionResolver);
  }
}
