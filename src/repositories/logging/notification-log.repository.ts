import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {AppUser, Device, NotificationLog, NotificationLogRelations} from '../../models';
import {AppUserRepository, DeviceRepository} from '../user-management';

export class NotificationLogRepository extends BaseLocalRepository<
  NotificationLog,
  typeof NotificationLog.prototype.id,
  NotificationLogRelations
> {
  public readonly appUser: BelongsToAccessor<AppUser, typeof NotificationLog.prototype.id>;
  public readonly device: BelongsToAccessor<Device, typeof NotificationLog.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('AppUserRepository') appUserRepositoryGetter: Getter<AppUserRepository>,
    @repository.getter('DeviceRepository') deviceRepositoryGetter: Getter<DeviceRepository>
  ) {
    super(NotificationLog, dataSource);
    this.appUser = this.createBelongsToAccessorFor('appUser', appUserRepositoryGetter);
    this.device = this.createBelongsToAccessorFor('device', deviceRepositoryGetter);

    this.registerInclusionResolver('appUser', this.appUser.inclusionResolver);
    this.registerInclusionResolver('device', this.device.inclusionResolver);
  }
}
