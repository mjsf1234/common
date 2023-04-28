"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NomineeDocumentRepository = void 0;
const tslib_1 = require("tslib");
const __1 = require("..");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let NomineeDocumentRepository = class NomineeDocumentRepository extends __1.BaseLocalRepository {
    constructor(dataSource, accountRepositoryGetter, userManagementAppFileRepositoryGetter, rtaRepositoryGetter, serviceProviderRepositoryGetter) {
        super(models_1.NomineeDocument, dataSource);
        this.account = this.createBelongsToAccessorFor('account', accountRepositoryGetter);
        this.appFile = this.createBelongsToAccessorFor('appFile', userManagementAppFileRepositoryGetter);
        this.rta = this.createBelongsToAccessorFor('rta', rtaRepositoryGetter);
        this.serviceProvider = this.createBelongsToAccessorFor('serviceProvider', serviceProviderRepositoryGetter);
        this.registerInclusionResolver('account', this.account.inclusionResolver);
        this.registerInclusionResolver('appFile', this.appFile.inclusionResolver);
        this.registerInclusionResolver('rta', this.rta.inclusionResolver);
        this.registerInclusionResolver('serviceProvider', this.serviceProvider.inclusionResolver);
    }
};
NomineeDocumentRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('AccountRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('UserManagementAppFileRepository')),
    (0, tslib_1.__param)(3, repository_1.repository.getter('RtaRepository')),
    (0, tslib_1.__param)(4, repository_1.repository.getter('ServiceProviderRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function, Function, Function])
], NomineeDocumentRepository);
exports.NomineeDocumentRepository = NomineeDocumentRepository;
//# sourceMappingURL=nominee-document.repository.js.map