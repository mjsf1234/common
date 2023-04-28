import {belongsTo, hasMany, hasOne, model, property} from '@loopback/repository';
import {BaseSQLModel, DepositDetails, InstrumentSebiCategory} from '..';
import {AssetClassification} from './asset-classification.model';
import {Asset} from './asset.model';
import {BenchmarkReturn} from './benchmark-return.model';
import {BondDetails} from './bond-details.model';
import {CapitalBucket} from './capital-bucket.model';
import {DailyInstrumentPriceSnapshot} from './daily-instrument-price-snapshot.model';
import {DailyInstrumentRollingAlphaSnapshot} from './daily-instrument-rolling-alpha-snapshot.model';
import {EquityDetailsHistory} from './equity-details-history.model';
import {IndexDetails} from './index-details.model';
import {InstrumentCategory} from './instrument-category.model';
import {InstrumentHolding} from './instrument-holding.model';
import {InstrumentRatingMapping} from './instrument-rating-mapping.model';
import {InstrumentSectorMapping} from './instrument-sector-mapping.model';
import {InstrumentType} from './instrument-type.model';
import {MutualFundDetailsHistory} from './mutual-fund-details-history.model';
import {MutualFundDetails} from './mutual-fund-details.model';
import {InstrumentCategoryGroup} from './instrument-category-group.model';
import {Product} from './product.model';
import {ServiceProvider} from './service-provider.model';
import {TransactionalDataRefreshingQueueMessageEventType} from '../../queues';

@model({
  settings: {
    strict: false,
    indexes: {
      idx_is_active: {keys: {is_active: 1}, options: {unique: false}},
      idx_created_date: {keys: {created_date: 1}, options: {unique: false}},
      idx_last_modified_date: {keys: {last_modified_date: 1}, options: {unique: false}},
      idx_fundoo_code: {keys: {fundoo_code: 1}, options: {unique: false}},
      idx_isin_code: {keys: {isin_code: 1}, options: {unique: false}},
      idx_bse_unique_id: {keys: {bse_unique_id: 1}, options: {unique: false}}
    },
    postgresql: {tableName: 'instrument'},
    plural: 'Instruments',
    foreignKeys: {
      fkidx_instrument_product_fk_id_product: {
        name: 'fkidx_instrument_product_fk_id_product',
        foreignKey: 'fk_id_product',
        entityKey: 'id',
        entity: 'Product'
      },
      fkidx_instrument_asset_classification_fk_id_asset_classification: {
        name: 'fkidx_instrument_asset_classification_fk_id_asset_classification',
        foreignKey: 'fk_id_asset_classification',
        entityKey: 'id',
        entity: 'AssetClassification'
      },
      fkidx_instrument_asset_fk_id_asset: {
        name: 'fkidx_instrument_asset_fk_id_asset',
        foreignKey: 'fk_id_asset',
        entityKey: 'id',
        entity: 'Asset'
      },
      fkidx_instrument_asset_fk_id_tax_asset: {
        name: 'fkidx_instrument_asset_fk_id_tax_asset',
        foreignKey: 'fk_id_tax_asset',
        entityKey: 'id',
        entity: 'Asset'
      },
      fkidx_instrument_instrument_type_fk_id_instrument_type: {
        name: 'fkidx_instrument_instrument_type_fk_id_instrument_type',
        foreignKey: 'fk_id_instrument_type',
        entityKey: 'id',
        entity: 'InstrumentType'
      },
      fkidx_instrument_instrument_category_fk_id_instrument_category: {
        name: 'fkidx_instrument_instrument_category_fk_id_instrument_category',
        foreignKey: 'fk_id_instrument_category',
        entityKey: 'id',
        entity: 'InstrumentCategory'
      },
      fkidx_instrument_capital_bucket_fk_id_capital_bucket: {
        name: 'fkidx_instrument_capital_bucket_fk_id_capital_bucket',
        foreignKey: 'fk_id_capital_bucket',
        entityKey: 'id',
        entity: 'CapitalBucket'
      },
      fkidx_instrument_service_provider_fk_id_service_provider: {
        name: 'fkidx_instrument_service_provider_fk_id_service_provider',
        foreignKey: 'fk_id_service_provider',
        entityKey: 'id',
        entity: 'ServiceProvider'
      },
      fkidx_instrument_isc_fk_id_instrument_sebi_category: {
        name: 'fkidx_instrument_isc_fk_id_instrument_sebi_category',
        foreignKey: 'fk_id_instrument_sebi_category',
        entityKey: 'id',
        entity: 'InstrumentSebiCategory'
      }
    },
    syncRefresher: {
      eventType: TransactionalDataRefreshingQueueMessageEventType.INSTRUMENT_REPLICATION_BY_INSTRUMENT_ID,
      params: {
        instrumentId: 'id'
      }
    },
  }
})
export class Instrument extends BaseSQLModel {
  @property({
    type: 'string',
    postgresql: {columnName: 'name', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y'}
  })
  name?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'full_name', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y'}
  })
  fullName?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'description', dataType: 'TEXT', nullable: 'Y'}
  })
  description?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'service_provider_specific_code', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y'}
  })
  serviceProviderSpecificCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'rta_code', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y'}
  })
  rtaCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  bosCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'nse_code', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  nseCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'bse_code', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  bseCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'bse_unique_id', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  bseUniqueId?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'isin_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  isinCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'fundoo_code', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  fundooCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'fundoo_code_sub_plan', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  fundooCodeSubPlan?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'variant_fund_id', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  variantFundId?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'company_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  companyCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'fundoo_rta_code', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y'}
  })
  fundooRTACode?: string;

  @property({
    type: 'number',
    default: 1,
    optionLabelIdentifier: 'INSTRUMENTSTATUS',
    postgresql: {columnName: 'instrument_status', dataType: 'SMALLINT', nullable: 'Y'}
  })
  instrumentStatus?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'inception_price', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 30, dataScale: 10}
  })
  inceptionPrice?: number;

  @property({
    type: 'date',
    postgresql: {columnName: 'inception_price_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  inceptionPriceDate?: Date;

  @property({
    type: 'number',
    postgresql: {columnName: 'last_price', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 30, dataScale: 10}
  })
  lastPrice?: number;

  @property({
    type: 'date',
    postgresql: {columnName: 'last_price_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  lastPriceDate?: Date;

  @property({
    type: 'number',
    postgresql: {columnName: 'movement_from_previous_price', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 30, dataScale: 10}
  })
  movementFromPreviousPrice?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'percentage_movement_from_previous_price',
      dataType: 'NUMERIC',
      nullable: 'Y',
      dataPrecision: 25,
      dataScale: 10
    }
  })
  percentageMovementFromPreviousPrice?: number;

  @property({
    type: 'boolean',
    required: true,
    default: true,
    postgresql: {columnName: 'is_primary', dataType: 'BOOLEAN', nullable: 'N'}
  })
  isPrimary: boolean;

  @property({
    type: 'boolean',
    required: true,
    default: false,
    postgresql: {columnName: 'is_recommended', dataType: 'BOOLEAN', nullable: 'N'}
  })
  isRecommended: boolean;

  // @property({
  //   type: 'boolean',
  //   required: true,
  //   default: false,
  //   postgresql: {columnName: 'is_manual_upload', dataType: 'BOOLEAN', nullable: 'N'}
  // })
  // isManualUpload: boolean;

  @property({
    type: 'number',
    optionLabelIdentifier: 'RECOMMENDATIONTYPE',
    postgresql: {columnName: 'recommendation_type', dataType: 'SMALLINT', nullable: 'Y'},
    jsonSchema: {
      nullable: true
    }
  })
  recommendationType?: number | null;

  @property({
    type: 'number',
    postgresql: {columnName: 'instrument_rank', dataType: 'SMALLINT', nullable: 'Y'}
  })
  instrumentRank?: number;

  @property({
    type: 'number',
    required: true,
    default: 1,
    optionLabelIdentifier: 'INSTRUMENTUNITIZEDFLAG',
    postgresql: {columnName: 'unitized_flag', dataType: 'SMALLINT', nullable: 'N'}
  })
  unitizedFlag: number;

  @property({
    type: 'boolean',
    default: false,
    postgresql: {columnName: 'historic_nav', dataType: 'BOOLEAN', nullable: 'Y'}
  })
  historicNav?: boolean;

  @property({
    type: 'boolean',
    required: false,
    postgresql: {columnName: 'is_nfo', dataType: 'BOOLEAN', nullable: 'Y'}
  })
  isNfo: boolean;

  @belongsTo(
    () => Product,
    {
      name: 'product',
      keyFrom: 'productId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_product', dataType: 'INT', nullable: 'Y'}
    }
  )
  productId: number;

  @belongsTo(
    () => Asset,
    {
      name: 'asset',
      keyFrom: 'assetId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_asset', dataType: 'INT', nullable: 'Y'}
    }
  )
  assetId?: number;

  @belongsTo(
    () => Asset,
    {
      name: 'taxAsset',
      keyFrom: 'taxAssetId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_tax_asset', dataType: 'INT', nullable: 'Y'}
    }
  )
  taxAssetId?: number;

  @belongsTo(
    () => Instrument,
    {
      name: 'benchmarkInstrument',
      keyFrom: 'benchmarkInstrumentId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_benchmark_instrument', dataType: 'INT', nullable: 'Y'}
    }
  )
  benchmarkInstrumentId?: number;

  @belongsTo(
    () => InstrumentType,
    {
      name: 'instrumentType',
      keyFrom: 'instrumentTypeId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_instrument_type', dataType: 'INT', nullable: 'Y'}
    }
  )
  instrumentTypeId?: number;

  @belongsTo(
    () => InstrumentCategory,
    {
      name: 'instrumentCategory',
      keyFrom: 'instrumentCategoryId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_instrument_category', dataType: 'INT', nullable: 'Y'}
    }
  )
  instrumentCategoryId?: number;

  @belongsTo(
    () => InstrumentCategoryGroup,
    {
      name: 'instrumentCategoryGroup',
      keyFrom: 'categoryGroupId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_category_group', dataType: 'INT', nullable: 'Y'}
    }
  )
  categoryGroupId?: number;

  @belongsTo(
    () => InstrumentSebiCategory,
    {
      name: 'instrumentSebiCategory',
      keyFrom: 'instrumentSebiCategoryId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_instrument_sebi_category', dataType: 'INT', nullable: 'Y'}
    }
  )
  instrumentSebiCategoryId?: number;

  @belongsTo(
    () => CapitalBucket,
    {
      name: 'capitalBucket',
      keyFrom: 'capitalBucketId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_capital_bucket', dataType: 'INT', nullable: 'Y'}
    }
  )
  capitalBucketId?: number;

  @belongsTo(
    () => ServiceProvider,
    {
      name: 'serviceProvider',
      keyFrom: 'serviceProviderId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_service_provider', dataType: 'INT', nullable: 'Y'}
    }
  )
  serviceProviderId?: number;

  @belongsTo(
    () => AssetClassification,
    {
      name: 'assetClassification',
      keyFrom: 'assetClassificationId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_asset_classification', dataType: 'INT', nullable: 'Y'}
    }
  )
  assetClassificationId?: number;

  @hasOne(() => IndexDetails, {keyTo: 'instrumentId'})
  indexDetails?: IndexDetails;

  @hasOne(() => MutualFundDetails, {keyTo: 'instrumentId'})
  mutualFundDetails?: MutualFundDetails;

  @hasOne(() => BondDetails, {keyTo: 'instrumentId'})
  bondDetails?: BondDetails;

  @hasMany(() => DailyInstrumentPriceSnapshot, {keyTo: 'instrumentId'})
  dailyInstrumentPriceSnapshots?: DailyInstrumentPriceSnapshot[];

  @hasMany(() => InstrumentSectorMapping, {keyTo: 'instrumentId'})
  instrumentSectorMappings?: InstrumentSectorMapping[];

  @hasMany(() => InstrumentRatingMapping, {keyTo: 'instrumentId'})
  instrumentRatingMappings?: InstrumentRatingMapping[];

  @hasMany(() => InstrumentHolding, {keyTo: 'parentInstrumentId'})
  instrumentHoldingMappings?: InstrumentHolding[];

  @hasMany(() => EquityDetailsHistory, {keyTo: 'instrumentId'})
  equityDetailsHistory?: EquityDetailsHistory[];

  @hasMany(() => MutualFundDetailsHistory, {keyTo: 'instrumentId'})
  mutualFundDetailsHistory?: MutualFundDetailsHistory[];

  @hasMany(() => DailyInstrumentRollingAlphaSnapshot, {keyTo: 'instrumentId'})
  dailyInstrumentRollingAlphaSnapshots?: DailyInstrumentRollingAlphaSnapshot[];

  @hasMany(() => BenchmarkReturn, {keyTo: 'instrumentId'})
  benchmarkReturnHistories?: BenchmarkReturn[];

  @hasMany(() => DepositDetails, {keyTo: 'instrumentId'})
  depositDetails?: DepositDetails[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Instrument>) {
    super(data);
  }
}

export interface InstrumentRelations {
  // describe navigational properties here
}

export type InstrumentWithRelations = Instrument & InstrumentRelations;
