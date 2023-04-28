import { BaseLocalRepository, ModelPortfolioRepository, ModelPortfolioInstrumentRepository } from '../../repositories';
import { Getter, HasManyRepositoryFactory, juggler } from '@loopback/repository';
import { ModelPortfolio, ModelPortfolioInstrument, RiskProfile, RiskProfileRelations } from '../../models';
export declare class RiskProfileRepository extends BaseLocalRepository<RiskProfile, typeof RiskProfile.prototype.id, RiskProfileRelations> {
    readonly modelPortfolios: HasManyRepositoryFactory<ModelPortfolio, typeof RiskProfile.prototype.id>;
    readonly modelPortfolioInstruments: HasManyRepositoryFactory<ModelPortfolioInstrument, typeof RiskProfile.prototype.id>;
    constructor(dataSource: juggler.DataSource, modelPortfolioRepositoryGetter: Getter<ModelPortfolioRepository>, modelPortfolioInstrumentRepositoryGetter: Getter<ModelPortfolioInstrumentRepository>);
}
