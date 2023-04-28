import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, HasManyRepositoryFactory, juggler, repository} from '@loopback/repository';
import {Instrument, MutualFundDetails, MutualFundDetailsRelations, SystematicMethodSetting} from '../../models';
import {InstrumentRepository} from './instrument.repository';
import {SystematicMethodRepository} from '../transaction';
import {SystematicMethodSettingRepository} from './systematic-method-setting.repository';

export class MutualFundDetailsRepository extends BaseLocalRepository<
  MutualFundDetails,
  typeof MutualFundDetails.prototype.id,
  MutualFundDetailsRelations
> {
  public readonly instrument: BelongsToAccessor<Instrument, typeof MutualFundDetails.prototype.id>;
  public readonly directSchemeInstrument: BelongsToAccessor<Instrument, typeof MutualFundDetails.prototype.id>;
  public readonly primarySchemeInstrument: BelongsToAccessor<Instrument, typeof MutualFundDetails.prototype.id>;

  public readonly systematicMethodSettings: HasManyRepositoryFactory<SystematicMethodSetting, typeof MutualFundDetails.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('InstrumentRepository') instrumentRepositoryGetter: Getter<InstrumentRepository>,
    @repository.getter('InstrumentRepository') directSchemeInstrumentRepositoryGetter: Getter<InstrumentRepository>,
    @repository.getter('InstrumentRepository') primarySchemeInstrumentRepositoryGetter: Getter<InstrumentRepository>,
    @repository.getter('SystematicMethodSettingRepository')
    systematicMethodSettingRepositoryGetter: Getter<SystematicMethodSettingRepository>
  ) {
    super(MutualFundDetails, dataSource);
    this.instrument = this.createBelongsToAccessorFor('instrument', instrumentRepositoryGetter);
    this.directSchemeInstrument = this.createBelongsToAccessorFor('directSchemeInstrument', directSchemeInstrumentRepositoryGetter);
    this.primarySchemeInstrument = this.createBelongsToAccessorFor('primarySchemeInstrument', primarySchemeInstrumentRepositoryGetter);

    this.systematicMethodSettings = this.createHasManyRepositoryFactoryFor(
      'systematicMethodSettings',
      systematicMethodSettingRepositoryGetter
    );

    this.registerInclusionResolver('instrument', this.instrument.inclusionResolver);
    this.registerInclusionResolver('directSchemeInstrument', this.directSchemeInstrument.inclusionResolver);
    this.registerInclusionResolver('primarySchemeInstrument', this.primarySchemeInstrument.inclusionResolver);
    this.registerInclusionResolver('systematicMethodSettings', this.systematicMethodSettings.inclusionResolver);
  }
}
