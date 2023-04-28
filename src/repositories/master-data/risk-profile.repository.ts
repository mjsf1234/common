import {BaseLocalRepository /*ModelPortfolioRepository*/, ModelPortfolioRepository, ModelPortfolioInstrumentRepository} from '../../repositories';
import {Getter, HasManyRepositoryFactory, juggler, repository} from '@loopback/repository';
import {ModelPortfolio, ModelPortfolioInstrument, RiskProfile, RiskProfileRelations} from '../../models';

export class RiskProfileRepository extends BaseLocalRepository<RiskProfile, typeof RiskProfile.prototype.id, RiskProfileRelations> {
  public readonly modelPortfolios: HasManyRepositoryFactory<ModelPortfolio, typeof RiskProfile.prototype.id>;
  public readonly modelPortfolioInstruments: HasManyRepositoryFactory<ModelPortfolioInstrument, typeof RiskProfile.prototype.id>;
  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('ModelPortfolioRepository') modelPortfolioRepositoryGetter: Getter<ModelPortfolioRepository>,
    @repository.getter('ModelPortfolioInstrumentRepository') modelPortfolioInstrumentRepositoryGetter: Getter<ModelPortfolioInstrumentRepository>
  ) {
    super(RiskProfile, dataSource);
    this.modelPortfolios = this.createHasManyRepositoryFactoryFor('modelPortfolios', modelPortfolioRepositoryGetter);
    this.modelPortfolioInstruments = this.createHasManyRepositoryFactoryFor('modelPortfolioInstruments', modelPortfolioInstrumentRepositoryGetter);

    this.registerInclusionResolver('modelPortfolios', this.modelPortfolios.inclusionResolver);
    this.registerInclusionResolver('modelPortfolioInstruments', this.modelPortfolioInstruments.inclusionResolver);
  }
}
