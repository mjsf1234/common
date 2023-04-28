import {BaseLocalRepository /*ModelPortfolioRepository*/, ModelPortfolioRepository} from '../../repositories';
import {Getter, HasManyRepositoryFactory, juggler, repository} from '@loopback/repository';
import {ModelPortfolio, Tenure, TenureRelations} from '../../models';

export class TenureRepository extends BaseLocalRepository<Tenure, typeof Tenure.prototype.id, TenureRelations> {
  public readonly modelPortfolios: HasManyRepositoryFactory<ModelPortfolio, typeof Tenure.prototype.id>;
  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('ModelPortfolioRepository') modelPortfolioRepositoryGetter: Getter<ModelPortfolioRepository>
  ) {
    super(Tenure, dataSource);
    this.modelPortfolios = this.createHasManyRepositoryFactoryFor('modelPortfolios', modelPortfolioRepositoryGetter);

    this.registerInclusionResolver('modelPortfolios', this.modelPortfolios.inclusionResolver);
  }
}
