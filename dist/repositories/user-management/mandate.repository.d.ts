import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { Account, UserManagementAppFile, BankAccount, Mandate, MandateRelations, MandateType } from '../../models';
import { MandateTypeRepository } from '../master-data';
import { BankAccountRepository } from './bank-account.repository';
import { AccountRepository } from './account.repository';
import { UserManagementAppFileRepository } from './user-management-app-file.repository';
export declare class MandateRepository extends BaseLocalRepository<Mandate, typeof Mandate.prototype.id, MandateRelations> {
    readonly bankAccount: BelongsToAccessor<BankAccount, typeof Mandate.prototype.id>;
    readonly account: BelongsToAccessor<Account, typeof Mandate.prototype.id>;
    readonly userManagementAppFile: BelongsToAccessor<UserManagementAppFile, typeof Mandate.prototype.id>;
    readonly mandateType: BelongsToAccessor<MandateType, typeof Mandate.prototype.id>;
    constructor(dataSource: juggler.DataSource, bankAccountRepositoryGetter: Getter<BankAccountRepository>, accountRepositoryGetter: Getter<AccountRepository>, userManagementAppFileRepositoryGetter: Getter<UserManagementAppFileRepository>, mandateTypeRepositoryGetter: Getter<MandateTypeRepository>);
}
