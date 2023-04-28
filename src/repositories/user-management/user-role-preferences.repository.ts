import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {AppUserRoleMapping, UserRolePreferences, UserRolePreferencesRelations} from '../../models';
import {AppUserRoleMappingRepository} from './app-user-role-mapping.repository';

export class UserRolePreferencesRepository extends BaseLocalRepository<
  UserRolePreferences,
  typeof UserRolePreferences.prototype.id,
  UserRolePreferencesRelations
> {
  public readonly appUserRoleMapping: BelongsToAccessor<AppUserRoleMapping, typeof UserRolePreferences.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('AppUserRoleMappingRepository') appUserRoleMappingRepositoryGetter: Getter<AppUserRoleMappingRepository>
  ) {
    super(UserRolePreferences, dataSource);
    this.appUserRoleMapping = this.createBelongsToAccessorFor('appUserRoleMapping', appUserRoleMappingRepositoryGetter);

    this.registerInclusionResolver('appUserRoleMapping', this.appUserRoleMapping.inclusionResolver);
  }
}
