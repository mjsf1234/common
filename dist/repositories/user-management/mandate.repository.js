"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MandateRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let MandateRepository = class MandateRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, bankAccountRepositoryGetter, accountRepositoryGetter, userManagementAppFileRepositoryGetter, mandateTypeRepositoryGetter) {
        super(models_1.Mandate, dataSource);
        this.bankAccount = this.createBelongsToAccessorFor('bankAccount', bankAccountRepositoryGetter);
        this.account = this.createBelongsToAccessorFor('account', accountRepositoryGetter);
        this.userManagementAppFile = this.createBelongsToAccessorFor('userManagementAppFile', userManagementAppFileRepositoryGetter);
        this.mandateType = this.createBelongsToAccessorFor('mandateType', mandateTypeRepositoryGetter);
        this.registerInclusionResolver('bankAccount', this.bankAccount.inclusionResolver);
        this.registerInclusionResolver('account', this.account.inclusionResolver);
        this.registerInclusionResolver('userManagementAppFile', this.userManagementAppFile.inclusionResolver);
        this.registerInclusionResolver('mandateType', this.mandateType.inclusionResolver);
    }
};
MandateRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('BankAccountRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('AccountRepository')),
    (0, tslib_1.__param)(3, repository_1.repository.getter('UserManagementAppFileRepository')),
    (0, tslib_1.__param)(4, repository_1.repository.getter('MandateTypeRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function, Function, Function])
], MandateRepository);
exports.MandateRepository = MandateRepository;
//# sourceMappingURL=mandate.repository.js.map