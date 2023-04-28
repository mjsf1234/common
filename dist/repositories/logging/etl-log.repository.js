"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EtlLogRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let EtlLogRepository = class EtlLogRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, bulkUploadRepositoryGetter) {
        super(models_1.EtlLog, dataSource);
        this.bulkUpload = this.createBelongsToAccessorFor('bulkUpload', bulkUploadRepositoryGetter);
        this.registerInclusionResolver('bulkUpload', this.bulkUpload.inclusionResolver);
    }
};
EtlLogRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('BulkUploadRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function])
], EtlLogRepository);
exports.EtlLogRepository = EtlLogRepository;
//# sourceMappingURL=etl-log.repository.js.map