import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {MutualFundDetails, SystematicMethodSetting, SystematicMethodSettingRelations} from '../../models';
import {MutualFundDetailsRepository} from './mutual-fund-details.repository';

export class SystematicMethodSettingRepository extends BaseLocalRepository<
  SystematicMethodSetting,
  typeof SystematicMethodSetting.prototype.id,
  SystematicMethodSettingRelations
> {
  public readonly mutualFundDetails: BelongsToAccessor<MutualFundDetails, typeof SystematicMethodSetting.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('MutualFundDetailsRepository') mutualFundDetailsRepositoryGetter: Getter<MutualFundDetailsRepository>
  ) {
    super(SystematicMethodSetting, dataSource);
    this.mutualFundDetails = this.createBelongsToAccessorFor('mutualFundDetails', mutualFundDetailsRepositoryGetter);

    this.registerInclusionResolver('mutualFundDetails', this.mutualFundDetails.inclusionResolver);
  }
}
