import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {AdobeNtbUser, AdobeNtbUserRelations, AppUser} from '../../models';
import {AppUserRepository} from './app-user.repository';

export class AdobeNtbRepository extends BaseLocalRepository<
AdobeNtbUser,
  typeof AdobeNtbUser.prototype.id,
  AdobeNtbUserRelations
> {
  public readonly appUser: BelongsToAccessor<AppUser, typeof AdobeNtbUser.prototype.id>;

  constructor(dataSource: juggler.DataSource, @repository.getter('AppUserRepository') appUserRepositoryGetter: Getter<AppUserRepository>) {
    super(AdobeNtbUser, dataSource);
    this.appUser = this.createBelongsToAccessorFor('appUser', appUserRepositoryGetter);

    this.registerInclusionResolver('appUser', this.appUser.inclusionResolver);
  }
}
