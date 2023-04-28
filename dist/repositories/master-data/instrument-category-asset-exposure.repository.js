"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstrumentCategoryAssetExposureRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let InstrumentCategoryAssetExposureRepository = class InstrumentCategoryAssetExposureRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, instrumentCategoryRepositoryGetter, assetRepositoryGetter) {
        super(models_1.InstrumentCategoryAssetExposure, dataSource);
        this.instrumentCategory = this.createBelongsToAccessorFor('instrumentCategory', instrumentCategoryRepositoryGetter);
        this.asset = this.createBelongsToAccessorFor('asset', assetRepositoryGetter);
        this.registerInclusionResolver('instrumentCategory', this.instrumentCategory.inclusionResolver);
        this.registerInclusionResolver('asset', this.asset.inclusionResolver);
    }
};
InstrumentCategoryAssetExposureRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('InstrumentCategoryRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('AssetRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function])
], InstrumentCategoryAssetExposureRepository);
exports.InstrumentCategoryAssetExposureRepository = InstrumentCategoryAssetExposureRepository;
//# sourceMappingURL=instrument-category-asset-exposure.repository.js.map