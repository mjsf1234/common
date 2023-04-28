"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsolidatedDocumentRepository = void 0;
const tslib_1 = require("tslib");
const __1 = require("..");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let ConsolidatedDocumentRepository = class ConsolidatedDocumentRepository extends __1.BaseLocalRepository {
    constructor(dataSource, appUserRepositoryGetter, bankAccountRepositoryGetter, accountRepositoryGetter, userManagementAppFileRepositoryGetter, rtaRepositoryGetter) {
        super(models_1.ConsolidatedDocument, dataSource);
        this.appUser = this.createBelongsToAccessorFor('appUser', appUserRepositoryGetter);
        this.bankAccount = this.createBelongsToAccessorFor('bankAccount', bankAccountRepositoryGetter);
        this.account = this.createBelongsToAccessorFor('account', accountRepositoryGetter);
        this.appFile = this.createBelongsToAccessorFor('appFile', userManagementAppFileRepositoryGetter);
        this.rta = this.createBelongsToAccessorFor('rta', rtaRepositoryGetter);
        this.registerInclusionResolver('appUser', this.appUser.inclusionResolver);
        this.registerInclusionResolver('bankAccount', this.bankAccount.inclusionResolver);
        this.registerInclusionResolver('account', this.account.inclusionResolver);
        this.registerInclusionResolver('appFile', this.appFile.inclusionResolver);
        this.registerInclusionResolver('rta', this.rta.inclusionResolver);
    }
};
ConsolidatedDocumentRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('AppUserRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('BankAccountRepository')),
    (0, tslib_1.__param)(3, repository_1.repository.getter('AccountRepository')),
    (0, tslib_1.__param)(4, repository_1.repository.getter('UserManagementAppFileRepository')),
    (0, tslib_1.__param)(5, repository_1.repository.getter('RtaRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function, Function, Function, Function])
], ConsolidatedDocumentRepository);
exports.ConsolidatedDocumentRepository = ConsolidatedDocumentRepository;
//# sourceMappingURL=consolidated-document.repository.js.map