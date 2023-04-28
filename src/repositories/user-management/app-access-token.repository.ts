import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {AppAccessToken, AppAccessTokenRelations, AppUser} from '../../models';
import {AppUserRepository} from './app-user.repository';

export class AppAccessTokenRepository extends BaseLocalRepository<
  AppAccessToken,
  typeof AppAccessToken.prototype.id,
  AppAccessTokenRelations
> {
  public readonly appUser: BelongsToAccessor<AppUser, typeof AppAccessToken.prototype.id>;

  constructor(dataSource: juggler.DataSource, @repository.getter('AppUserRepository') appUserRepositoryGetter: Getter<AppUserRepository>) {
    super(AppAccessToken, dataSource);
    this.appUser = this.createBelongsToAccessorFor('appUser', appUserRepositoryGetter);

    this.registerInclusionResolver('appUser', this.appUser.inclusionResolver);
  }
}
