import {BaseLocalRepository} from '../../repositories';
import {Getter, HasManyRepositoryFactory, juggler, repository} from '@loopback/repository';
import {Family, Group, GroupRelations} from '../../models';
import {FamilyRepository} from './family.repository';

export class GroupRepository extends BaseLocalRepository<Group, typeof Group.prototype.id, GroupRelations> {
  public readonly families: HasManyRepositoryFactory<Family, typeof Group.prototype.id>;

  constructor(dataSource: juggler.DataSource, @repository.getter('FamilyRepository') familyRepositoryGetter: Getter<FamilyRepository>) {
    super(Group, dataSource);

    this.families = this.createHasManyRepositoryFactoryFor('families', familyRepositoryGetter);

    this.registerInclusionResolver('families', this.families.inclusionResolver);
  }
}
