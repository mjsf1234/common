import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, HasManyRepositoryFactory, juggler, repository} from '@loopback/repository';
import {AppUser, Family, FamilyRelations, Group} from '../../models';
import {GroupRepository} from './group.repository';
import {AppUserRepository} from './app-user.repository';

export class FamilyRepository extends BaseLocalRepository<Family, typeof Family.prototype.id, FamilyRelations> {
  public readonly group: BelongsToAccessor<Group, typeof Family.prototype.id>;

  public readonly appUsers: HasManyRepositoryFactory<AppUser, typeof Family.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('GroupRepository') groupRepositoryGetter: Getter<GroupRepository>,
    @repository.getter('AppUserRepository') appUserRepositoryGetter: Getter<AppUserRepository>
  ) {
    super(Family, dataSource);
    this.group = this.createBelongsToAccessorFor('group', groupRepositoryGetter);

    this.appUsers = this.createHasManyRepositoryFactoryFor('appUsers', appUserRepositoryGetter);

    this.registerInclusionResolver('group', this.group.inclusionResolver);
    this.registerInclusionResolver('appUsers', this.appUsers.inclusionResolver);
  }
}
