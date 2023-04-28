"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelPortfolioAssetRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let ModelPortfolioAssetRepository = class ModelPortfolioAssetRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, modelPortfolioRepositoryGetter, assetRepositoryGetter) {
        super(models_1.ModelPortfolioAsset, dataSource);
        this.modelPortfolio = this.createBelongsToAccessorFor('modelPortfolio', modelPortfolioRepositoryGetter);
        this.asset = this.createBelongsToAccessorFor('asset', assetRepositoryGetter);
        this.registerInclusionResolver('modelPortfolio', this.modelPortfolio.inclusionResolver);
        this.registerInclusionResolver('asset', this.asset.inclusionResolver);
    }
};
ModelPortfolioAssetRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('ModelPortfolioRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('AssetRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function])
], ModelPortfolioAssetRepository);
exports.ModelPortfolioAssetRepository = ModelPortfolioAssetRepository;
//# sourceMappingURL=model-portfolio-asset.repository.js.map