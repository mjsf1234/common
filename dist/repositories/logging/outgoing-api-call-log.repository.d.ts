import { BaseLocalRepository } from '../../repositories';
import { juggler } from '@loopback/repository';
import { OutgoingApiCallLog, OutgoingApiCallLogRelations } from '../../models';
export declare class OutgoingApiCallLogRepository extends BaseLocalRepository<OutgoingApiCallLog, typeof OutgoingApiCallLog.prototype.id, OutgoingApiCallLogRelations> {
    constructor(dataSource: juggler.DataSource);
}
