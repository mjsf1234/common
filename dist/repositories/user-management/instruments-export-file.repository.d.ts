import { BaseLocalRepository, UserManagementAppFileRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { InstrumentsExportFile, InstrumentsExportFileRelations, UserManagementAppFile } from '../../models';
export declare class InstrumentsExportFileRepository extends BaseLocalRepository<InstrumentsExportFile, typeof InstrumentsExportFile.prototype.id, InstrumentsExportFileRelations> {
    readonly userManagementAppFile: BelongsToAccessor<UserManagementAppFile, typeof InstrumentsExportFile.prototype.id>;
    constructor(dataSource: juggler.DataSource, userManagementAppFileRepositoryGetter: Getter<UserManagementAppFileRepository>);
}
