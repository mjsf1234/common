import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {RiskProfile, InvestmentReturnProjection, InvestmentReturnProjectionRelations} from '../../models';
import { RiskProfileRepository } from './risk-profile.repository';


export class InvestmentReturnProjectionRepository extends BaseLocalRepository<
  InvestmentReturnProjection,
  typeof InvestmentReturnProjection.prototype.id,
  InvestmentReturnProjectionRelations
> {

  public readonly riskProfile: BelongsToAccessor<RiskProfile, typeof RiskProfile.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('RiskProfileRepository') riskProfileRepositoryGetter: Getter<RiskProfileRepository>

  ) {
    super(InvestmentReturnProjection, dataSource);
    this.riskProfile = this.createBelongsToAccessorFor('riskProfile', riskProfileRepositoryGetter);

    this.registerInclusionResolver('riskProfile', this.riskProfile.inclusionResolver);
  }
}
