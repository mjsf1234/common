"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiskProfileHistoryRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let RiskProfileHistoryRepository = class RiskProfileHistoryRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, accountRepositoryGetter, riskProfileRepositoryGetter) {
        super(models_1.RiskProfileHistory, dataSource);
        this.account = this.createBelongsToAccessorFor('account', accountRepositoryGetter);
        this.riskProfile = this.createBelongsToAccessorFor('riskProfile', riskProfileRepositoryGetter);
        this.registerInclusionResolver('account', this.account.inclusionResolver);
        this.registerInclusionResolver('riskProfile', this.riskProfile.inclusionResolver);
    }
};
RiskProfileHistoryRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('AccountRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('RiskProfileRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function])
], RiskProfileHistoryRepository);
exports.RiskProfileHistoryRepository = RiskProfileHistoryRepository;
//# sourceMappingURL=risk-profile-history.repository.js.map