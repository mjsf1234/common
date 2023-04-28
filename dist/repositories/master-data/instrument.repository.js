"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstrumentRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let InstrumentRepository = class InstrumentRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, productRepositoryGetter, assetRepositoryGetter, instrumentCategoryGroupGetter, taxAssetRepositoryGetter, benchmarkInstrumentRepositoryGetter, instrumentTypeRepositoryGetter, instrumentCategoryRepositoryGetter, instrumentSebiCategoryRepositoryGetter, capitalBucketRepositoryGetter, serviceProviderRepositoryGetter, assetClassificationRepositoryGetter, indexDetailsRepositoryGetter, mutualFundDetailsRepositoryGetter, bondDetailsRepositoryGetter, dailyInstrumentPriceSnapshotRepositoryGetter, instrumentSectorMappingRepositoryGetter, instrumentRatingMappingRepositoryGetter, instrumentHoldingRepositoryGetter, equityDetailsHistoryRepositoryGetter, mutualFundDetailsHistoryRepositoryGetter, dailyInstrumentRollingAlphaSnapshotRepositoryGetter, benchmarkReturnRepositoryGetter, depositDetailsRepositoryGetter) {
        super(models_1.Instrument, dataSource);
        this.product = this.createBelongsToAccessorFor('product', productRepositoryGetter);
        this.asset = this.createBelongsToAccessorFor('asset', assetRepositoryGetter);
        this.instrumentCategoryGroup = this.createBelongsToAccessorFor('instrumentCategoryGroup', instrumentCategoryGroupGetter);
        this.taxAsset = this.createBelongsToAccessorFor('taxAsset', taxAssetRepositoryGetter);
        this.benchmarkInstrument = this.createBelongsToAccessorFor('benchmarkInstrument', benchmarkInstrumentRepositoryGetter);
        this.instrumentType = this.createBelongsToAccessorFor('instrumentType', instrumentTypeRepositoryGetter);
        this.instrumentCategory = this.createBelongsToAccessorFor('instrumentCategory', instrumentCategoryRepositoryGetter);
        this.instrumentSebiCategory = this.createBelongsToAccessorFor('instrumentSebiCategory', instrumentSebiCategoryRepositoryGetter);
        this.capitalBucket = this.createBelongsToAccessorFor('capitalBucket', capitalBucketRepositoryGetter);
        this.serviceProvider = this.createBelongsToAccessorFor('serviceProvider', serviceProviderRepositoryGetter);
        this.assetClassification = this.createBelongsToAccessorFor('assetClassification', assetClassificationRepositoryGetter);
        this.indexDetails = this.createHasOneRepositoryFactoryFor('indexDetails', indexDetailsRepositoryGetter);
        this.mutualFundDetails = this.createHasOneRepositoryFactoryFor('mutualFundDetails', mutualFundDetailsRepositoryGetter);
        this.bondDetails = this.createHasOneRepositoryFactoryFor('bondDetails', bondDetailsRepositoryGetter);
        this.depositDetails = this.createHasManyRepositoryFactoryFor('depositDetails', depositDetailsRepositoryGetter);
        this.dailyInstrumentPriceSnapshots = this.createHasManyRepositoryFactoryFor('dailyInstrumentPriceSnapshots', dailyInstrumentPriceSnapshotRepositoryGetter);
        this.instrumentSectorMappings = this.createHasManyRepositoryFactoryFor('instrumentSectorMappings', instrumentSectorMappingRepositoryGetter);
        this.instrumentRatingMappings = this.createHasManyRepositoryFactoryFor('instrumentRatingMappings', instrumentRatingMappingRepositoryGetter);
        this.instrumentHoldingMappings = this.createHasManyRepositoryFactoryFor('instrumentHoldingMappings', instrumentHoldingRepositoryGetter);
        this.equityDetailsHistory = this.createHasManyRepositoryFactoryFor('equityDetailsHistory', equityDetailsHistoryRepositoryGetter);
        this.mutualFundDetailsHistory = this.createHasManyRepositoryFactoryFor('mutualFundDetailsHistory', mutualFundDetailsHistoryRepositoryGetter);
        this.dailyInstrumentRollingAlphaSnapshots = this.createHasManyRepositoryFactoryFor('dailyInstrumentRollingAlphaSnapshots', dailyInstrumentRollingAlphaSnapshotRepositoryGetter);
        this.benchmarkReturnHistories = this.createHasManyRepositoryFactoryFor('benchmarkReturnHistories', benchmarkReturnRepositoryGetter);
        this.registerInclusionResolver('product', this.product.inclusionResolver);
        this.registerInclusionResolver('asset', this.asset.inclusionResolver);
        this.registerInclusionResolver('instrumentCategoryGroup', this.instrumentCategoryGroup.inclusionResolver);
        this.registerInclusionResolver('taxAsset', this.taxAsset.inclusionResolver);
        this.registerInclusionResolver('benchmarkInstrument', this.benchmarkInstrument.inclusionResolver);
        this.registerInclusionResolver('instrumentType', this.instrumentType.inclusionResolver);
        this.registerInclusionResolver('instrumentCategory', this.instrumentCategory.inclusionResolver);
        this.registerInclusionResolver('instrumentSebiCategory', this.instrumentSebiCategory.inclusionResolver);
        this.registerInclusionResolver('capitalBucket', this.capitalBucket.inclusionResolver);
        this.registerInclusionResolver('serviceProvider', this.serviceProvider.inclusionResolver);
        this.registerInclusionResolver('assetClassification', this.assetClassification.inclusionResolver);
        this.registerInclusionResolver('indexDetails', this.indexDetails.inclusionResolver);
        this.registerInclusionResolver('mutualFundDetails', this.mutualFundDetails.inclusionResolver);
        this.registerInclusionResolver('bondDetails', this.bondDetails.inclusionResolver);
        this.registerInclusionResolver('dailyInstrumentPriceSnapshots', this.dailyInstrumentPriceSnapshots.inclusionResolver);
        this.registerInclusionResolver('instrumentSectorMappings', this.instrumentSectorMappings.inclusionResolver);
        this.registerInclusionResolver('instrumentRatingMappings', this.instrumentRatingMappings.inclusionResolver);
        this.registerInclusionResolver('instrumentHoldingMappings', this.instrumentHoldingMappings.inclusionResolver);
        this.registerInclusionResolver('equityDetailsHistory', this.equityDetailsHistory.inclusionResolver);
        this.registerInclusionResolver('mutualFundDetailsHistory', this.mutualFundDetailsHistory.inclusionResolver);
        this.registerInclusionResolver('dailyInstrumentRollingAlphaSnapshots', this.dailyInstrumentRollingAlphaSnapshots.inclusionResolver);
        this.registerInclusionResolver('benchmarkReturnHistories', this.benchmarkReturnHistories.inclusionResolver);
        this.registerInclusionResolver('depositDetails', this.depositDetails.inclusionResolver);
    }
};
InstrumentRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('ProductRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('AssetRepository')),
    (0, tslib_1.__param)(3, repository_1.repository.getter('InstrumentCategoryGroupRepository')),
    (0, tslib_1.__param)(4, repository_1.repository.getter('AssetRepository')),
    (0, tslib_1.__param)(5, repository_1.repository.getter('InstrumentRepository')),
    (0, tslib_1.__param)(6, repository_1.repository.getter('InstrumentTypeRepository')),
    (0, tslib_1.__param)(7, repository_1.repository.getter('InstrumentCategoryRepository')),
    (0, tslib_1.__param)(8, repository_1.repository.getter('InstrumentSebiCategoryRepository')),
    (0, tslib_1.__param)(9, repository_1.repository.getter('CapitalBucketRepository')),
    (0, tslib_1.__param)(10, repository_1.repository.getter('ServiceProviderRepository')),
    (0, tslib_1.__param)(11, repository_1.repository.getter('AssetClassificationRepository')),
    (0, tslib_1.__param)(12, repository_1.repository.getter('IndexDetailsRepository')),
    (0, tslib_1.__param)(13, repository_1.repository.getter('MutualFundDetailsRepository')),
    (0, tslib_1.__param)(14, repository_1.repository.getter('BondDetailsRepository')),
    (0, tslib_1.__param)(15, repository_1.repository.getter('DailyInstrumentPriceSnapshotRepository')),
    (0, tslib_1.__param)(16, repository_1.repository.getter('InstrumentSectorMappingRepository')),
    (0, tslib_1.__param)(17, repository_1.repository.getter('InstrumentRatingMappingRepository')),
    (0, tslib_1.__param)(18, repository_1.repository.getter('InstrumentHoldingRepository')),
    (0, tslib_1.__param)(19, repository_1.repository.getter('EquityDetailsHistoryRepository')),
    (0, tslib_1.__param)(20, repository_1.repository.getter('MutualFundDetailsHistoryRepository')),
    (0, tslib_1.__param)(21, repository_1.repository.getter('DailyInstrumentRollingAlphaSnapshotRepository')),
    (0, tslib_1.__param)(22, repository_1.repository.getter('BenchmarkReturnRepository')),
    (0, tslib_1.__param)(23, repository_1.repository.getter('DepositDetailsRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function, Function])
], InstrumentRepository);
exports.InstrumentRepository = InstrumentRepository;
//# sourceMappingURL=instrument.repository.js.map