import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { MasterDataAppFile, AppUser, BulkUpload, BulkUploadRelations } from '../../models';
import { AppUserRepository } from '../user-management';
import { MasterDataAppFileRepository } from './master-data-app-file.repository';
export declare class BulkUploadRepository extends BaseLocalRepository<BulkUpload, typeof BulkUpload.prototype.id, BulkUploadRelations> {
    readonly masterDataAppFile: BelongsToAccessor<MasterDataAppFile, typeof BulkUpload.prototype.id>;
    readonly appUser: BelongsToAccessor<AppUser, typeof BulkUpload.prototype.id>;
    constructor(dataSource: juggler.DataSource, masterDataAppFileRepositoryGetter: Getter<MasterDataAppFileRepository>, appUserRepositoryGetter: Getter<AppUserRepository>);
}
