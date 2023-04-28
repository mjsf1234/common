import { BaseLocalRepository, InstrumentRepository, RiskProfileRepository, ModelPortfolioAmountCappingRepository } from '..';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { Instrument, ModelPortfolioInstrument, ModelPortfolioInstrumentRelations, RiskProfile, ModelPortfolioAmountCapping } from '../..';
export declare class ModelPortfolioInstrumentRepository extends BaseLocalRepository<ModelPortfolioInstrument, typeof ModelPortfolioInstrument.prototype.id, ModelPortfolioInstrumentRelations> {
    readonly instrument: BelongsToAccessor<Instrument, typeof ModelPortfolioInstrument.prototype.id>;
    readonly riskProfile: BelongsToAccessor<RiskProfile, typeof ModelPortfolioInstrument.prototype.id>;
    readonly modelPortfolioAmountCapping: BelongsToAccessor<ModelPortfolioAmountCapping, typeof ModelPortfolioInstrument.prototype.id>;
    constructor(dataSource: juggler.DataSource, instrumentRepositoryGetter: Getter<InstrumentRepository>, riskProfileRepositoryGetter: Getter<RiskProfileRepository>, modelPortfolioAmountCappingRepositoryGetter: Getter<ModelPortfolioAmountCappingRepository>);
}
