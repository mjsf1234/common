import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { AppUserRoleMapping, UserRolePreferences, UserRolePreferencesRelations } from '../../models';
import { AppUserRoleMappingRepository } from './app-user-role-mapping.repository';
export declare class UserRolePreferencesRepository extends BaseLocalRepository<UserRolePreferences, typeof UserRolePreferences.prototype.id, UserRolePreferencesRelations> {
    readonly appUserRoleMapping: BelongsToAccessor<AppUserRoleMapping, typeof UserRolePreferences.prototype.id>;
    constructor(dataSource: juggler.DataSource, appUserRoleMappingRepositoryGetter: Getter<AppUserRoleMappingRepository>);
}
