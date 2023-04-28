import { AccountRepository, BaseLocalRepository, CommunicationTopicRepository } from '..';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { CommunicationMatrix, CommunicationMatrixRelations, CommunicationTopic, Account } from '../../models';
export declare class CommunicationMatrixRepository extends BaseLocalRepository<CommunicationMatrix, typeof CommunicationMatrix.prototype.id, CommunicationMatrixRelations> {
    readonly account: BelongsToAccessor<Account, typeof CommunicationMatrix.prototype.id>;
    readonly topic: BelongsToAccessor<CommunicationTopic, typeof CommunicationMatrix.prototype.id>;
    constructor(dataSource: juggler.DataSource, accountRepositoryGetter: Getter<AccountRepository>, communicationTopicRepositoryGetter: Getter<CommunicationTopicRepository>);
}
