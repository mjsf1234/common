import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { AppUser, AuditLog, AuditLogRelations } from '../../models';
import { AppUserRepository } from '../user-management';
export declare class AuditLogRepository extends BaseLocalRepository<AuditLog, typeof AuditLog.prototype.id, AuditLogRelations> {
    readonly changedByAppUser: BelongsToAccessor<AppUser, typeof AuditLog.prototype.id>;
    constructor(dataSource: juggler.DataSource, appUserRepositoryGetter: Getter<AppUserRepository>);
}
