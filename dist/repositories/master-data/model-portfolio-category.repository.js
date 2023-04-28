"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelPortfolioCategoryRepository = void 0;
const tslib_1 = require("tslib");
const __1 = require("..");
const repository_1 = require("@loopback/repository");
const __2 = require("../..");
let ModelPortfolioCategoryRepository = class ModelPortfolioCategoryRepository extends __1.BaseLocalRepository {
    constructor(dataSource, modelPortfolioRepositoryGetter, modelPortfolioAssetRepositoryGetter, modelPortfolioProductRepositoryGetter, instrumentCategoryGetter) {
        super(__2.ModelPortfolioCategory, dataSource);
        this.modelPortfolio = this.createBelongsToAccessorFor('modelPortfolio', modelPortfolioRepositoryGetter);
        this.modelPortfolioAsset = this.createBelongsToAccessorFor('modelPortfolioAsset', modelPortfolioAssetRepositoryGetter);
        this.modelPortfolioProduct = this.createBelongsToAccessorFor('modelPortfolioProduct', modelPortfolioProductRepositoryGetter);
        this.instrumentCategory = this.createBelongsToAccessorFor('instrumentCategory', instrumentCategoryGetter);
        this.registerInclusionResolver('modelPortfolio', this.modelPortfolio.inclusionResolver);
        this.registerInclusionResolver('modelPortfolioAsset', this.modelPortfolioAsset.inclusionResolver);
        this.registerInclusionResolver('modelPortfolioProduct', this.modelPortfolioProduct.inclusionResolver);
        this.registerInclusionResolver('instrumentCategory', this.instrumentCategory.inclusionResolver);
    }
};
ModelPortfolioCategoryRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('ModelPortfolioRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('ModelPortfolioAssetRepository')),
    (0, tslib_1.__param)(3, repository_1.repository.getter('ModelPortfolioProductRepository')),
    (0, tslib_1.__param)(4, repository_1.repository.getter('InstrumentCategoryRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function, Function, Function])
], ModelPortfolioCategoryRepository);
exports.ModelPortfolioCategoryRepository = ModelPortfolioCategoryRepository;
//# sourceMappingURL=model-portfolio-category.repository.js.map