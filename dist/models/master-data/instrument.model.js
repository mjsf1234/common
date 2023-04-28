"use strict";
var Instrument_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instrument = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
const asset_classification_model_1 = require("./asset-classification.model");
const asset_model_1 = require("./asset.model");
const benchmark_return_model_1 = require("./benchmark-return.model");
const bond_details_model_1 = require("./bond-details.model");
const capital_bucket_model_1 = require("./capital-bucket.model");
const daily_instrument_price_snapshot_model_1 = require("./daily-instrument-price-snapshot.model");
const daily_instrument_rolling_alpha_snapshot_model_1 = require("./daily-instrument-rolling-alpha-snapshot.model");
const equity_details_history_model_1 = require("./equity-details-history.model");
const index_details_model_1 = require("./index-details.model");
const instrument_category_model_1 = require("./instrument-category.model");
const instrument_holding_model_1 = require("./instrument-holding.model");
const instrument_rating_mapping_model_1 = require("./instrument-rating-mapping.model");
const instrument_sector_mapping_model_1 = require("./instrument-sector-mapping.model");
const instrument_type_model_1 = require("./instrument-type.model");
const mutual_fund_details_history_model_1 = require("./mutual-fund-details-history.model");
const mutual_fund_details_model_1 = require("./mutual-fund-details.model");
const instrument_category_group_model_1 = require("./instrument-category-group.model");
const product_model_1 = require("./product.model");
const service_provider_model_1 = require("./service-provider.model");
const queues_1 = require("../../queues");
let Instrument = Instrument_1 = class Instrument extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'name', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Instrument.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'full_name', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Instrument.prototype, "fullName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'description', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Instrument.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'service_provider_specific_code', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Instrument.prototype, "serviceProviderSpecificCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'rta_code', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Instrument.prototype, "rtaCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Instrument.prototype, "bosCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'nse_code', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Instrument.prototype, "nseCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'bse_code', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Instrument.prototype, "bseCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'bse_unique_id', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Instrument.prototype, "bseUniqueId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'isin_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Instrument.prototype, "isinCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'fundoo_code', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Instrument.prototype, "fundooCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'fundoo_code_sub_plan', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Instrument.prototype, "fundooCodeSubPlan", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'variant_fund_id', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Instrument.prototype, "variantFundId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'company_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Instrument.prototype, "companyCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'fundoo_rta_code', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Instrument.prototype, "fundooRTACode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 1,
        optionLabelIdentifier: 'INSTRUMENTSTATUS',
        postgresql: { columnName: 'instrument_status', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Instrument.prototype, "instrumentStatus", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'inception_price', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 30, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Instrument.prototype, "inceptionPrice", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'inception_price_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], Instrument.prototype, "inceptionPriceDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'last_price', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 30, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Instrument.prototype, "lastPrice", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'last_price_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], Instrument.prototype, "lastPriceDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'movement_from_previous_price', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 30, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Instrument.prototype, "movementFromPreviousPrice", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: {
            columnName: 'percentage_movement_from_previous_price',
            dataType: 'NUMERIC',
            nullable: 'Y',
            dataPrecision: 25,
            dataScale: 10
        }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Instrument.prototype, "percentageMovementFromPreviousPrice", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: true,
        default: true,
        postgresql: { columnName: 'is_primary', dataType: 'BOOLEAN', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], Instrument.prototype, "isPrimary", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: true,
        default: false,
        postgresql: { columnName: 'is_recommended', dataType: 'BOOLEAN', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], Instrument.prototype, "isRecommended", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'RECOMMENDATIONTYPE',
        postgresql: { columnName: 'recommendation_type', dataType: 'SMALLINT', nullable: 'Y' },
        jsonSchema: {
            nullable: true
        }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], Instrument.prototype, "recommendationType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'instrument_rank', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Instrument.prototype, "instrumentRank", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        default: 1,
        optionLabelIdentifier: 'INSTRUMENTUNITIZEDFLAG',
        postgresql: { columnName: 'unitized_flag', dataType: 'SMALLINT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Instrument.prototype, "unitizedFlag", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        default: false,
        postgresql: { columnName: 'historic_nav', dataType: 'BOOLEAN', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], Instrument.prototype, "historicNav", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: false,
        postgresql: { columnName: 'is_nfo', dataType: 'BOOLEAN', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], Instrument.prototype, "isNfo", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => product_model_1.Product, {
        name: 'product',
        keyFrom: 'productId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_product', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Instrument.prototype, "productId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => asset_model_1.Asset, {
        name: 'asset',
        keyFrom: 'assetId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_asset', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Instrument.prototype, "assetId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => asset_model_1.Asset, {
        name: 'taxAsset',
        keyFrom: 'taxAssetId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_tax_asset', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Instrument.prototype, "taxAssetId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => Instrument_1, {
        name: 'benchmarkInstrument',
        keyFrom: 'benchmarkInstrumentId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_benchmark_instrument', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Instrument.prototype, "benchmarkInstrumentId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => instrument_type_model_1.InstrumentType, {
        name: 'instrumentType',
        keyFrom: 'instrumentTypeId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_instrument_type', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Instrument.prototype, "instrumentTypeId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => instrument_category_model_1.InstrumentCategory, {
        name: 'instrumentCategory',
        keyFrom: 'instrumentCategoryId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_instrument_category', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Instrument.prototype, "instrumentCategoryId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => instrument_category_group_model_1.InstrumentCategoryGroup, {
        name: 'instrumentCategoryGroup',
        keyFrom: 'categoryGroupId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_category_group', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Instrument.prototype, "categoryGroupId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.InstrumentSebiCategory, {
        name: 'instrumentSebiCategory',
        keyFrom: 'instrumentSebiCategoryId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_instrument_sebi_category', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Instrument.prototype, "instrumentSebiCategoryId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => capital_bucket_model_1.CapitalBucket, {
        name: 'capitalBucket',
        keyFrom: 'capitalBucketId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_capital_bucket', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Instrument.prototype, "capitalBucketId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => service_provider_model_1.ServiceProvider, {
        name: 'serviceProvider',
        keyFrom: 'serviceProviderId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_service_provider', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Instrument.prototype, "serviceProviderId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => asset_classification_model_1.AssetClassification, {
        name: 'assetClassification',
        keyFrom: 'assetClassificationId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_asset_classification', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Instrument.prototype, "assetClassificationId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasOne)(() => index_details_model_1.IndexDetails, { keyTo: 'instrumentId' }),
    (0, tslib_1.__metadata)("design:type", index_details_model_1.IndexDetails)
], Instrument.prototype, "indexDetails", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasOne)(() => mutual_fund_details_model_1.MutualFundDetails, { keyTo: 'instrumentId' }),
    (0, tslib_1.__metadata)("design:type", mutual_fund_details_model_1.MutualFundDetails)
], Instrument.prototype, "mutualFundDetails", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasOne)(() => bond_details_model_1.BondDetails, { keyTo: 'instrumentId' }),
    (0, tslib_1.__metadata)("design:type", bond_details_model_1.BondDetails)
], Instrument.prototype, "bondDetails", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => daily_instrument_price_snapshot_model_1.DailyInstrumentPriceSnapshot, { keyTo: 'instrumentId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], Instrument.prototype, "dailyInstrumentPriceSnapshots", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => instrument_sector_mapping_model_1.InstrumentSectorMapping, { keyTo: 'instrumentId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], Instrument.prototype, "instrumentSectorMappings", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => instrument_rating_mapping_model_1.InstrumentRatingMapping, { keyTo: 'instrumentId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], Instrument.prototype, "instrumentRatingMappings", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => instrument_holding_model_1.InstrumentHolding, { keyTo: 'parentInstrumentId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], Instrument.prototype, "instrumentHoldingMappings", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => equity_details_history_model_1.EquityDetailsHistory, { keyTo: 'instrumentId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], Instrument.prototype, "equityDetailsHistory", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => mutual_fund_details_history_model_1.MutualFundDetailsHistory, { keyTo: 'instrumentId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], Instrument.prototype, "mutualFundDetailsHistory", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => daily_instrument_rolling_alpha_snapshot_model_1.DailyInstrumentRollingAlphaSnapshot, { keyTo: 'instrumentId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], Instrument.prototype, "dailyInstrumentRollingAlphaSnapshots", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => benchmark_return_model_1.BenchmarkReturn, { keyTo: 'instrumentId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], Instrument.prototype, "benchmarkReturnHistories", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => __1.DepositDetails, { keyTo: 'instrumentId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], Instrument.prototype, "depositDetails", void 0);
Instrument = Instrument_1 = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            indexes: {
                idx_is_active: { keys: { is_active: 1 }, options: { unique: false } },
                idx_created_date: { keys: { created_date: 1 }, options: { unique: false } },
                idx_last_modified_date: { keys: { last_modified_date: 1 }, options: { unique: false } },
                idx_fundoo_code: { keys: { fundoo_code: 1 }, options: { unique: false } },
                idx_isin_code: { keys: { isin_code: 1 }, options: { unique: false } },
                idx_bse_unique_id: { keys: { bse_unique_id: 1 }, options: { unique: false } }
            },
            postgresql: { tableName: 'instrument' },
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
                eventType: queues_1.TransactionalDataRefreshingQueueMessageEventType.INSTRUMENT_REPLICATION_BY_INSTRUMENT_ID,
                params: {
                    instrumentId: 'id'
                }
            },
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Instrument);
exports.Instrument = Instrument;
//# sourceMappingURL=instrument.model.js.map