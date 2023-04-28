import { BaseLocalRepository } from '..';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { AppUser, FamilyMapping, FamilyMappingRelations } from '../../models';
import { AppUserRepository } from './app-user.repository';
export declare class FamilyMappingRepository extends BaseLocalRepository<FamilyMapping, typeof FamilyMapping.prototype.id, FamilyMappingRelations> {
    readonly parentAppUser: BelongsToAccessor<AppUser, typeof FamilyMapping.prototype.id>;
    readonly childAppUser: BelongsToAccessor<AppUser, typeof FamilyMapping.prototype.id>;
    constructor(dataSource: juggler.DataSource, parentAppUserRepositoryGetter: Getter<AppUserRepository>, childAppUserRepositoryGetter: Getter<AppUserRepository>);
}
