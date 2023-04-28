import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { AppRole, AppUser, AppUserRoleMapping, AppUserRoleMappingRelations } from '../../models';
import { AppUserRepository } from './app-user.repository';
import { AppRoleRepository } from './app-role.repository';
export declare class AppUserRoleMappingRepository extends BaseLocalRepository<AppUserRoleMapping, typeof AppUserRoleMapping.prototype.id, AppUserRoleMappingRelations> {
    readonly appUser: BelongsToAccessor<AppUser, typeof AppUserRoleMapping.prototype.id>;
    readonly appRole: BelongsToAccessor<AppRole, typeof AppUserRoleMapping.prototype.id>;
    constructor(dataSource: juggler.DataSource, appUserRepositoryGetter: Getter<AppUserRepository>, appRoleRepositoryGetter: Getter<AppRoleRepository>);
}
