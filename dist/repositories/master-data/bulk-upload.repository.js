"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulkUploadRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let BulkUploadRepository = class BulkUploadRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, masterDataAppFileRepositoryGetter, appUserRepositoryGetter) {
        super(models_1.BulkUpload, dataSource);
        this.masterDataAppFile = this.createBelongsToAccessorFor('masterDataAppFile', masterDataAppFileRepositoryGetter);
        this.appUser = this.createBelongsToAccessorFor('appUser', appUserRepositoryGetter);
        this.registerInclusionResolver('masterDataAppFile', this.masterDataAppFile.inclusionResolver);
        this.registerInclusionResolver('appUser', this.appUser.inclusionResolver);
    }
};
BulkUploadRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('MasterDataAppFileRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('AppUserRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function])
], BulkUploadRepository);
exports.BulkUploadRepository = BulkUploadRepository;
//# sourceMappingURL=bulk-upload.repository.js.map