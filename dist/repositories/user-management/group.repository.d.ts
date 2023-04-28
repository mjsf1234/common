import { BaseLocalRepository } from '../../repositories';
import { Getter, HasManyRepositoryFactory, juggler } from '@loopback/repository';
import { Family, Group, GroupRelations } from '../../models';
import { FamilyRepository } from './family.repository';
export declare class GroupRepository extends BaseLocalRepository<Group, typeof Group.prototype.id, GroupRelations> {
    readonly families: HasManyRepositoryFactory<Family, typeof Group.prototype.id>;
    constructor(dataSource: juggler.DataSource, familyRepositoryGetter: Getter<FamilyRepository>);
}
