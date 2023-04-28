"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelPortfolioConfigRepository = void 0;
const tslib_1 = require("tslib");
const __1 = require("..");
const repository_1 = require("@loopback/repository");
const __2 = require("../..");
let ModelPortfolioConfigRepository = class ModelPortfolioConfigRepository extends __1.BaseLocalRepository {
    constructor(dataSource, modelPortfolioRepositoryGetter, modelPortfolioAmountCappingRepositoryGetter) {
        super(__2.ModelPortfolioConfig, dataSource);
        this.modelPortfolio = this.createBelongsToAccessorFor('modelPortfolio', modelPortfolioRepositoryGetter);
        this.modelPortfolioAmountCapping = this.createBelongsToAccessorFor('modelPortfolioAmountCapping', modelPortfolioAmountCappingRepositoryGetter);
        this.registerInclusionResolver('modelPortfolio', this.modelPortfolio.inclusionResolver);
        this.registerInclusionResolver('modelPortfolioAmountCapping', this.modelPortfolioAmountCapping.inclusionResolver);
    }
};
ModelPortfolioConfigRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('ModelPortfolioRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('ModelPortfolioAmountCappingRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function])
], ModelPortfolioConfigRepository);
exports.ModelPortfolioConfigRepository = ModelPortfolioConfigRepository;
//# sourceMappingURL=model-portfolio-config.repository.js.map