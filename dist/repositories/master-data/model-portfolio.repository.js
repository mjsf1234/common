"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelPortfolioRepository = void 0;
const tslib_1 = require("tslib");
const __1 = require("..");
const repository_1 = require("@loopback/repository");
const __2 = require("../..");
let ModelPortfolioRepository = class ModelPortfolioRepository extends __1.BaseLocalRepository {
    constructor(dataSource, tenureRepositoryGetter, riskProfileRepositoryGetter, modelPortfolioAssetRepositoryGetter, modelPortfolioProductRepositoryGetter, modelPortfolioCategoryRepositoryGetter, modelPortfolioAmountCappingRepositoryGetter, modelPortfolioConfigRepositoryGetter
    //@repository.getter('ModelPortfolioInstrumentRepository') modelPortfolioInstrumentRepositoryGetter: Getter<ModelPortfolioInstrumentRepository>
    ) {
        super(__2.ModelPortfolio, dataSource);
        this.tenure = this.createBelongsToAccessorFor('tenure', tenureRepositoryGetter);
        this.riskProfile = this.createBelongsToAccessorFor('riskProfile', riskProfileRepositoryGetter);
        this.modelPortfolioAssets = this.createHasManyRepositoryFactoryFor('modelPortfolioAssets', modelPortfolioAssetRepositoryGetter);
        this.modelPortfolioProducts = this.createHasManyRepositoryFactoryFor('modelPortfolioProducts', modelPortfolioProductRepositoryGetter);
        this.modelPortfolioCategories = this.createHasManyRepositoryFactoryFor('modelPortfolioCategories', modelPortfolioCategoryRepositoryGetter);
        //this.modelPortfolioInstruments = this.createHasManyRepositoryFactoryFor('modelPortfolioInstruments', modelPortfolioInstrumentRepositoryGetter);
        this.modelPortfolioAmountCapping = this.createBelongsToAccessorFor('modelPortfolioAmountCapping', modelPortfolioAmountCappingRepositoryGetter);
        this.modelPortfolioConfig = this.createHasManyRepositoryFactoryFor('modelPortfolioConfig', modelPortfolioConfigRepositoryGetter);
        this.registerInclusionResolver('tenure', this.tenure.inclusionResolver);
        this.registerInclusionResolver('riskProfile', this.riskProfile.inclusionResolver);
        this.registerInclusionResolver('modelPortfolioAssets', this.modelPortfolioAssets.inclusionResolver);
        this.registerInclusionResolver('modelPortfolioProducts', this.modelPortfolioProducts.inclusionResolver);
        this.registerInclusionResolver('modelPortfolioCategories', this.modelPortfolioCategories.inclusionResolver);
        //this.registerInclusionResolver('modelPortfolioInstruments', this.modelPortfolioInstruments.inclusionResolver);
        this.registerInclusionResolver('modelPortfolioAmountCapping', this.modelPortfolioAmountCapping.inclusionResolver);
        this.registerInclusionResolver('modelPortfolioConfig', this.modelPortfolioConfig.inclusionResolver);
    }
};
ModelPortfolioRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('TenureRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('RiskProfileRepository')),
    (0, tslib_1.__param)(3, repository_1.repository.getter('ModelPortfolioAssetRepository')),
    (0, tslib_1.__param)(4, repository_1.repository.getter('ModelPortfolioProductRepository')),
    (0, tslib_1.__param)(5, repository_1.repository.getter('ModelPortfolioCategoryRepository')),
    (0, tslib_1.__param)(6, repository_1.repository.getter('ModelPortfolioAmountCappingRepository')),
    (0, tslib_1.__param)(7, repository_1.repository.getter('ModelPortfolioConfigRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function, Function, Function, Function, Function, Function])
], ModelPortfolioRepository);
exports.ModelPortfolioRepository = ModelPortfolioRepository;
//# sourceMappingURL=model-portfolio.repository.js.map