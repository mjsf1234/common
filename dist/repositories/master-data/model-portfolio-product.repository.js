"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelPortfolioProductRepository = void 0;
const tslib_1 = require("tslib");
const __1 = require("..");
const repository_1 = require("@loopback/repository");
const __2 = require("../..");
let ModelPortfolioProductRepository = class ModelPortfolioProductRepository extends __1.BaseLocalRepository {
    constructor(dataSource, modelPortfolioRepositoryGetter, modelPortfolioAssetRepositoryGetter, productRepositoryGetter) {
        super(__2.ModelPortfolioProduct, dataSource);
        this.modelPortfolio = this.createBelongsToAccessorFor('modelPortfolio', modelPortfolioRepositoryGetter);
        this.modelPortfolioAsset = this.createBelongsToAccessorFor('modelPortfolioAsset', modelPortfolioAssetRepositoryGetter);
        this.product = this.createBelongsToAccessorFor('product', productRepositoryGetter);
        this.registerInclusionResolver('modelPortfolio', this.modelPortfolio.inclusionResolver);
        this.registerInclusionResolver('modelPortfolioAsset', this.modelPortfolioAsset.inclusionResolver);
        this.registerInclusionResolver('product', this.product.inclusionResolver);
    }
};
ModelPortfolioProductRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('ModelPortfolioRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('ModelPortfolioAssetRepository')),
    (0, tslib_1.__param)(3, repository_1.repository.getter('ProductRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function, Function])
], ModelPortfolioProductRepository);
exports.ModelPortfolioProductRepository = ModelPortfolioProductRepository;
//# sourceMappingURL=model-portfolio-product.repository.js.map