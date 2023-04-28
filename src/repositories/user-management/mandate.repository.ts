import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {Account, UserManagementAppFile, BankAccount, Mandate, MandateRelations, MandateType} from '../../models';
import {BankBranchRepository, MandateTypeRepository} from '../master-data';
import {BankAccountRepository} from './bank-account.repository';
import {AccountRepository} from './account.repository';
import {UserManagementAppFileRepository} from './user-management-app-file.repository';

export class MandateRepository extends BaseLocalRepository<Mandate, typeof Mandate.prototype.id, MandateRelations> {
  public readonly bankAccount: BelongsToAccessor<BankAccount, typeof Mandate.prototype.id>;
  public readonly account: BelongsToAccessor<Account, typeof Mandate.prototype.id>;
  public readonly userManagementAppFile: BelongsToAccessor<UserManagementAppFile, typeof Mandate.prototype.id>;
  public readonly mandateType: BelongsToAccessor<MandateType, typeof Mandate.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('BankAccountRepository') bankAccountRepositoryGetter: Getter<BankAccountRepository>,
    @repository.getter('AccountRepository') accountRepositoryGetter: Getter<AccountRepository>,
    @repository.getter('UserManagementAppFileRepository') userManagementAppFileRepositoryGetter: Getter<UserManagementAppFileRepository>,
    @repository.getter('MandateTypeRepository') mandateTypeRepositoryGetter: Getter<MandateTypeRepository>
  ) {
    super(Mandate, dataSource);
    this.bankAccount = this.createBelongsToAccessorFor('bankAccount', bankAccountRepositoryGetter);
    this.account = this.createBelongsToAccessorFor('account', accountRepositoryGetter);
    this.userManagementAppFile = this.createBelongsToAccessorFor('userManagementAppFile', userManagementAppFileRepositoryGetter);
    this.mandateType = this.createBelongsToAccessorFor('mandateType', mandateTypeRepositoryGetter);

    this.registerInclusionResolver('bankAccount', this.bankAccount.inclusionResolver);
    this.registerInclusionResolver('account', this.account.inclusionResolver);
    this.registerInclusionResolver('userManagementAppFile', this.userManagementAppFile.inclusionResolver);
    this.registerInclusionResolver('mandateType', this.mandateType.inclusionResolver);
  }
}
