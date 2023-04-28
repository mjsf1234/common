import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, HasOneRepositoryFactory, Getter, juggler } from '@loopback/repository';
import { Account, AccountAppFileMapping, AccountAppFileMappingRelations, UserManagementAppFile, AuditTrail } from '../../models';
import { AccountRepository } from './account.repository';
import { UserManagementAppFileRepository } from './user-management-app-file.repository';
import { AuditTrailRepository } from './audit-trail';
export declare class AccountAppFileMappingRepository extends BaseLocalRepository<AccountAppFileMapping, typeof AccountAppFileMapping.prototype.id, AccountAppFileMappingRelations> {
    readonly account: BelongsToAccessor<Account, typeof AccountAppFileMapping.prototype.id>;
    readonly userManagementAppFile: BelongsToAccessor<UserManagementAppFile, typeof AccountAppFileMapping.prototype.id>;
    readonly auditTrail: HasOneRepositoryFactory<AuditTrail, typeof AccountAppFileMapping.prototype.id>;
    constructor(dataSource: juggler.DataSource, accountRepositoryGetter: Getter<AccountRepository>, userManagementAppFileRepositoryGetter: Getter<UserManagementAppFileRepository>, AuditTrailRepositoryGetter: Getter<AuditTrailRepository>);
}
