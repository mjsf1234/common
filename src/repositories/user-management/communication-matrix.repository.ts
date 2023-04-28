import {AccountRepository, BaseLocalRepository, CommunicationTopicRepository} from '..';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {CommunicationMatrix, CommunicationMatrixRelations, AppUser, CommunicationTopic, Account} from '../../models';

export class CommunicationMatrixRepository extends BaseLocalRepository<
  CommunicationMatrix,
  typeof CommunicationMatrix.prototype.id,
  CommunicationMatrixRelations
> {
  public readonly account: BelongsToAccessor<Account, typeof CommunicationMatrix.prototype.id>;
  public readonly topic: BelongsToAccessor<CommunicationTopic, typeof CommunicationMatrix.prototype.id>;

  constructor(dataSource: juggler.DataSource,
    @repository.getter('AccountRepository') accountRepositoryGetter: Getter<AccountRepository>,
    @repository.getter('CommunicationTopicRepository') communicationTopicRepositoryGetter: Getter<CommunicationTopicRepository>) {
    super(CommunicationMatrix, dataSource);
    this.account = this.createBelongsToAccessorFor('account', accountRepositoryGetter);
    this.topic = this.createBelongsToAccessorFor('communicationTopic', communicationTopicRepositoryGetter);

    this.registerInclusionResolver('account', this.account.inclusionResolver);
    this.registerInclusionResolver('communicationTopic', this.topic.inclusionResolver);
  }
}
