import {BaseLocalRepository} from '..';
import {Getter, HasManyRepositoryFactory, juggler, repository} from '@loopback/repository';
import {CommunicationMatrix, CommunicationTopic, CommunicationTopicRelations} from '../../models';
import {CommunicationMatrixRepository} from '../user-management/communication-matrix.repository';
export class CommunicationTopicRepository extends BaseLocalRepository<CommunicationTopic, typeof CommunicationTopic.prototype.id, CommunicationTopicRelations> {

  public readonly communicationMatrix: HasManyRepositoryFactory<CommunicationMatrix, typeof CommunicationTopic.prototype.id>;
  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('CommunicationMatrixRepository') communicationMatrixRepositoryGetter: Getter<CommunicationMatrixRepository>
  ) {
    super(CommunicationTopic, dataSource);
    this.communicationMatrix = this.createHasManyRepositoryFactoryFor('communicationMatrix', communicationMatrixRepositoryGetter);
    this.registerInclusionResolver('communicationMatrix', this.communicationMatrix.inclusionResolver);
  }
}
