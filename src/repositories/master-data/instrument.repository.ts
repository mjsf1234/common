import {
  BaseLocalRepository,
  BenchmarkReturnRepository,
  BondDetailsRepository,
  DepositDetailsRepository,
  InstrumentSebiCategoryRepository
} from '../../repositories';
import {BelongsToAccessor, Getter, HasManyRepositoryFactory, HasOneRepositoryFactory, juggler, repository} from '@loopback/repository';
import {
  Asset,
  AssetClassification,
  BenchmarkReturn,
  BondDetails,
  CapitalBucket,
  DailyInstrumentPriceSnapshot,
  DailyInstrumentRollingAlphaSnapshot,
  DepositDetails,
  EquityDetailsHistory,
  IndexDetails,
  Instrument,
  InstrumentCategory,
  InstrumentCategoryGroup,
  InstrumentHolding,
  InstrumentRatingMapping,
  InstrumentRelations,
  InstrumentSebiCategory,
  InstrumentSectorMapping,
  InstrumentType,
  MutualFundDetails,
  MutualFundDetailsHistory,
  Product,
  ServiceProvider
} from '../../models';
import {ProductRepository} from './product.repository';
import {AssetRepository} from './asset.repository';
import {InstrumentTypeRepository} from './instrument-type.repository';
import {InstrumentCategoryRepository} from './instrument-category.repository';
import {CapitalBucketRepository} from './capital-bucket.repository';
import {ServiceProviderRepository} from './service-provider.repository';
import {AssetClassificationRepository} from './asset-classification.repository';
import {IndexDetailsRepository} from './index-details.repository';
import {MutualFundDetailsRepository} from './mutual-fund-details.repository';
import {DailyInstrumentPriceSnapshotRepository} from './daily-instrument-price-snapshot.repository';
import {InstrumentSectorMappingRepository} from './instrument-sector-mapping.repository';
import {InstrumentRatingMappingRepository} from './instrument-rating-mapping.repository';
import {InstrumentHoldingRepository} from './instrument-holding.repository';
import {EquityDetailsHistoryRepository} from './equity-details-history.repository';
import {MutualFundDetailsHistoryRepository} from './mutual-fund-details-history.repository';
import {DailyInstrumentRollingAlphaSnapshotRepository} from './daily-instrument-rolling-alpha-snapshot.repository';
import {InstrumentCategoryGroupRepository} from './instrument-category-group.repository';

export class InstrumentRepository extends BaseLocalRepository<Instrument, typeof Instrument.prototype.id, InstrumentRelations> {
  public readonly product: BelongsToAccessor<Product, typeof Instrument.prototype.id>;
  public readonly asset: BelongsToAccessor<Asset, typeof Instrument.prototype.id>;
  public readonly instrumentCategoryGroup: BelongsToAccessor<InstrumentCategoryGroup, typeof Instrument.prototype.id>;
  public readonly taxAsset: BelongsToAccessor<Asset, typeof Instrument.prototype.id>;
  public readonly benchmarkInstrument: BelongsToAccessor<Instrument, typeof Instrument.prototype.id>;
  public readonly instrumentType: BelongsToAccessor<InstrumentType, typeof Instrument.prototype.id>;
  public readonly instrumentCategory: BelongsToAccessor<InstrumentCategory, typeof Instrument.prototype.id>;
  public readonly instrumentSebiCategory: BelongsToAccessor<InstrumentSebiCategory, typeof Instrument.prototype.id>;
  public readonly capitalBucket: BelongsToAccessor<CapitalBucket, typeof Instrument.prototype.id>;
  public readonly serviceProvider: BelongsToAccessor<ServiceProvider, typeof Instrument.prototype.id>;
  public readonly assetClassification: BelongsToAccessor<AssetClassification, typeof Instrument.prototype.id>;

  public readonly indexDetails: HasOneRepositoryFactory<IndexDetails, typeof IndexDetails.prototype.id>;
  public readonly mutualFundDetails: HasOneRepositoryFactory<MutualFundDetails, typeof MutualFundDetails.prototype.id>;
  public readonly bondDetails: HasOneRepositoryFactory<BondDetails, typeof BondDetails.prototype.id>;

  public readonly dailyInstrumentPriceSnapshots: HasManyRepositoryFactory<DailyInstrumentPriceSnapshot, typeof Instrument.prototype.id>;
  public readonly instrumentSectorMappings: HasManyRepositoryFactory<InstrumentSectorMapping, typeof Instrument.prototype.id>;
  public readonly instrumentRatingMappings: HasManyRepositoryFactory<InstrumentRatingMapping, typeof Instrument.prototype.id>;
  public readonly instrumentHoldingMappings: HasManyRepositoryFactory<InstrumentHolding, typeof Instrument.prototype.id>;
  public readonly equityDetailsHistory: HasManyRepositoryFactory<EquityDetailsHistory, typeof Instrument.prototype.id>;
  public readonly mutualFundDetailsHistory: HasManyRepositoryFactory<MutualFundDetailsHistory, typeof Instrument.prototype.id>;
  public readonly dailyInstrumentRollingAlphaSnapshots: HasManyRepositoryFactory<
    DailyInstrumentRollingAlphaSnapshot,
    typeof Instrument.prototype.id
  >;
  public readonly benchmarkReturnHistories: HasManyRepositoryFactory<BenchmarkReturn, typeof Instrument.prototype.id>;
  public readonly depositDetails: HasManyRepositoryFactory<DepositDetails, typeof Instrument.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('ProductRepository') productRepositoryGetter: Getter<ProductRepository>,
    @repository.getter('AssetRepository') assetRepositoryGetter: Getter<AssetRepository>,
    @repository.getter('InstrumentCategoryGroupRepository') instrumentCategoryGroupGetter: Getter<InstrumentCategoryGroupRepository>,
    @repository.getter('AssetRepository') taxAssetRepositoryGetter: Getter<AssetRepository>,
    @repository.getter('InstrumentRepository') benchmarkInstrumentRepositoryGetter: Getter<InstrumentRepository>,
    @repository.getter('InstrumentTypeRepository') instrumentTypeRepositoryGetter: Getter<InstrumentTypeRepository>,
    @repository.getter('InstrumentCategoryRepository') instrumentCategoryRepositoryGetter: Getter<InstrumentCategoryRepository>,
    @repository.getter('InstrumentSebiCategoryRepository') instrumentSebiCategoryRepositoryGetter: Getter<InstrumentSebiCategoryRepository>,
    @repository.getter('CapitalBucketRepository') capitalBucketRepositoryGetter: Getter<CapitalBucketRepository>,
    @repository.getter('ServiceProviderRepository') serviceProviderRepositoryGetter: Getter<ServiceProviderRepository>,
    @repository.getter('AssetClassificationRepository') assetClassificationRepositoryGetter: Getter<AssetClassificationRepository>,
    @repository.getter('IndexDetailsRepository') indexDetailsRepositoryGetter: Getter<IndexDetailsRepository>,
    @repository.getter('MutualFundDetailsRepository') mutualFundDetailsRepositoryGetter: Getter<MutualFundDetailsRepository>,
    @repository.getter('BondDetailsRepository') bondDetailsRepositoryGetter: Getter<BondDetailsRepository>,
    @repository.getter('DailyInstrumentPriceSnapshotRepository')
    dailyInstrumentPriceSnapshotRepositoryGetter: Getter<DailyInstrumentPriceSnapshotRepository>,
    @repository.getter('InstrumentSectorMappingRepository')
    instrumentSectorMappingRepositoryGetter: Getter<InstrumentSectorMappingRepository>,
    @repository.getter('InstrumentRatingMappingRepository')
    instrumentRatingMappingRepositoryGetter: Getter<InstrumentRatingMappingRepository>,
    @repository.getter('InstrumentHoldingRepository') instrumentHoldingRepositoryGetter: Getter<InstrumentHoldingRepository>,
    @repository.getter('EquityDetailsHistoryRepository') equityDetailsHistoryRepositoryGetter: Getter<EquityDetailsHistoryRepository>,
    @repository.getter('MutualFundDetailsHistoryRepository')
    mutualFundDetailsHistoryRepositoryGetter: Getter<MutualFundDetailsHistoryRepository>,
    @repository.getter('DailyInstrumentRollingAlphaSnapshotRepository')
    dailyInstrumentRollingAlphaSnapshotRepositoryGetter: Getter<DailyInstrumentRollingAlphaSnapshotRepository>,
    @repository.getter('BenchmarkReturnRepository')
    benchmarkReturnRepositoryGetter: Getter<BenchmarkReturnRepository>,
    @repository.getter('DepositDetailsRepository')
    depositDetailsRepositoryGetter: Getter<DepositDetailsRepository>
  ) {
    super(Instrument, dataSource);
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

    this.dailyInstrumentPriceSnapshots = this.createHasManyRepositoryFactoryFor(
      'dailyInstrumentPriceSnapshots',
      dailyInstrumentPriceSnapshotRepositoryGetter
    );
    this.instrumentSectorMappings = this.createHasManyRepositoryFactoryFor(
      'instrumentSectorMappings',
      instrumentSectorMappingRepositoryGetter
    );
    this.instrumentRatingMappings = this.createHasManyRepositoryFactoryFor(
      'instrumentRatingMappings',
      instrumentRatingMappingRepositoryGetter
    );
    this.instrumentHoldingMappings = this.createHasManyRepositoryFactoryFor('instrumentHoldingMappings', instrumentHoldingRepositoryGetter);
    this.equityDetailsHistory = this.createHasManyRepositoryFactoryFor('equityDetailsHistory', equityDetailsHistoryRepositoryGetter);
    this.mutualFundDetailsHistory = this.createHasManyRepositoryFactoryFor(
      'mutualFundDetailsHistory',
      mutualFundDetailsHistoryRepositoryGetter
    );
    this.dailyInstrumentRollingAlphaSnapshots = this.createHasManyRepositoryFactoryFor(
      'dailyInstrumentRollingAlphaSnapshots',
      dailyInstrumentRollingAlphaSnapshotRepositoryGetter
    );
    this.benchmarkReturnHistories = this.createHasManyRepositoryFactoryFor(
      'benchmarkReturnHistories',
      benchmarkReturnRepositoryGetter
    );

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
}
