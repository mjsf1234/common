import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, HasManyRepositoryFactory, juggler, repository} from '@loopback/repository';
import {
  Account,
  BankAccount,
  BankAccountRelations,
  BankAccountType,
  BankBranch,
  Mandate,
  HoldingType,
  InvestorType,
  PaymentDetails,
  UserManagementAppFile
} from '../../models';
import {AccountRepository} from './account.repository';
import {BankAccountTypeRepository, BankBranchRepository, HoldingTypeRepository, InvestorTypeRepository} from '../master-data';
import {MandateRepository} from './mandate.repository';
import {PaymentDetailsRepository} from './../order-execution/payment-details.repository';
import {UserManagementAppFileRepository} from './user-management-app-file.repository';

export class BankAccountRepository extends BaseLocalRepository<BankAccount, typeof BankAccount.prototype.id, BankAccountRelations> {
  public readonly account: BelongsToAccessor<Account, typeof BankAccount.prototype.id>;
  public readonly bankBranch: BelongsToAccessor<BankBranch, typeof BankAccount.prototype.id>;
  public readonly bankAccountType: BelongsToAccessor<BankAccountType, typeof BankAccount.prototype.id>;
  public readonly holdingType: BelongsToAccessor<HoldingType, typeof BankAccount.prototype.id>;
  public readonly investorType: BelongsToAccessor<InvestorType, typeof BankAccount.prototype.id>;
  public readonly userManagementAppFile: BelongsToAccessor<UserManagementAppFile, typeof BankAccount.prototype.id>;

  public readonly mandates: HasManyRepositoryFactory<Mandate, typeof BankAccount.prototype.id>;
  public readonly paymentDetails: HasManyRepositoryFactory<PaymentDetails, typeof BankAccount.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('AccountRepository') accountRepositoryGetter: Getter<AccountRepository>,
    @repository.getter('BankBranchRepository') bankBranchRepositoryGetter: Getter<BankBranchRepository>,
    @repository.getter('BankAccountTypeRepository') bankAccountTypeRepositoryGetter: Getter<BankAccountTypeRepository>,
    @repository.getter('MandateRepository') mandateRepositoryGetter: Getter<MandateRepository>,
    @repository.getter('HoldingTypeRepository') holdingTypeRepositoryGetter: Getter<HoldingTypeRepository>,
    @repository.getter('InvestorTypeRepository') investorTypeRepositoryGetter: Getter<InvestorTypeRepository>,
    @repository.getter('PaymentDetailsRepository') paymentDetailsRepositoryGetter: Getter<PaymentDetailsRepository>,
    @repository.getter('UserManagementAppFileRepository') userManagementAppFileRepositoryGetter: Getter<UserManagementAppFileRepository>
  ) {
    super(BankAccount, dataSource);
    this.account = this.createBelongsToAccessorFor('account', accountRepositoryGetter);
    this.bankBranch = this.createBelongsToAccessorFor('bankBranch', bankBranchRepositoryGetter);
    this.bankAccountType = this.createBelongsToAccessorFor('bankAccountType', bankAccountTypeRepositoryGetter);
    this.holdingType = this.createBelongsToAccessorFor('holdingType', holdingTypeRepositoryGetter);
    this.investorType = this.createBelongsToAccessorFor('investorType', investorTypeRepositoryGetter);
    this.userManagementAppFile = this.createBelongsToAccessorFor('chequeImageFile', userManagementAppFileRepositoryGetter);

    this.mandates = this.createHasManyRepositoryFactoryFor('mandates', mandateRepositoryGetter);
    this.paymentDetails = this.createHasManyRepositoryFactoryFor('paymentDetails', paymentDetailsRepositoryGetter);

    this.registerInclusionResolver('account', this.account.inclusionResolver);
    this.registerInclusionResolver('bankBranch', this.bankBranch.inclusionResolver);
    this.registerInclusionResolver('bankAccountType', this.bankAccountType.inclusionResolver);
    this.registerInclusionResolver('mandates', this.mandates.inclusionResolver);
    this.registerInclusionResolver('holdingType', this.holdingType.inclusionResolver);
    this.registerInclusionResolver('investorType', this.investorType.inclusionResolver);
    this.registerInclusionResolver('paymentDetails', this.paymentDetails.inclusionResolver);
    this.registerInclusionResolver('chequeImageFile', this.userManagementAppFile.inclusionResolver);
  }
}
