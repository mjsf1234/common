import { BaseLocalRepository } from '../../repositories';
import { juggler } from '@loopback/repository';
import { MessagingLog, MessagingLogRelations } from '../../models';
export declare class MessagingLogRepository extends BaseLocalRepository<MessagingLog, typeof MessagingLog.prototype.id, MessagingLogRelations> {
    constructor(dataSource: juggler.DataSource);
}
