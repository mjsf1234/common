"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRequestDocumentRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let ServiceRequestDocumentRepository = class ServiceRequestDocumentRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, accountRepositoryGetter, userManagementAppFileRepositoryGetter) {
        super(models_1.ServiceRequestDocument, dataSource);
        this.account = this.createBelongsToAccessorFor('account', accountRepositoryGetter);
        this.userManagementAppFile = this.createBelongsToAccessorFor('userManagementAppFile', userManagementAppFileRepositoryGetter);
        this.registerInclusionResolver('account', this.account.inclusionResolver);
        this.registerInclusionResolver('userManagementAppFile', this.userManagementAppFile.inclusionResolver);
    }
};
ServiceRequestDocumentRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('AccountRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('UserManagementAppFileRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function])
], ServiceRequestDocumentRepository);
exports.ServiceRequestDocumentRepository = ServiceRequestDocumentRepository;
//# sourceMappingURL=service-request-document.repository.js.map