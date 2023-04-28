import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {ActionLog, ActionLogRelations, AppUser} from '../../models';
import {AppUserRepository} from '../user-management';

export class ActionLogRepository extends BaseLocalRepository<ActionLog, typeof ActionLog.prototype.id, ActionLogRelations> {
  public readonly executedByAppUser: BelongsToAccessor<AppUser, typeof ActionLog.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('AppUserRepository')
    executedByAppUserRepositoryGetter: Getter<AppUserRepository>
  ) {
    super(ActionLog, dataSource);
    this.executedByAppUser = this.createBelongsToAccessorFor('executedByAppUser', executedByAppUserRepositoryGetter);
    this.registerInclusionResolver('executedByAppUser', this.executedByAppUser.inclusionResolver);
  }
}
