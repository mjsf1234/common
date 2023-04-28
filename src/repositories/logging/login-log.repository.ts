import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {AppUser, LoginLog, LoginLogRelations} from '../../models';
import {AppUserRepository} from '../user-management';

export class LoginLogRepository extends BaseLocalRepository<LoginLog, typeof LoginLog.prototype.id, LoginLogRelations> {
  public readonly appUser: BelongsToAccessor<AppUser, typeof LoginLog.prototype.id>;

  constructor(dataSource: juggler.DataSource, @repository.getter('AppUserRepository') appUserRepositoryGetter: Getter<AppUserRepository>) {
    super(LoginLog, dataSource);
    this.appUser = this.createBelongsToAccessorFor('appUser', appUserRepositoryGetter);

    this.registerInclusionResolver('appUser', this.appUser.inclusionResolver);
  }
}
