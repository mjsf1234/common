import { BaseLocalRepository } from '../../repositories';
import { juggler } from '@loopback/repository';
import { IncomingApiCallLog, IncomingApiCallLogRelations } from '../../models';
export declare class IncomingApiCallLogRepository extends BaseLocalRepository<IncomingApiCallLog, typeof IncomingApiCallLog.prototype.id, IncomingApiCallLogRelations> {
    constructor(dataSource: juggler.DataSource);
}
