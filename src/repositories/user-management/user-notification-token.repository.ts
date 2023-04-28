import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {UserNotificationToken, UserNotificationTokenRelations, AppUser} from '../../models';
import {AppUserRepository} from './app-user.repository';

export class UserNotificationTokenRepository extends BaseLocalRepository<
  UserNotificationToken,
  typeof UserNotificationToken.prototype.id,
  UserNotificationTokenRelations
> {
  public readonly appUser: BelongsToAccessor<AppUser, typeof UserNotificationToken.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('AppUserRepository') appUserRepositoryGetter: Getter<AppUserRepository>
  ) {
    super(UserNotificationToken, dataSource);
    this.appUser = this.createBelongsToAccessorFor('appUser', appUserRepositoryGetter);

    this.registerInclusionResolver('appUser', this.appUser.inclusionResolver);
  }
}
