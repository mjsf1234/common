import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {AppUser, UamIntegration, UamIntegrationRelations} from '../../models';
import {AppUserRepository} from './app-user.repository';
export class UamIntegrationRepository extends BaseLocalRepository<
  UamIntegration,
  typeof UamIntegration.prototype.id,
  UamIntegrationRelations
> {
  public readonly appUser: BelongsToAccessor<AppUser, typeof UamIntegration.prototype.id>;

  constructor(dataSource: juggler.DataSource, @repository.getter('AppUserRepository') appUserRepositoryGetter: Getter<AppUserRepository>) {
    super(UamIntegration, dataSource);
    this.appUser = this.createBelongsToAccessorFor('appUser', appUserRepositoryGetter);

    this.registerInclusionResolver('appUser', this.appUser.inclusionResolver);
  }
}
