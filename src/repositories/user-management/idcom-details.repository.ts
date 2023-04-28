import {AppUserRepository, BaseLocalRepository, DeviceRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {IdcomDetails, AppUser, Device, IdcomDetailsRelations} from '../../models';

export class IdcomDetailsRepository extends BaseLocalRepository<IdcomDetails, typeof IdcomDetails.prototype.id, IdcomDetailsRelations> {
  public readonly appUser: BelongsToAccessor<AppUser, typeof IdcomDetails.prototype.id>;
  public readonly device: BelongsToAccessor<Device, typeof IdcomDetails.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('AppUserRepository') appUserRepositoryGetter: Getter<AppUserRepository>,
    @repository.getter('DeviceRepository') deviceRepositoryGetter: Getter<DeviceRepository>
  ) {
    super(IdcomDetails, dataSource);
    this.appUser = this.createBelongsToAccessorFor('appUser', appUserRepositoryGetter);
    this.device = this.createBelongsToAccessorFor('device', deviceRepositoryGetter);

    this.registerInclusionResolver('appUser', this.appUser.inclusionResolver);
    this.registerInclusionResolver('device', this.device.inclusionResolver);
  }
}
