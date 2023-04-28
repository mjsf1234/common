"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelPortfolioInstrumentRepository = void 0;
const tslib_1 = require("tslib");
const __1 = require("..");
const repository_1 = require("@loopback/repository");
const __2 = require("../..");
let ModelPortfolioInstrumentRepository = class ModelPortfolioInstrumentRepository extends __1.BaseLocalRepository {
    constructor(dataSource, instrumentRepositoryGetter, 
    /*@repository.getter('ModelPortfolioRepository') modelPortfolioRepositoryGetter: Getter<ModelPortfolioRepository>,
    @repository.getter('ModelPortfolioAssetRepository') modelPortfolioAssetRepositoryGetter: Getter<ModelPortfolioAssetRepository>,
    @repository.getter('ModelPortfolioProductRepository') modelPortfolioProductRepositoryGetter: Getter<ModelPortfolioProductRepository>,
    @repository.getter('ModelPortfolioCategoryRepository') modelPortfolioCategoryRepositoryGetter: Getter<ModelPortfolioCategoryRepository>,
    */
    riskProfileRepositoryGetter, modelPortfolioAmountCappingRepositoryGetter) {
        super(__2.ModelPortfolioInstrument, dataSource);
        this.instrument = this.createBelongsToAccessorFor('instrument', instrumentRepositoryGetter);
        /*this.modelPortfolio = this.createBelongsToAccessorFor('modelPortfolio', modelPortfolioRepositoryGetter);
        this.modelPortfolioAsset = this.createBelongsToAccessorFor('modelPortfolioAsset', modelPortfolioAssetRepositoryGetter);
        this.modelPortfolioProduct = this.createBelongsToAccessorFor('modelPortfolioProduct', modelPortfolioProductRepositoryGetter);
        this.modelPortfolioCategory = this.createBelongsToAccessorFor('modelPortfolioCategory', modelPortfolioCategoryRepositoryGetter);
        */
        this.riskProfile = this.createBelongsToAccessorFor('riskProfile', riskProfileRepositoryGetter);
        this.modelPortfolioAmountCapping = this.createBelongsToAccessorFor('modelPortfolioAmountCapping', modelPortfolioAmountCappingRepositoryGetter);
        this.registerInclusionResolver('instrument', this.instrument.inclusionResolver);
        /*this.registerInclusionResolver('modelPortfolio', this.modelPortfolio.inclusionResolver);
        this.registerInclusionResolver('modelPortfolioAsset', this.modelPortfolioAsset.inclusionResolver);
        this.registerInclusionResolver('modelPortfolioProduct', this.modelPortfolioProduct.inclusionResolver);
        this.registerInclusionResolver('modelPortfolioCategory', this.modelPortfolioCategory.inclusionResolver);
        */
        this.registerInclusionResolver('riskProfile', this.riskProfile.inclusionResolver);
        this.registerInclusionResolver('modelPortfolioAmountCapping', this.modelPortfolioAmountCapping.inclusionResolver);
    }
};
ModelPortfolioInstrumentRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('InstrumentRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('RiskProfileRepository')),
    (0, tslib_1.__param)(3, repository_1.repository.getter('ModelPortfolioAmountCappingRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function, Function])
], ModelPortfolioInstrumentRepository);
exports.ModelPortfolioInstrumentRepository = ModelPortfolioInstrumentRepository;
//# sourceMappingURL=model-portfolio-instrument.repository.js.map