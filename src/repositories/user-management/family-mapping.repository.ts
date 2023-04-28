import {BaseLocalRepository} from '..';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {AppUser, FamilyMapping, FamilyMappingRelations} from '../../models';
import {AppUserRepository} from './app-user.repository';

export class FamilyMappingRepository extends BaseLocalRepository<FamilyMapping, typeof FamilyMapping.prototype.id, FamilyMappingRelations> {

  public readonly parentAppUser: BelongsToAccessor<AppUser, typeof FamilyMapping.prototype.id>;
  public readonly childAppUser: BelongsToAccessor<AppUser, typeof FamilyMapping.prototype.id>;  

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('AppUserRepository') parentAppUserRepositoryGetter: Getter<AppUserRepository>,
    @repository.getter('AppUserRepository') childAppUserRepositoryGetter: Getter<AppUserRepository>
  ) {
    super(FamilyMapping, dataSource);

    this.parentAppUser = this.createBelongsToAccessorFor('parentAppUser', parentAppUserRepositoryGetter);
    this.childAppUser = this.createBelongsToAccessorFor('childAppUser', childAppUserRepositoryGetter);

    this.registerInclusionResolver('parentAppUser', this.parentAppUser.inclusionResolver);
    this.registerInclusionResolver('childAppUser', this.childAppUser.inclusionResolver);
  }
}
