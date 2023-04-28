import {
  BaseLocalRepository,
  InstrumentRepository,
  ModelPortfolioAssetRepository,
  ModelPortfolioCategoryRepository,
  ModelPortfolioProductRepository,
  ModelPortfolioRepository,
  RiskProfileRepository,
  ModelPortfolioAmountCappingRepository
} from '..';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {
  Instrument,
  ModelPortfolio,
  ModelPortfolioAsset,
  ModelPortfolioCategory,
  ModelPortfolioInstrument,
  ModelPortfolioInstrumentRelations,
  ModelPortfolioProduct,
  RiskProfile,
  ModelPortfolioAmountCapping  
} from '../..';

export class ModelPortfolioInstrumentRepository extends BaseLocalRepository<
  ModelPortfolioInstrument,
  typeof ModelPortfolioInstrument.prototype.id,
  ModelPortfolioInstrumentRelations
> {
  public readonly instrument: BelongsToAccessor<Instrument, typeof ModelPortfolioInstrument.prototype.id>;
  /*public readonly modelPortfolio: BelongsToAccessor<ModelPortfolio, typeof ModelPortfolioInstrument.prototype.id>;
  public readonly modelPortfolioCategory: BelongsToAccessor<ModelPortfolioCategory, typeof ModelPortfolioInstrument.prototype.id>;
  public readonly modelPortfolioAsset: BelongsToAccessor<ModelPortfolioAsset, typeof ModelPortfolioInstrument.prototype.id>;
  public readonly modelPortfolioProduct: BelongsToAccessor<ModelPortfolioProduct, typeof ModelPortfolioInstrument.prototype.id>;
  */
  public readonly riskProfile: BelongsToAccessor<RiskProfile, typeof ModelPortfolioInstrument.prototype.id>;
  public readonly modelPortfolioAmountCapping: BelongsToAccessor<ModelPortfolioAmountCapping, typeof ModelPortfolioInstrument.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('InstrumentRepository') instrumentRepositoryGetter: Getter<InstrumentRepository>,
    /*@repository.getter('ModelPortfolioRepository') modelPortfolioRepositoryGetter: Getter<ModelPortfolioRepository>,
    @repository.getter('ModelPortfolioAssetRepository') modelPortfolioAssetRepositoryGetter: Getter<ModelPortfolioAssetRepository>,
    @repository.getter('ModelPortfolioProductRepository') modelPortfolioProductRepositoryGetter: Getter<ModelPortfolioProductRepository>,
    @repository.getter('ModelPortfolioCategoryRepository') modelPortfolioCategoryRepositoryGetter: Getter<ModelPortfolioCategoryRepository>,
    */
    @repository.getter('RiskProfileRepository') riskProfileRepositoryGetter: Getter<RiskProfileRepository>,
    @repository.getter('ModelPortfolioAmountCappingRepository') modelPortfolioAmountCappingRepositoryGetter: Getter<ModelPortfolioAmountCappingRepository>,
  ) {
    super(ModelPortfolioInstrument, dataSource);
    this.instrument = this.createBelongsToAccessorFor('instrument', instrumentRepositoryGetter);
    /*this.modelPortfolio = this.createBelongsToAccessorFor('modelPortfolio', modelPortfolioRepositoryGetter);
    this.modelPortfolioAsset = this.createBelongsToAccessorFor('modelPortfolioAsset', modelPortfolioAssetRepositoryGetter);
    this.modelPortfolioProduct = this.createBelongsToAccessorFor('modelPortfolioProduct', modelPortfolioProductRepositoryGetter);
    this.modelPortfolioCategory = this.createBelongsToAccessorFor('modelPortfolioCategory', modelPortfolioCategoryRepositoryGetter);
    */
    this.riskProfile = this.createBelongsToAccessorFor('riskProfile', riskProfileRepositoryGetter);
    this.modelPortfolioAmountCapping = this.createBelongsToAccessorFor('modelPortfolioAmountCapping', modelPortfolioAmountCappingRepositoryGetter);


    this.registerInclusionResolver('instrument', this.instrument.inclusionResolver);
    /*this.registerInclusionResolver('modelPortfolio', this.modelPortfolio.inclusionResolver);
    this.registerInclusionResolver('modelPortfolioAsset', this.modelPortfolioAsset.inclusionResolver);
    this.registerInclusionResolver('modelPortfolioProduct', this.modelPortfolioProduct.inclusionResolver);
    this.registerInclusionResolver('modelPortfolioCategory', this.modelPortfolioCategory.inclusionResolver);
    */
    this.registerInclusionResolver('riskProfile', this.riskProfile.inclusionResolver);
    this.registerInclusionResolver('modelPortfolioAmountCapping', this.modelPortfolioAmountCapping.inclusionResolver);
  }
}
