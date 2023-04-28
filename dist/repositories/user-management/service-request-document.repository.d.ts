import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { Account, UserManagementAppFile, ServiceRequestDocument, ServiceRequestDocumentRelations } from '../../models';
import { AccountRepository } from './account.repository';
import { UserManagementAppFileRepository } from './user-management-app-file.repository';
export declare class ServiceRequestDocumentRepository extends BaseLocalRepository<ServiceRequestDocument, typeof ServiceRequestDocument.prototype.id, ServiceRequestDocumentRelations> {
    readonly account: BelongsToAccessor<Account, typeof ServiceRequestDocument.prototype.id>;
    readonly userManagementAppFile: BelongsToAccessor<UserManagementAppFile, typeof ServiceRequestDocument.prototype.id>;
    constructor(dataSource: juggler.DataSource, accountRepositoryGetter: Getter<AccountRepository>, userManagementAppFileRepositoryGetter: Getter<UserManagementAppFileRepository>);
}
