import { BaseLocalRepository } from '..';
import { BelongsToAccessor, Getter, HasManyRepositoryFactory, juggler } from '@loopback/repository';
import { AppUser, AuditTrail, Rta, AuditTrailFile, UserManagementAppFile } from '../../models';
import { RtaRepository } from '../master-data';
import { AppUserRepository, UserManagementAppFileRepository, AuditTrailRepository } from '.';
import { AuditTrailFileRelations } from '../../models/user-management/audit-trail-file';
export declare class AuditTrailFileRepository extends BaseLocalRepository<AuditTrailFile, typeof AuditTrailFile.prototype.id, AuditTrailFileRelations> {
    readonly rta: BelongsToAccessor<Rta, typeof AuditTrailFile.prototype.id>;
    readonly uploadedByAppUser: BelongsToAccessor<AppUser, typeof AuditTrailFile.prototype.id>;
    readonly uploadedFile: BelongsToAccessor<UserManagementAppFile, typeof AuditTrailFile.prototype.id>;
    readonly deletedByAppUser: BelongsToAccessor<AppUser, typeof AuditTrailFile.prototype.id>;
    readonly auditTrail: HasManyRepositoryFactory<AuditTrail, typeof AuditTrailFile.prototype.id>;
    readonly exportedFile: BelongsToAccessor<UserManagementAppFile, typeof AuditTrailFile.prototype.id>;
    constructor(dataSource: juggler.DataSource, rtaRepositoryGetter: Getter<RtaRepository>, uploadedByAppUserRepositoryGetter: Getter<AppUserRepository>, uploadedFileGetter: Getter<UserManagementAppFileRepository>, deletedByAppUserRepositoryGetter: Getter<AppUserRepository>, auditTrailRepositoryGetter: Getter<AuditTrailRepository>, exportedFileGetter: Getter<UserManagementAppFileRepository>);
}
