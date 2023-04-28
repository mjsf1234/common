import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {AppUser, Feedback, FeedbackRelations} from '../../models';
import {AppUserRepository} from './app-user.repository';

export class FeedbackRepository extends BaseLocalRepository<Feedback, typeof Feedback.prototype.id, FeedbackRelations> {
  public readonly appUser: BelongsToAccessor<AppUser, typeof Feedback.prototype.id>;

  constructor(dataSource: juggler.DataSource, @repository.getter('AppUserRepository') appUserRepositoryGetter: Getter<AppUserRepository>) {
    super(Feedback, dataSource);
    this.appUser = this.createBelongsToAccessorFor('appUser', appUserRepositoryGetter);

    this.registerInclusionResolver('appUser', this.appUser.inclusionResolver);
  }
}
