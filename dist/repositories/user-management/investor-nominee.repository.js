"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvestorNomineeRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const investor_nominee_model_1 = require("../../models/user-management/investor-nominee.model");
let InvestorNomineeRepository = class InvestorNomineeRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, appUserRepositoryGetter, bankAccountRepositoryGetter, accountRepositoryGetter, addressRepositoryGetter, serviceProviderAccountRepositoryGetter, relationshipRepositoryGetter, guardianAddressRepositoryGetter) {
        super(investor_nominee_model_1.InvestorNominee, dataSource);
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
};
InvestorNomineeRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('AppUserRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('BankAccountRepository')),
    (0, tslib_1.__param)(3, repository_1.repository.getter('AccountRepository')),
    (0, tslib_1.__param)(4, repository_1.repository.getter('AddressRepository')),
    (0, tslib_1.__param)(5, repository_1.repository.getter('ServiceProviderAccountRepository')),
    (0, tslib_1.__param)(6, repository_1.repository.getter('RelationshipRepository')),
    (0, tslib_1.__param)(7, repository_1.repository.getter('AddressRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function, Function, Function, Function, Function, Function])
], InvestorNomineeRepository);
exports.InvestorNomineeRepository = InvestorNomineeRepository;
//# sourceMappingURL=investor-nominee.repository.js.map