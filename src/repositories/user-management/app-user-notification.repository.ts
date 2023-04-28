import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {AppUserNotification , AppUserNotificationRelations,AppUser} from '../../models';
import {AppUserRepository} from './app-user.repository';

export class AppUserNotificationRepository extends BaseLocalRepository<
  AppUserNotification,
  typeof AppUserNotification.prototype.id,
  AppUserNotificationRelations
> {
  public readonly appUser: BelongsToAccessor<AppUser, typeof AppUserNotification.prototype.id>;

  constructor(dataSource: juggler.DataSource, @repository.getter('AppUserRepository') appUserRepositoryGetter: Getter<AppUserRepository>) {
    super(AppUserNotification, dataSource);
    this.appUser = this.createBelongsToAccessorFor('appUser', appUserRepositoryGetter);

    this.registerInclusionResolver('appUser', this.appUser.inclusionResolver);
  }
}
