"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MutualFundLoadHistoryRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let MutualFundLoadHistoryRepository = class MutualFundLoadHistoryRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, instrumentRepositoryGetter) {
        super(models_1.MutualFundLoadHistory, dataSource);
        this.instrument = this.createBelongsToAccessorFor('instrument', instrumentRepositoryGetter);
        this.registerInclusionResolver('instrument', this.instrument.inclusionResolver);
    }
};
MutualFundLoadHistoryRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('InstrumentRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function])
], MutualFundLoadHistoryRepository);
exports.MutualFundLoadHistoryRepository = MutualFundLoadHistoryRepository;
//# sourceMappingURL=mutual-fund-load-history.repository.js.map