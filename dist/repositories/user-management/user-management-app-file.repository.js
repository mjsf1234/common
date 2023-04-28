"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManagementAppFileRepository = void 0;
const tslib_1 = require("tslib");
const __1 = require("..");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let UserManagementAppFileRepository = class UserManagementAppFileRepository extends __1.BaseLocalRepository {
    constructor(dataSource, investorDetailsRepository, serviceRequestDocumentRepositoryGetter, bankAccountRepositoryGetter, csrFatcaRepositoryGetter, accountAppFileMappingRepository, instrumentsExportFileRepository) {
        super(models_1.UserManagementAppFile, dataSource);
        this.investorDetailsForSignature = this.createHasOneRepositoryFactoryFor('investorDetailsForSignature', investorDetailsRepository);
        this.serviceRequestDocument = this.createHasOneRepositoryFactoryFor('serviceRequestDocument', serviceRequestDocumentRepositoryGetter);
        this.bankAccount = this.createHasOneRepositoryFactoryFor('bankAccount', bankAccountRepositoryGetter);
        this.csrFatca = this.createHasOneRepositoryFactoryFor('csrFatca', csrFatcaRepositoryGetter);
        this.accountAppFileMapping = this.createHasOneRepositoryFactoryFor('accountAppFileMapping', accountAppFileMappingRepository);
        this.instrumentsExportFile = this.createHasOneRepositoryFactoryFor('instrumentsExportFile', instrumentsExportFileRepository);
        this.registerInclusionResolver('investorDetailsForSignature', this.investorDetailsForSignature.inclusionResolver);
        this.registerInclusionResolver('serviceRequestDocument', this.serviceRequestDocument.inclusionResolver);
        this.registerInclusionResolver('bankAccount', this.bankAccount.inclusionResolver);
        this.registerInclusionResolver('csrFatca', this.csrFatca.inclusionResolver);
        this.registerInclusionResolver('accountAppFileMapping', this.accountAppFileMapping.inclusionResolver);
        this.registerInclusionResolver('instrumentsExportFile', this.instrumentsExportFile.inclusionResolver);
    }
};
UserManagementAppFileRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('InvestorDetailsRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('ServiceRequestDocumentRepository')),
    (0, tslib_1.__param)(3, repository_1.repository.getter('BankAccountRepository')),
    (0, tslib_1.__param)(4, repository_1.repository.getter('CsrFatcaRepository')),
    (0, tslib_1.__param)(5, repository_1.repository.getter('AccountAppFileMappingRepository')),
    (0, tslib_1.__param)(6, repository_1.repository.getter('InstrumentsExportFileRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function, Function, Function, Function, Function])
], UserManagementAppFileRepository);
exports.UserManagementAppFileRepository = UserManagementAppFileRepository;
//# sourceMappingURL=user-management-app-file.repository.js.map