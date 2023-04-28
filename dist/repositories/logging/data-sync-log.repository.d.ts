import { BaseLocalRepository } from '../../repositories';
import { juggler } from '@loopback/repository';
import { DataSyncLog, DataSyncLogRelations } from '../../models';
export declare class DataSyncLogRepository extends BaseLocalRepository<DataSyncLog, typeof DataSyncLog.prototype.id, DataSyncLogRelations> {
    constructor(dataSource: juggler.DataSource);
}
