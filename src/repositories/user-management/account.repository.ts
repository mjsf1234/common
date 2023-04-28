import {AccountAppFileMappingRepository, BaseLocalRepository, CommunicationMatrixRepository} from '../../repositories';
import {BelongsToAccessor, Getter, HasManyRepositoryFactory, HasOneRepositoryFactory, juggler, repository} from '@loopback/repository';
import {
  Account,
  AccountCategory,
  AccountRelations,
  AppUser,
  BankAccount,
  Cart,
  Distributor,
  Goal,
  HoldingType,
  Relationship,
  RiskProfile,
  RiskProfileQuestionSubmittedAnswer,
  ServiceProviderAccount,
  InvestorNominee,
  DepositDetails,
  Order,
  AccountReferral,
  CsrFatca,
  AccountAppFileMapping,
  CommunicationMatrix,
  TransactionTwoFa
} from '../../models';
import {AppUserRepository} from './app-user.repository';
import {
  AccountCategoryRepository,
  DistributorRepository,
  HoldingTypeRepository,
  RelationshipRepository,
  RiskProfileRepository
} from '../master-data';
import {CartRepository, DepositDetailsRepository, GoalRepository, OrderRepository, TransactionTwoFaRepository} from '../order-execution';
import {ServiceProviderAccountRepository} from '../transaction';
import {BankAccountRepository} from './bank-account.repository';
import {RiskProfileQuestionSubmittedAnswerRepository} from './risk-profile-question-submitted-answer.repository';
import {InvestorNomineeRepository} from './investor-nominee.repository';
import {AccountReferralRepository} from './account-referral.repository';
import {CsrFatcaRepository} from './csr-fatca.repository';

export class AccountRepository extends BaseLocalRepository<Account, typeof Account.prototype.id, AccountRelations> {
  public readonly primaryHolder: BelongsToAccessor<AppUser, typeof Account.prototype.id>;
  public readonly secondaryHolder: BelongsToAccessor<AppUser, typeof Account.prototype.id>;
  public readonly tertiaryHolder: BelongsToAccessor<AppUser, typeof Account.prototype.id>;
  public readonly primaryNominee: BelongsToAccessor<AppUser, typeof Account.prototype.id>;
  public readonly secondaryNominee: BelongsToAccessor<AppUser, typeof Account.prototype.id>;
  public readonly tertiaryNominee: BelongsToAccessor<AppUser, typeof Account.prototype.id>;
  public readonly executedByAppUser: BelongsToAccessor<AppUser, typeof Account.prototype.id>;
  public readonly guardian: BelongsToAccessor<AppUser, typeof Account.prototype.id>;
  public readonly nomineeGuardian: BelongsToAccessor<AppUser, typeof Account.prototype.id>;
  public readonly riskProfile: BelongsToAccessor<RiskProfile, typeof Account.prototype.id>;
  public readonly primaryNomineeRelationship: BelongsToAccessor<Relationship, typeof Account.prototype.id>;
  public readonly secondaryNomineeRelationship: BelongsToAccessor<Relationship, typeof Account.prototype.id>;
  public readonly tertiaryNomineeRelationship: BelongsToAccessor<Relationship, typeof Account.prototype.id>;
  public readonly guardianRelationship: BelongsToAccessor<Relationship, typeof Account.prototype.id>;
  public readonly distributor: BelongsToAccessor<Distributor, typeof Account.prototype.id>;
  public readonly holdingType: BelongsToAccessor<HoldingType, typeof Account.prototype.id>;
  public readonly accountCategory: BelongsToAccessor<AccountCategory, typeof Account.prototype.id>;
  public readonly nomineeGuardianRelationship: BelongsToAccessor<Relationship, typeof Account.prototype.id>;

  public readonly cart: HasOneRepositoryFactory<Cart, typeof Cart.prototype.id>;

  public readonly serviceProviderAccounts: HasManyRepositoryFactory<ServiceProviderAccount, typeof Account.prototype.id>;
  public readonly goals: HasManyRepositoryFactory<Goal, typeof Account.prototype.id>;
  public readonly bankAccounts: HasManyRepositoryFactory<BankAccount, typeof Account.prototype.id>;
  public readonly riskProfileQuestionSubmittedAnswers: HasManyRepositoryFactory<
    RiskProfileQuestionSubmittedAnswer,
    typeof Account.prototype.id
  >;
  public readonly investorNominees: HasManyRepositoryFactory<InvestorNominee, typeof InvestorNominee.prototype.pid>;
  public readonly accountAppFileMapping: HasManyRepositoryFactory<AccountAppFileMapping, typeof AccountAppFileMapping.prototype.pid>;
  public readonly depositDetails: HasManyRepositoryFactory<DepositDetails, typeof Account.prototype.id>;
  public readonly orders: HasManyRepositoryFactory<Order, typeof Account.prototype.id>;
  public readonly accountReferral: HasOneRepositoryFactory<AccountReferral, typeof Account.prototype.id>;
  public readonly csrFatca: HasManyRepositoryFactory<CsrFatca, typeof Account.prototype.id>;
  public readonly communicationMatrix: HasManyRepositoryFactory<CommunicationMatrix, typeof Account.prototype.id>;
  public readonly transactionTwoFa: HasManyRepositoryFactory<TransactionTwoFa, typeof Account.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('AppUserRepository') primaryHolderRepositoryGetter: Getter<AppUserRepository>,
    @repository.getter('AppUserRepository') secondaryHolderRepositoryGetter: Getter<AppUserRepository>,
    @repository.getter('AppUserRepository') tertiaryHolderRepositoryGetter: Getter<AppUserRepository>,
    @repository.getter('AppUserRepository') primaryNomineeRepositoryGetter: Getter<AppUserRepository>,
    @repository.getter('AppUserRepository') secondaryNomineeRepositoryGetter: Getter<AppUserRepository>,
    @repository.getter('AppUserRepository') tertiaryNomineeRepositoryGetter: Getter<AppUserRepository>,
    @repository.getter('AppUserRepository') guardianRepositoryGetter: Getter<AppUserRepository>,
    @repository.getter('AppUserRepository') nomineeGuardianRepositoryGetter: Getter<AppUserRepository>,
    @repository.getter('RiskProfileRepository') riskProfileRepositoryGetter: Getter<RiskProfileRepository>,
    @repository.getter('RelationshipRepository') primaryNomineeRelationshipRepositoryGetter: Getter<RelationshipRepository>,
    @repository.getter('RelationshipRepository') secondaryNomineeRelationshipRepositoryGetter: Getter<RelationshipRepository>,
    @repository.getter('RelationshipRepository') tertiaryNomineeRelationshipRepositoryGetter: Getter<RelationshipRepository>,
    @repository.getter('RelationshipRepository') guardianRelationshipRepositoryGetter: Getter<RelationshipRepository>,
    @repository.getter('RelationshipRepository') nomineeGuardianRelationshipRepositoryGetter: Getter<RelationshipRepository>,
    @repository.getter('DistributorRepository') distributorRepositoryGetter: Getter<DistributorRepository>,
    @repository.getter('HoldingTypeRepository') holdingTypeRepositoryGetter: Getter<HoldingTypeRepository>,
    @repository.getter('AccountCategoryRepository') accountCategoryRepositoryGetter: Getter<AccountCategoryRepository>,
    @repository.getter('CartRepository') cartRepositoryGetter: Getter<CartRepository>,
    @repository.getter('ServiceProviderAccountRepository') serviceProviderAccountRepositoryGetter: Getter<ServiceProviderAccountRepository>,
    @repository.getter('GoalRepository') goalRepositoryGetter: Getter<GoalRepository>,
    @repository.getter('BankAccountRepository') bankAccountRepositoryGetter: Getter<BankAccountRepository>,
    @repository.getter('RiskProfileQuestionSubmittedAnswerRepository')
    riskProfileQuestionSubmittedAnswerRepositoryGetter: Getter<RiskProfileQuestionSubmittedAnswerRepository>,
    @repository.getter('InvestorNomineeRepository') investorNomineeRepositoryGetter: Getter<InvestorNomineeRepository>,
    @repository.getter('DepositDetailsRepository') depositDetailsRepositoryGetter: Getter<DepositDetailsRepository>,
    @repository.getter('OrderRepository') orderRepositoryGetter: Getter<OrderRepository>,
    @repository.getter('AccountReferralRepository') accountReferralRepositoryGetter: Getter<AccountReferralRepository>,
    @repository.getter('CsrFatcaRepository') csrFatcaRepositoryGetter: Getter<CsrFatcaRepository>,
    @repository.getter('AccountAppFileMappingRepository') accountAppFileMappingRepositoryGetter: Getter<AccountAppFileMappingRepository>,
    @repository.getter('CommunicationMatrixRepository') communicationMatrixRepositoryGetter: Getter<CommunicationMatrixRepository>,
    @repository.getter('TransactionTwoFaRepository') transactionTwoFaRepositoryGetter: Getter<TransactionTwoFaRepository>
  ) {
    super(Account, dataSource);
    this.primaryHolder = this.createBelongsToAccessorFor('primaryHolder', primaryHolderRepositoryGetter);
    this.secondaryHolder = this.createBelongsToAccessorFor('secondaryHolder', secondaryHolderRepositoryGetter);
    this.tertiaryHolder = this.createBelongsToAccessorFor('tertiaryHolder', tertiaryHolderRepositoryGetter);
    this.primaryNominee = this.createBelongsToAccessorFor('primaryNominee', primaryNomineeRepositoryGetter);
    this.secondaryNominee = this.createBelongsToAccessorFor('secondaryNominee', secondaryNomineeRepositoryGetter);
    this.tertiaryNominee = this.createBelongsToAccessorFor('tertiaryNominee', tertiaryNomineeRepositoryGetter);
    this.guardian = this.createBelongsToAccessorFor('guardian', guardianRepositoryGetter);
    this.nomineeGuardian = this.createBelongsToAccessorFor('nomineeGuardian', nomineeGuardianRepositoryGetter);
    this.nomineeGuardianRelationship = this.createBelongsToAccessorFor(
      'nomineeGuardianRelationship',
      nomineeGuardianRelationshipRepositoryGetter
    );
    this.riskProfile = this.createBelongsToAccessorFor('riskProfile', riskProfileRepositoryGetter);
    this.primaryNomineeRelationship = this.createBelongsToAccessorFor(
      'primaryNomineeRelationship',
      primaryNomineeRelationshipRepositoryGetter
    );
    this.secondaryNomineeRelationship = this.createBelongsToAccessorFor(
      'secondaryNomineeRelationship',
      secondaryNomineeRelationshipRepositoryGetter
    );
    this.tertiaryNomineeRelationship = this.createBelongsToAccessorFor(
      'tertiaryNomineeRelationship',
      tertiaryNomineeRelationshipRepositoryGetter
    );
    this.guardianRelationship = this.createBelongsToAccessorFor('guardianRelationship', guardianRelationshipRepositoryGetter);
    this.distributor = this.createBelongsToAccessorFor('distributor', distributorRepositoryGetter);
    this.holdingType = this.createBelongsToAccessorFor('holdingType', holdingTypeRepositoryGetter);
    this.accountCategory = this.createBelongsToAccessorFor('accountCategory', accountCategoryRepositoryGetter);

    this.cart = this.createHasOneRepositoryFactoryFor('cart', cartRepositoryGetter);

    this.serviceProviderAccounts = this.createHasManyRepositoryFactoryFor(
      'serviceProviderAccounts',
      serviceProviderAccountRepositoryGetter
    );
    this.goals = this.createHasManyRepositoryFactoryFor('goals', goalRepositoryGetter);
    this.bankAccounts = this.createHasManyRepositoryFactoryFor('bankAccounts', bankAccountRepositoryGetter);
    this.riskProfileQuestionSubmittedAnswers = this.createHasManyRepositoryFactoryFor(
      'riskProfileQuestionSubmittedAnswers',
      riskProfileQuestionSubmittedAnswerRepositoryGetter
    );
    this.investorNominees = this.createHasManyRepositoryFactoryFor('investorNominees', investorNomineeRepositoryGetter);
    this.depositDetails = this.createHasManyRepositoryFactoryFor('depositDetails', depositDetailsRepositoryGetter);
    this.orders = this.createHasManyRepositoryFactoryFor('orders', orderRepositoryGetter);

    this.accountReferral = this.createHasOneRepositoryFactoryFor('accountReferral', accountReferralRepositoryGetter);
    this.csrFatca = this.createHasManyRepositoryFactoryFor('csrFatca', csrFatcaRepositoryGetter);
    this.accountAppFileMapping = this.createHasManyRepositoryFactoryFor('accountAppFileMapping', accountAppFileMappingRepositoryGetter);
    this.communicationMatrix = this.createHasManyRepositoryFactoryFor('communicationMatrix', communicationMatrixRepositoryGetter);
    this.transactionTwoFa = this.createHasManyRepositoryFactoryFor('transactionTwoFa', transactionTwoFaRepositoryGetter);

    this.registerInclusionResolver('primaryHolder', this.primaryHolder.inclusionResolver);
    this.registerInclusionResolver('secondaryHolder', this.secondaryHolder.inclusionResolver);
    this.registerInclusionResolver('tertiaryHolder', this.tertiaryHolder.inclusionResolver);
    this.registerInclusionResolver('primaryNominee', this.primaryNominee.inclusionResolver);
    this.registerInclusionResolver('secondaryNominee', this.secondaryNominee.inclusionResolver);
    this.registerInclusionResolver('tertiaryNominee', this.tertiaryNominee.inclusionResolver);
    this.registerInclusionResolver('guardian', this.guardian.inclusionResolver);
    this.registerInclusionResolver('guardian', this.guardian.inclusionResolver);
    this.registerInclusionResolver('nomineeGuardian', this.nomineeGuardian.inclusionResolver);
    this.registerInclusionResolver('riskProfile', this.riskProfile.inclusionResolver);
    this.registerInclusionResolver('primaryNomineeRelationship', this.primaryNomineeRelationship.inclusionResolver);
    this.registerInclusionResolver('secondaryNomineeRelationship', this.secondaryNomineeRelationship.inclusionResolver);
    this.registerInclusionResolver('tertiaryNomineeRelationship', this.tertiaryNomineeRelationship.inclusionResolver);
    this.registerInclusionResolver('guardianRelationship', this.guardianRelationship.inclusionResolver);
    this.registerInclusionResolver('distributor', this.distributor.inclusionResolver);
    this.registerInclusionResolver('holdingType', this.holdingType.inclusionResolver);
    this.registerInclusionResolver('accountCategory', this.accountCategory.inclusionResolver);
    this.registerInclusionResolver('cart', this.cart.inclusionResolver);
    this.registerInclusionResolver('serviceProviderAccounts', this.serviceProviderAccounts.inclusionResolver);
    this.registerInclusionResolver('goals', this.goals.inclusionResolver);
    this.registerInclusionResolver('bankAccounts', this.bankAccounts.inclusionResolver);
    this.registerInclusionResolver('riskProfileQuestionSubmittedAnswers', this.riskProfileQuestionSubmittedAnswers.inclusionResolver);
    this.registerInclusionResolver('investorNominees', this.investorNominees.inclusionResolver);
    this.registerInclusionResolver('depositDetails', this.depositDetails.inclusionResolver);
    this.registerInclusionResolver('orders', this.orders.inclusionResolver);

    this.registerInclusionResolver('accountReferral', this.accountReferral.inclusionResolver);
    this.registerInclusionResolver('csrFacta', this.csrFatca.inclusionResolver);
    this.registerInclusionResolver('accountAppFileMapping', this.accountAppFileMapping.inclusionResolver);
    this.registerInclusionResolver('communicationMatrix', this.communicationMatrix.inclusionResolver);
    this.registerInclusionResolver('transactionTwoFa', this.transactionTwoFa.inclusionResolver);
  }
}
