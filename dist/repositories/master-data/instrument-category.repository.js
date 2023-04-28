"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstrumentCategoryRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let InstrumentCategoryRepository = class InstrumentCategoryRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, benchmarkInstrumentRepositoryGetter, assetRepositoryRepositoryGetter, categoryReturnHistoryRepositoryGetter, instrumentCategoryGroupRepositoryGetter) {
        super(models_1.InstrumentCategory, dataSource);
        this.benchmarkInstrument = this.createBelongsToAccessorFor('benchmarkInstrument', benchmarkInstrumentRepositoryGetter);
        this.asset = this.createBelongsToAccessorFor('asset', assetRepositoryRepositoryGetter);
        this.categoryReturnHistories = this.createHasManyRepositoryFactoryFor('categoryReturnHistories', categoryReturnHistoryRepositoryGetter);
        this.instrumentCategoryGroup = this.createBelongsToAccessorFor('instrumentCategoryGroup', instrumentCategoryGroupRepositoryGetter);
        this.registerInclusionResolver('benchmarkInstrument', this.benchmarkInstrument.inclusionResolver);
        this.registerInclusionResolver('asset', this.asset.inclusionResolver);
        this.registerInclusionResolver('categoryReturnHistories', this.categoryReturnHistories.inclusionResolver);
        this.registerInclusionResolver('instrumentCategoryGroup', this.instrumentCategoryGroup.inclusionResolver);
    }
};
InstrumentCategoryRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('InstrumentRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('AssetRepository')),
    (0, tslib_1.__param)(3, repository_1.repository.getter('CategoryReturnHistoryRepository')),
    (0, tslib_1.__param)(4, repository_1.repository.getter('InstrumentCategoryGroupRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function, Function, Function])
], InstrumentCategoryRepository);
exports.InstrumentCategoryRepository = InstrumentCategoryRepository;
//# sourceMappingURL=instrument-category.repository.js.map