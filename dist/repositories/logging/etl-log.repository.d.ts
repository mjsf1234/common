import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { BulkUpload, EtlLog, EtlLogRelations } from '../../models';
import { BulkUploadRepository } from '../master-data';
export declare class EtlLogRepository extends BaseLocalRepository<EtlLog, typeof EtlLog.prototype.id, EtlLogRelations> {
    readonly bulkUpload: BelongsToAccessor<BulkUpload, typeof EtlLog.prototype.id>;
    constructor(dataSource: juggler.DataSource, bulkUploadRepositoryGetter: Getter<BulkUploadRepository>);
}
