import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {AppUser, Operation, OperationRelations} from '../../models';
import {AppUserRepository} from './app-user.repository';

export class OperationRepository extends BaseLocalRepository<Operation, typeof Operation.prototype.id, OperationRelations> {
  public readonly appUser: BelongsToAccessor<AppUser, typeof Operation.prototype.id>;

  constructor(dataSource: juggler.DataSource, @repository.getter('AppUserRepository') appUserRepositoryGetter: Getter<AppUserRepository>) {
    super(Operation, dataSource);
    this.appUser = this.createBelongsToAccessorFor('appUser', appUserRepositoryGetter);

    this.registerInclusionResolver('appUser', this.appUser.inclusionResolver);
  }
}
