import { BaseLocalRepository } from '..';
import { Getter, HasManyRepositoryFactory, juggler } from '@loopback/repository';
import { CommunicationMatrix, CommunicationTopic, CommunicationTopicRelations } from '../../models';
import { CommunicationMatrixRepository } from '../user-management/communication-matrix.repository';
export declare class CommunicationTopicRepository extends BaseLocalRepository<CommunicationTopic, typeof CommunicationTopic.prototype.id, CommunicationTopicRelations> {
    readonly communicationMatrix: HasManyRepositoryFactory<CommunicationMatrix, typeof CommunicationTopic.prototype.id>;
    constructor(dataSource: juggler.DataSource, communicationMatrixRepositoryGetter: Getter<CommunicationMatrixRepository>);
}
