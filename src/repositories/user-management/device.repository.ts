import {AppVersionRepository, BaseLocalRepository, IdcomDetailsRepository} from '../../repositories';
import {BelongsToAccessor, Getter, HasManyRepositoryFactory, juggler, repository} from '@loopback/repository';
import {AppUser, PreLoginUser, Device, DeviceRelations, AppVersion, IdcomDetails} from '../../models';
import {AppUserRepository} from './app-user.repository';
import {PreLoginUserRepository} from './pre-login-user.repository';

export class DeviceRepository extends BaseLocalRepository<Device, typeof Device.prototype.id, DeviceRelations> {
  public readonly appUser: BelongsToAccessor<AppUser, typeof Device.prototype.id>;
  public readonly preLoginUser: BelongsToAccessor<PreLoginUser, typeof Device.prototype.id>;
  public readonly appVersion: BelongsToAccessor<AppVersion, typeof Device.prototype.id>;
  public readonly idcomDetails: HasManyRepositoryFactory<IdcomDetails, typeof Device.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('AppUserRepository') appUserRepositoryGetter: Getter<AppUserRepository>,
    @repository.getter('PreLoginUserRepository') preLoginUserRepositoryGetter: Getter<PreLoginUserRepository>,
    @repository.getter('AppVersionRepository') appVersionRepositoryGetter: Getter<AppVersionRepository>,
    @repository.getter('IdcomDetailsRepository') idcomDetailsRepositoryGetter: Getter<IdcomDetailsRepository>
  ) {
    super(Device, dataSource);
    this.appUser = this.createBelongsToAccessorFor('appUser', appUserRepositoryGetter);
    this.preLoginUser = this.createBelongsToAccessorFor('preLoginUser', preLoginUserRepositoryGetter);
    this.appVersion = this.createBelongsToAccessorFor('appVersion', appVersionRepositoryGetter);
    this.idcomDetails = this.createHasManyRepositoryFactoryFor('idcomDetails', idcomDetailsRepositoryGetter);

    this.registerInclusionResolver('appUser', this.appUser.inclusionResolver);
    this.registerInclusionResolver('preLoginUser', this.preLoginUser.inclusionResolver);
    this.registerInclusionResolver('appVersion', this.appVersion.inclusionResolver);
    this.registerInclusionResolver('idcomDetails', this.idcomDetails.inclusionResolver);
  }
}
