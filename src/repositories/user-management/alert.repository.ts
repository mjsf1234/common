import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {Alert, AlertRelations, AppUser} from '../../models';
import {AppUserRepository} from './app-user.repository';

export class AlertRepository extends BaseLocalRepository<Alert, typeof Alert.prototype.id, AlertRelations> {
  public readonly appUser: BelongsToAccessor<AppUser, typeof Alert.prototype.id>;

  constructor(dataSource: juggler.DataSource, @repository.getter('AppUserRepository') appUserRepositoryGetter: Getter<AppUserRepository>) {
    super(Alert, dataSource);
    this.appUser = this.createBelongsToAccessorFor('appUser', appUserRepositoryGetter);

    this.registerInclusionResolver('appUser', this.appUser.inclusionResolver);
  }
}
