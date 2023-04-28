import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { RiskProfile, InvestmentReturnProjection, InvestmentReturnProjectionRelations } from '../../models';
import { RiskProfileRepository } from './risk-profile.repository';
export declare class InvestmentReturnProjectionRepository extends BaseLocalRepository<InvestmentReturnProjection, typeof InvestmentReturnProjection.prototype.id, InvestmentReturnProjectionRelations> {
    readonly riskProfile: BelongsToAccessor<RiskProfile, typeof RiskProfile.prototype.id>;
    constructor(dataSource: juggler.DataSource, riskProfileRepositoryGetter: Getter<RiskProfileRepository>);
}
