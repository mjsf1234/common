import {
  AccountRepository,
  BankAccountRepository,
  BaseLocalRepository,
  AddressRepository,
  ServiceProviderAccountRepository
} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {Account, AppUser, BankAccount, Address, ServiceProviderAccount, Relationship} from '../../models';
import {AppUserRepository} from './app-user.repository';
import {InvestorNominee, InvestorNomineeRelations} from '../../models/user-management/investor-nominee.model';
import {RelationshipRepository} from '../master-data';

export class InvestorNomineeRepository extends BaseLocalRepository<
  InvestorNominee,
  typeof InvestorNominee.prototype.id,
  InvestorNomineeRelations
> {
  public readonly appUser: BelongsToAccessor<AppUser, typeof InvestorNominee.prototype.id>;
  public readonly account: BelongsToAccessor<Account, typeof InvestorNominee.prototype.id>;
  public readonly bankAccount: BelongsToAccessor<BankAccount, typeof InvestorNominee.prototype.id>;
  public readonly address: BelongsToAccessor<Address, typeof InvestorNominee.prototype.id>;
  public readonly serviceProviderAccount: BelongsToAccessor<ServiceProviderAccount, typeof InvestorNominee.prototype.id>;
  public readonly relationship: BelongsToAccessor<Relationship, typeof InvestorNominee.prototype.id>;
  public readonly guardianAddress: BelongsToAccessor<Address, typeof InvestorNominee.prototype.id>;
  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('AppUserRepository') appUserRepositoryGetter: Getter<AppUserRepository>,
    @repository.getter('BankAccountRepository') bankAccountRepositoryGetter: Getter<BankAccountRepository>,
    @repository.getter('AccountRepository') accountRepositoryGetter: Getter<AccountRepository>,
    @repository.getter('AddressRepository') addressRepositoryGetter: Getter<AddressRepository>,
    @repository.getter('ServiceProviderAccountRepository') serviceProviderAccountRepositoryGetter: Getter<ServiceProviderAccountRepository>,
    @repository.getter('RelationshipRepository') relationshipRepositoryGetter: Getter<RelationshipRepository>,
    @repository.getter('AddressRepository') guardianAddressRepositoryGetter: Getter<AddressRepository>
  ) {
    super(InvestorNominee, dataSource);
    this.appUser = this.createBelongsToAccessorFor('appUser', appUserRepositoryGetter);
    this.bankAccount = this.createBelongsToAccessorFor('bankAccount', bankAccountRepositoryGetter);
    this.account = this.createBelongsToAccessorFor('account', accountRepositoryGetter);
    this.address = this.createBelongsToAccessorFor('address', addressRepositoryGetter);
    this.serviceProviderAccount = this.createBelongsToAccessorFor('serviceProviderAccount', serviceProviderAccountRepositoryGetter);
    this.relationship = this.createBelongsToAccessorFor('relationship', relationshipRepositoryGetter);
    this.guardianAddress = this.createBelongsToAccessorFor('guardianAddress', guardianAddressRepositoryGetter);

    this.registerInclusionResolver('appUser', this.appUser.inclusionResolver);
    this.registerInclusionResolver('bankAccount', this.bankAccount.inclusionResolver);
    this.registerInclusionResolver('account', this.account.inclusionResolver);
    this.registerInclusionResolver('address', this.address.inclusionResolver);
    this.registerInclusionResolver('serviceProviderAccount', this.serviceProviderAccount.inclusionResolver);
    this.registerInclusionResolver('relationship', this.relationship.inclusionResolver);
    this.registerInclusionResolver('guardianAddress', this.guardianAddress.inclusionResolver);
  }
}
