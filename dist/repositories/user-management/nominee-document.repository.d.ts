import { AccountRepository, BaseLocalRepository, RtaRepository, ServiceProviderRepository, UserManagementAppFileRepository } from '..';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { Account, NomineeDocument, NomineeDocumentRelations, Rta, ServiceProvider, UserManagementAppFile } from '../../models';
export declare class NomineeDocumentRepository extends BaseLocalRepository<NomineeDocument, typeof NomineeDocument.prototype.id, NomineeDocumentRelations> {
    readonly account: BelongsToAccessor<Account, typeof NomineeDocument.prototype.id>;
    readonly appFile: BelongsToAccessor<UserManagementAppFile, typeof NomineeDocument.prototype.id>;
    readonly rta: BelongsToAccessor<Rta, typeof NomineeDocument.prototype.id>;
    readonly serviceProvider: BelongsToAccessor<ServiceProvider, typeof NomineeDocument.prototype.id>;
    constructor(dataSource: juggler.DataSource, accountRepositoryGetter: Getter<AccountRepository>, userManagementAppFileRepositoryGetter: Getter<UserManagementAppFileRepository>, rtaRepositoryGetter: Getter<RtaRepository>, serviceProviderRepositoryGetter: Getter<ServiceProviderRepository>);
}
