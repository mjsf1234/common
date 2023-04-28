"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenureRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let TenureRepository = class TenureRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, modelPortfolioRepositoryGetter) {
        super(models_1.Tenure, dataSource);
        this.modelPortfolios = this.createHasManyRepositoryFactoryFor('modelPortfolios', modelPortfolioRepositoryGetter);
        this.registerInclusionResolver('modelPortfolios', this.modelPortfolios.inclusionResolver);
    }
};
TenureRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('ModelPortfolioRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function])
], TenureRepository);
exports.TenureRepository = TenureRepository;
//# sourceMappingURL=tenure.repository.js.map