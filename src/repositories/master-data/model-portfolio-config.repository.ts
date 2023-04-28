import {
    BaseLocalRepository,
    ModelPortfolioAmountCappingRepository,
    ModelPortfolioRepository
  } from '..';
  import {BelongsToAccessor, Getter, HasManyRepositoryFactory, juggler, repository} from '@loopback/repository';
  import {
    ModelPortfolioConfig,
    ModelPortfolioConfigRelations,
    ModelPortfolioAmountCapping,
    ModelPortfolio
  } from '../..';
  
  export class ModelPortfolioConfigRepository extends BaseLocalRepository<
  ModelPortfolioConfig,
    typeof ModelPortfolioConfig.prototype.id,
    ModelPortfolioConfigRelations
  > {
    [x: string]: any;
    public readonly modelPortfolio: BelongsToAccessor<ModelPortfolio, typeof ModelPortfolioConfig.prototype.id>;
    public readonly modelPortfolioAmountCapping: BelongsToAccessor<ModelPortfolioAmountCapping, typeof ModelPortfolioConfig.prototype.id>;
    constructor(
      dataSource: juggler.DataSource,
      @repository.getter('ModelPortfolioRepository') modelPortfolioRepositoryGetter: Getter<ModelPortfolioRepository>,
      @repository.getter('ModelPortfolioAmountCappingRepository') modelPortfolioAmountCappingRepositoryGetter: Getter<ModelPortfolioAmountCappingRepository>
    ) {
      super(ModelPortfolioConfig, dataSource);
      this.modelPortfolio = this.createBelongsToAccessorFor('modelPortfolio', modelPortfolioRepositoryGetter);
      this.modelPortfolioAmountCapping = this.createBelongsToAccessorFor('modelPortfolioAmountCapping', modelPortfolioAmountCappingRepositoryGetter);
  
      this.registerInclusionResolver('modelPortfolio', this.modelPortfolio.inclusionResolver);
      this.registerInclusionResolver('modelPortfolioAmountCapping', this.modelPortfolioAmountCapping.inclusionResolver);
    }
  }
  