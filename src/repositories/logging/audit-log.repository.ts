import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {AppUser, AuditLog, AuditLogRelations} from '../../models';
import {AppUserRepository} from '../user-management';

export class AuditLogRepository extends BaseLocalRepository<AuditLog, typeof AuditLog.prototype.id, AuditLogRelations> {
  public readonly changedByAppUser: BelongsToAccessor<AppUser, typeof AuditLog.prototype.id>;

  constructor(dataSource: juggler.DataSource, @repository.getter('AppUserRepository') appUserRepositoryGetter: Getter<AppUserRepository>) {
    super(AuditLog, dataSource);
    this.changedByAppUser = this.createBelongsToAccessorFor('changedByAppUser', appUserRepositoryGetter);

    this.registerInclusionResolver('changedByAppUser', this.changedByAppUser.inclusionResolver);
  }
}
