import { BaseLocalRepository, AccountAppFileMappingRepository, AuditTrailFileRepository, ServiceProviderAccountRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { AuditTrail, AuditLogRelations, AccountAppFileMapping, ServiceProviderAccount, AuditTrailFile } from '../../models';
export declare class AuditTrailRepository extends BaseLocalRepository<AuditTrail, typeof AuditTrail.prototype.id, AuditLogRelations> {
    readonly accountAppFileMapping: BelongsToAccessor<AccountAppFileMapping, typeof AuditTrail.prototype.id>;
    readonly serviceProviderAccount: BelongsToAccessor<ServiceProviderAccount, typeof AuditTrail.prototype.id>;
    readonly auditTrailFile: BelongsToAccessor<AuditTrailFile, typeof AuditTrail.prototype.id>;
    constructor(dataSource: juggler.DataSource, accountAppFileMappingRepositoryGetter: Getter<AccountAppFileMappingRepository>, serviceProviderAccountRepositoryGetter: Getter<ServiceProviderAccountRepository>, auditTrailFileRepositoryGetter: Getter<AuditTrailFileRepository>);
}
