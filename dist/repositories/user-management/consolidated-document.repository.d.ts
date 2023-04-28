import { AccountRepository, AppUserRepository, BankAccountRepository, BaseLocalRepository, RtaRepository, UserManagementAppFileRepository } from '..';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { Account, AppUser, BankAccount, ConsolidatedDocument, ConsolidatedDocumentRelations, Rta, UserManagementAppFile } from '../../models';
export declare class ConsolidatedDocumentRepository extends BaseLocalRepository<ConsolidatedDocument, typeof ConsolidatedDocument.prototype.id, ConsolidatedDocumentRelations> {
    readonly appUser: BelongsToAccessor<AppUser, typeof ConsolidatedDocument.prototype.id>;
    readonly account: BelongsToAccessor<Account, typeof ConsolidatedDocument.prototype.id>;
    readonly bankAccount: BelongsToAccessor<BankAccount, typeof ConsolidatedDocument.prototype.id>;
    readonly appFile: BelongsToAccessor<UserManagementAppFile, typeof ConsolidatedDocument.prototype.id>;
    readonly rta: BelongsToAccessor<Rta, typeof ConsolidatedDocument.prototype.id>;
    constructor(dataSource: juggler.DataSource, appUserRepositoryGetter: Getter<AppUserRepository>, bankAccountRepositoryGetter: Getter<BankAccountRepository>, accountRepositoryGetter: Getter<AccountRepository>, userManagementAppFileRepositoryGetter: Getter<UserManagementAppFileRepository>, rtaRepositoryGetter: Getter<RtaRepository>);
}
