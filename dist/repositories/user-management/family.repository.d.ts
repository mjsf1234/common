import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, HasManyRepositoryFactory, juggler } from '@loopback/repository';
import { AppUser, Family, FamilyRelations, Group } from '../../models';
import { GroupRepository } from './group.repository';
import { AppUserRepository } from './app-user.repository';
export declare class FamilyRepository extends BaseLocalRepository<Family, typeof Family.prototype.id, FamilyRelations> {
    readonly group: BelongsToAccessor<Group, typeof Family.prototype.id>;
    readonly appUsers: HasManyRepositoryFactory<AppUser, typeof Family.prototype.id>;
    constructor(dataSource: juggler.DataSource, groupRepositoryGetter: Getter<GroupRepository>, appUserRepositoryGetter: Getter<AppUserRepository>);
}
