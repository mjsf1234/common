import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, HasManyRepositoryFactory, juggler } from '@loopback/repository';
import { Account, BankAccount, BankAccountRelations, BankAccountType, BankBranch, Mandate, HoldingType, InvestorType, PaymentDetails, UserManagementAppFile } from '../../models';
import { AccountRepository } from './account.repository';
import { BankAccountTypeRepository, BankBranchRepository, HoldingTypeRepository, InvestorTypeRepository } from '../master-data';
import { MandateRepository } from './mandate.repository';
import { PaymentDetailsRepository } from './../order-execution/payment-details.repository';
import { UserManagementAppFileRepository } from './user-management-app-file.repository';
export declare class BankAccountRepository extends BaseLocalRepository<BankAccount, typeof BankAccount.prototype.id, BankAccountRelations> {
    readonly account: BelongsToAccessor<Account, typeof BankAccount.prototype.id>;
    readonly bankBranch: BelongsToAccessor<BankBranch, typeof BankAccount.prototype.id>;
    readonly bankAccountType: BelongsToAccessor<BankAccountType, typeof BankAccount.prototype.id>;
    readonly holdingType: BelongsToAccessor<HoldingType, typeof BankAccount.prototype.id>;
    readonly investorType: BelongsToAccessor<InvestorType, typeof BankAccount.prototype.id>;
    readonly userManagementAppFile: BelongsToAccessor<UserManagementAppFile, typeof BankAccount.prototype.id>;
    readonly mandates: HasManyRepositoryFactory<Mandate, typeof BankAccount.prototype.id>;
    readonly paymentDetails: HasManyRepositoryFactory<PaymentDetails, typeof BankAccount.prototype.id>;
    constructor(dataSource: juggler.DataSource, accountRepositoryGetter: Getter<AccountRepository>, bankBranchRepositoryGetter: Getter<BankBranchRepository>, bankAccountTypeRepositoryGetter: Getter<BankAccountTypeRepository>, mandateRepositoryGetter: Getter<MandateRepository>, holdingTypeRepositoryGetter: Getter<HoldingTypeRepository>, investorTypeRepositoryGetter: Getter<InvestorTypeRepository>, paymentDetailsRepositoryGetter: Getter<PaymentDetailsRepository>, userManagementAppFileRepositoryGetter: Getter<UserManagementAppFileRepository>);
}
