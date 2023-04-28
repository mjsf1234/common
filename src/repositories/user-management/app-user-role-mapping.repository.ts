import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {AppRole, AppUser, AppUserRoleMapping, AppUserRoleMappingRelations} from '../../models';
import {AppUserRepository} from './app-user.repository';
import {AppRoleRepository} from './app-role.repository';

export class AppUserRoleMappingRepository extends BaseLocalRepository<
  AppUserRoleMapping,
  typeof AppUserRoleMapping.prototype.id,
  AppUserRoleMappingRelations
> {
  public readonly appUser: BelongsToAccessor<AppUser, typeof AppUserRoleMapping.prototype.id>;
  public readonly appRole: BelongsToAccessor<AppRole, typeof AppUserRoleMapping.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('AppUserRepository') appUserRepositoryGetter: Getter<AppUserRepository>,
    @repository.getter('AppRoleRepository') appRoleRepositoryGetter: Getter<AppRoleRepository>
  ) {
    super(AppUserRoleMapping, dataSource);
    this.appUser = this.createBelongsToAccessorFor('appUser', appUserRepositoryGetter);
    this.appRole = this.createBelongsToAccessorFor('appRole', appRoleRepositoryGetter);

    this.registerInclusionResolver('appUser', this.appUser.inclusionResolver);
    this.registerInclusionResolver('appRole', this.appRole.inclusionResolver);
  }
}
