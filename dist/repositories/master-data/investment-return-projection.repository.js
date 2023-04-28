"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvestmentReturnProjectionRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let InvestmentReturnProjectionRepository = class InvestmentReturnProjectionRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, riskProfileRepositoryGetter) {
        super(models_1.InvestmentReturnProjection, dataSource);
        this.riskProfile = this.createBelongsToAccessorFor('riskProfile', riskProfileRepositoryGetter);
        this.registerInclusionResolver('riskProfile', this.riskProfile.inclusionResolver);
    }
};
InvestmentReturnProjectionRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('RiskProfileRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function])
], InvestmentReturnProjectionRepository);
exports.InvestmentReturnProjectionRepository = InvestmentReturnProjectionRepository;
//# sourceMappingURL=investment-return-projection.repository.js.map