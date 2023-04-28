import {AppUserRepository, BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {AppUser, HTTPAccessLog, HTTPAccessLogRelations} from '../../models';

export class HTTPAccessLogRepository extends BaseLocalRepository<HTTPAccessLog, typeof HTTPAccessLog.prototype.id, HTTPAccessLogRelations> {
  public readonly appUser: BelongsToAccessor<AppUser, typeof HTTPAccessLog.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('AppUserRepository')
    appUserRepositoryGetter: Getter<AppUserRepository>
  ) {
    super(HTTPAccessLog, dataSource);

    this.appUser = this.createBelongsToAccessorFor('appUser', appUserRepositoryGetter);
    this.registerInclusionResolver('appUser', this.appUser.inclusionResolver);
  }
}
