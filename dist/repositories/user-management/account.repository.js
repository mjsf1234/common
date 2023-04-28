"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let AccountRepository = class AccountRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, primaryHolderRepositoryGetter, secondaryHolderRepositoryGetter, tertiaryHolderRepositoryGetter, primaryNomineeRepositoryGetter, secondaryNomineeRepositoryGetter, tertiaryNomineeRepositoryGetter, guardianRepositoryGetter, nomineeGuardianRepositoryGetter, riskProfileRepositoryGetter, primaryNomineeRelationshipRepositoryGetter, secondaryNomineeRelationshipRepositoryGetter, tertiaryNomineeRelationshipRepositoryGetter, guardianRelationshipRepositoryGetter, nomineeGuardianRelationshipRepositoryGetter, distributorRepositoryGetter, holdingTypeRepositoryGetter, accountCategoryRepositoryGetter, cartRepositoryGetter, serviceProviderAccountRepositoryGetter, goalRepositoryGetter, bankAccountRepositoryGetter, riskProfileQuestionSubmittedAnswerRepositoryGetter, investorNomineeRepositoryGetter, depositDetailsRepositoryGetter, orderRepositoryGetter, accountReferralRepositoryGetter, csrFatcaRepositoryGetter, accountAppFileMappingRepositoryGetter, communicationMatrixRepositoryGetter, transactionTwoFaRepositoryGetter) {
        super(models_1.Account, dataSource);
        this.primaryHolder = this.createBelongsToAccessorFor('primaryHolder', primaryHolderRepositoryGetter);
        this.secondaryHolder = this.createBelongsToAccessorFor('secondaryHolder', secondaryHolderRepositoryGetter);
        this.tertiaryHolder = this.createBelongsToAccessorFor('tertiaryHolder', tertiaryHolderRepositoryGetter);
        this.primaryNominee = this.createBelongsToAccessorFor('primaryNominee', primaryNomineeRepositoryGetter);
        this.secondaryNominee = this.createBelongsToAccessorFor('secondaryNominee', secondaryNomineeRepositoryGetter);
        this.tertiaryNominee = this.createBelongsToAccessorFor('tertiaryNominee', tertiaryNomineeRepositoryGetter);
        this.guardian = this.createBelongsToAccessorFor('guardian', guardianRepositoryGetter);
        this.nomineeGuardian = this.createBelongsToAccessorFor('nomineeGuardian', nomineeGuardianRepositoryGetter);
        this.nomineeGuardianRelationship = this.createBelongsToAccessorFor('nomineeGuardianRelationship', nomineeGuardianRelationshipRepositoryGetter);
        this.riskProfile = this.createBelongsToAccessorFor('riskProfile', riskProfileRepositoryGetter);
        this.primaryNomineeRelationship = this.createBelongsToAccessorFor('primaryNomineeRelationship', primaryNomineeRelationshipRepositoryGetter);
        this.secondaryNomineeRelationship = this.createBelongsToAccessorFor('secondaryNomineeRelationship', secondaryNomineeRelationshipRepositoryGetter);
        this.tertiaryNomineeRelationship = this.createBelongsToAccessorFor('tertiaryNomineeRelationship', tertiaryNomineeRelationshipRepositoryGetter);
        this.guardianRelationship = this.createBelongsToAccessorFor('guardianRelationship', guardianRelationshipRepositoryGetter);
        this.distributor = this.createBelongsToAccessorFor('distributor', distributorRepositoryGetter);
        this.holdingType = this.createBelongsToAccessorFor('holdingType', holdingTypeRepositoryGetter);
        this.accountCategory = this.createBelongsToAccessorFor('accountCategory', accountCategoryRepositoryGetter);
        this.cart = this.createHasOneRepositoryFactoryFor('cart', cartRepositoryGetter);
        this.serviceProviderAccounts = this.createHasManyRepositoryFactoryFor('serviceProviderAccounts', serviceProviderAccountRepositoryGetter);
        this.goals = this.createHasManyRepositoryFactoryFor('goals', goalRepositoryGetter);
        this.bankAccounts = this.createHasManyRepositoryFactoryFor('bankAccounts', bankAccountRepositoryGetter);
        this.riskProfileQuestionSubmittedAnswers = this.createHasManyRepositoryFactoryFor('riskProfileQuestionSubmittedAnswers', riskProfileQuestionSubmittedAnswerRepositoryGetter);
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
};
AccountRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('AppUserRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('AppUserRepository')),
    (0, tslib_1.__param)(3, repository_1.repository.getter('AppUserRepository')),
    (0, tslib_1.__param)(4, repository_1.repository.getter('AppUserRepository')),
    (0, tslib_1.__param)(5, repository_1.repository.getter('AppUserRepository')),
    (0, tslib_1.__param)(6, repository_1.repository.getter('AppUserRepository')),
    (0, tslib_1.__param)(7, repository_1.repository.getter('AppUserRepository')),
    (0, tslib_1.__param)(8, repository_1.repository.getter('AppUserRepository')),
    (0, tslib_1.__param)(9, repository_1.repository.getter('RiskProfileRepository')),
    (0, tslib_1.__param)(10, repository_1.repository.getter('RelationshipRepository')),
    (0, tslib_1.__param)(11, repository_1.repository.getter('RelationshipRepository')),
    (0, tslib_1.__param)(12, repository_1.repository.getter('RelationshipRepository')),
    (0, tslib_1.__param)(13, repository_1.repository.getter('RelationshipRepository')),
    (0, tslib_1.__param)(14, repository_1.repository.getter('RelationshipRepository')),
    (0, tslib_1.__param)(15, repository_1.repository.getter('DistributorRepository')),
    (0, tslib_1.__param)(16, repository_1.repository.getter('HoldingTypeRepository')),
    (0, tslib_1.__param)(17, repository_1.repository.getter('AccountCategoryRepository')),
    (0, tslib_1.__param)(18, repository_1.repository.getter('CartRepository')),
    (0, tslib_1.__param)(19, repository_1.repository.getter('ServiceProviderAccountRepository')),
    (0, tslib_1.__param)(20, repository_1.repository.getter('GoalRepository')),
    (0, tslib_1.__param)(21, repository_1.repository.getter('BankAccountRepository')),
    (0, tslib_1.__param)(22, repository_1.repository.getter('RiskProfileQuestionSubmittedAnswerRepository')),
    (0, tslib_1.__param)(23, repository_1.repository.getter('InvestorNomineeRepository')),
    (0, tslib_1.__param)(24, repository_1.repository.getter('DepositDetailsRepository')),
    (0, tslib_1.__param)(25, repository_1.repository.getter('OrderRepository')),
    (0, tslib_1.__param)(26, repository_1.repository.getter('AccountReferralRepository')),
    (0, tslib_1.__param)(27, repository_1.repository.getter('CsrFatcaRepository')),
    (0, tslib_1.__param)(28, repository_1.repository.getter('AccountAppFileMappingRepository')),
    (0, tslib_1.__param)(29, repository_1.repository.getter('CommunicationMatrixRepository')),
    (0, tslib_1.__param)(30, repository_1.repository.getter('TransactionTwoFaRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function])
], AccountRepository);
exports.AccountRepository = AccountRepository;
//# sourceMappingURL=account.repository.js.map