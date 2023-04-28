import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {AppUser, UcicUpdateLog, UcicUpdateLogRelations} from '../../models';
import {AppUserRepository} from '../user-management';

export class UcicUpdateLogRepository extends BaseLocalRepository<UcicUpdateLog, typeof UcicUpdateLog.prototype.id, UcicUpdateLogRelations> {
  public readonly appUser: BelongsToAccessor<AppUser, typeof UcicUpdateLog.prototype.id>;

  constructor(dataSource: juggler.DataSource, @repository.getter('AppUserRepository') appUserRepositoryGetter: Getter<AppUserRepository>) {
    super(UcicUpdateLog, dataSource);
    this.appUser = this.createBelongsToAccessorFor('appUser', appUserRepositoryGetter);

    this.registerInclusionResolver('appUser', this.appUser.inclusionResolver);
  }
}
