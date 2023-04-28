"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystematicMethodStatusHistoryRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let SystematicMethodStatusHistoryRepository = class SystematicMethodStatusHistoryRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, systematicMethodRepositoryGetter) {
        super(models_1.SystematicMethodStatusHistory, dataSource);
        this.systematicMethod = this.createBelongsToAccessorFor('systematicMethod', systematicMethodRepositoryGetter);
        this.registerInclusionResolver('systematicMethod', this.systematicMethod.inclusionResolver);
    }
};
SystematicMethodStatusHistoryRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('SystematicMethodRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function])
], SystematicMethodStatusHistoryRepository);
exports.SystematicMethodStatusHistoryRepository = SystematicMethodStatusHistoryRepository;
//# sourceMappingURL=systematic-method-status-history.repository.js.map