import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, HasManyRepositoryFactory, juggler } from '@loopback/repository';
import { Instrument, MutualFundDetails, MutualFundDetailsRelations, SystematicMethodSetting } from '../../models';
import { InstrumentRepository } from './instrument.repository';
import { SystematicMethodSettingRepository } from './systematic-method-setting.repository';
export declare class MutualFundDetailsRepository extends BaseLocalRepository<MutualFundDetails, typeof MutualFundDetails.prototype.id, MutualFundDetailsRelations> {
    readonly instrument: BelongsToAccessor<Instrument, typeof MutualFundDetails.prototype.id>;
    readonly directSchemeInstrument: BelongsToAccessor<Instrument, typeof MutualFundDetails.prototype.id>;
    readonly primarySchemeInstrument: BelongsToAccessor<Instrument, typeof MutualFundDetails.prototype.id>;
    readonly systematicMethodSettings: HasManyRepositoryFactory<SystematicMethodSetting, typeof MutualFundDetails.prototype.id>;
    constructor(dataSource: juggler.DataSource, instrumentRepositoryGetter: Getter<InstrumentRepository>, directSchemeInstrumentRepositoryGetter: Getter<InstrumentRepository>, primarySchemeInstrumentRepositoryGetter: Getter<InstrumentRepository>, systematicMethodSettingRepositoryGetter: Getter<SystematicMethodSettingRepository>);
}
