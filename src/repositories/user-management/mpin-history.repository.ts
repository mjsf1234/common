import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {
  AppUser,
  MpinHistory,
  MpinHistoryRelations
} from '../../models';
import {AppUserRepository} from './app-user.repository';

export class MpinHistoryRepository extends BaseLocalRepository<
MpinHistory,
  typeof MpinHistory.prototype.id,
  MpinHistoryRelations
> {
  public readonly appUser: BelongsToAccessor<AppUser, typeof MpinHistory.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('AppUserRepository') appUserRepositoryGetter: Getter<AppUserRepository>
  ) {
    super(MpinHistory, dataSource);
    this.appUser = this.createBelongsToAccessorFor('appUser', appUserRepositoryGetter);

    this.registerInclusionResolver('appUser', this.appUser.inclusionResolver);
  }
}
