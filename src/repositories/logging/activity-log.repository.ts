import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {ActivityLog, ActivityLogRelations, AppUser} from '../../models';
import {AppUserRepository} from '../user-management';

export class ActivityLogRepository extends BaseLocalRepository<ActivityLog, typeof ActivityLog.prototype.id, ActivityLogRelations> {
  public readonly appUser: BelongsToAccessor<AppUser, typeof ActivityLog.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('AppUserRepository')
    appUserRepositoryGetter: Getter<AppUserRepository>
  ) {
    super(ActivityLog, dataSource);
    this.appUser = this.createBelongsToAccessorFor('appUser', appUserRepositoryGetter);
    this.registerInclusionResolver('appUser', this.appUser.inclusionResolver);
  }
}
