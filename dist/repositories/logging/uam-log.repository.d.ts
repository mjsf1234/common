import { BaseLocalRepository } from '../../repositories';
import { juggler } from '@loopback/repository';
import { UAMLog, UAMLogRelations } from '../../models';
export declare class UAMLogRepository extends BaseLocalRepository<UAMLog, typeof UAMLog.prototype.id, UAMLogRelations> {
    constructor(dataSource: juggler.DataSource);
}
