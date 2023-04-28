import { AccountRepository, BankAccountRepository, BaseLocalRepository, AddressRepository, ServiceProviderAccountRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { Account, AppUser, BankAccount, Address, ServiceProviderAccount, Relationship } from '../../models';
import { AppUserRepository } from './app-user.repository';
import { InvestorNominee, InvestorNomineeRelations } from '../../models/user-management/investor-nominee.model';
import { RelationshipRepository } from '../master-data';
export declare class InvestorNomineeRepository extends BaseLocalRepository<InvestorNominee, typeof InvestorNominee.prototype.id, InvestorNomineeRelations> {
    readonly appUser: BelongsToAccessor<AppUser, typeof InvestorNominee.prototype.id>;
    readonly account: BelongsToAccessor<Account, typeof InvestorNominee.prototype.id>;
    readonly bankAccount: BelongsToAccessor<BankAccount, typeof InvestorNominee.prototype.id>;
    readonly address: BelongsToAccessor<Address, typeof InvestorNominee.prototype.id>;
    readonly serviceProviderAccount: BelongsToAccessor<ServiceProviderAccount, typeof InvestorNominee.prototype.id>;
    readonly relationship: BelongsToAccessor<Relationship, typeof InvestorNominee.prototype.id>;
    readonly guardianAddress: BelongsToAccessor<Address, typeof InvestorNominee.prototype.id>;
    constructor(dataSource: juggler.DataSource, appUserRepositoryGetter: Getter<AppUserRepository>, bankAccountRepositoryGetter: Getter<BankAccountRepository>, accountRepositoryGetter: Getter<AccountRepository>, addressRepositoryGetter: Getter<AddressRepository>, serviceProviderAccountRepositoryGetter: Getter<ServiceProviderAccountRepository>, relationshipRepositoryGetter: Getter<RelationshipRepository>, guardianAddressRepositoryGetter: Getter<AddressRepository>);
}
