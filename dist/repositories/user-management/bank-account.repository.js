"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccountRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let BankAccountRepository = class BankAccountRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, accountRepositoryGetter, bankBranchRepositoryGetter, bankAccountTypeRepositoryGetter, mandateRepositoryGetter, holdingTypeRepositoryGetter, investorTypeRepositoryGetter, paymentDetailsRepositoryGetter, userManagementAppFileRepositoryGetter) {
        super(models_1.BankAccount, dataSource);
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
};
BankAccountRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('AccountRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('BankBranchRepository')),
    (0, tslib_1.__param)(3, repository_1.repository.getter('BankAccountTypeRepository')),
    (0, tslib_1.__param)(4, repository_1.repository.getter('MandateRepository')),
    (0, tslib_1.__param)(5, repository_1.repository.getter('HoldingTypeRepository')),
    (0, tslib_1.__param)(6, repository_1.repository.getter('InvestorTypeRepository')),
    (0, tslib_1.__param)(7, repository_1.repository.getter('PaymentDetailsRepository')),
    (0, tslib_1.__param)(8, repository_1.repository.getter('UserManagementAppFileRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function, Function, Function, Function, Function, Function, Function])
], BankAccountRepository);
exports.BankAccountRepository = BankAccountRepository;
//# sourceMappingURL=bank-account.repository.js.map