import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { MutualFundDetails, SystematicMethodSetting, SystematicMethodSettingRelations } from '../../models';
import { MutualFundDetailsRepository } from './mutual-fund-details.repository';
export declare class SystematicMethodSettingRepository extends BaseLocalRepository<SystematicMethodSetting, typeof SystematicMethodSetting.prototype.id, SystematicMethodSettingRelations> {
    readonly mutualFundDetails: BelongsToAccessor<MutualFundDetails, typeof SystematicMethodSetting.prototype.id>;
    constructor(dataSource: juggler.DataSource, mutualFundDetailsRepositoryGetter: Getter<MutualFundDetailsRepository>);
}
