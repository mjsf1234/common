"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstrumentsReporting = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const base_es_model_model_1 = require("../base-es-model.model");
let InstrumentsReporting = class InstrumentsReporting extends base_es_model_model_1.BaseESModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "instrumentId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "instrumentName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "instrumentFullName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "instrumentDescription", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "instrumentServiceProviderSpecificCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "instrumentRTACode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "instrumentFundooCodeSubPlan", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "instrumentBOSCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "instrumentNSECode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "instrumentBSECode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "instrumentISINCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "instrumentMutualFundsSchemeName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "fundooCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "instrumentFundooRTACode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "instrumentStatus", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "instrumentStatusLabel", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "instrumentInceptionPrice", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        es: { type: 'date' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], InstrumentsReporting.prototype, "instrumentInceptionPriceDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "instrumentLastPrice", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        es: { type: 'date' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], InstrumentsReporting.prototype, "instrumentLastPriceDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        es: { type: 'date' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], InstrumentsReporting.prototype, "instrumentCreatedDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "instrumentMovementFromPreviousPrice", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "instrumentPercentageMovementFromPreviousPrice", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: true,
        default: true,
        es: { type: 'boolean' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], InstrumentsReporting.prototype, "instrumentIsPrimary", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: true,
        default: false,
        es: { type: 'boolean' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], InstrumentsReporting.prototype, "instrumentIsRecommended", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'short' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], InstrumentsReporting.prototype, "instrumentRecommendationType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: true,
        default: false,
        es: { type: 'boolean' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], InstrumentsReporting.prototype, "instrumentIsUnitized", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'short' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "instrumentUnitizedFlag", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "instrumentUnitizedFlagLabel", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "productId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword' } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "productName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "productDescription", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "assetId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword' } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "assetName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "assetDescription", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'short' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "assetType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "assetTypeLabel", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "taxAssetId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword' } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "taxAssetName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "taxAssetDescription", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'short' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "taxAssetType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "taxAssetTypeLabel", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "instrumentTypeId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword' } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "instrumentTypeName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "instrumentTypeDescription", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "instrumentCategoryId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword' } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "instrumentCategoryName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword' } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "shortName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "instrumentCategoryDescription", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "serviceProviderId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword' } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "serviceProviderName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword' } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "serviceProviderShortName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "serviceProviderDescription", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'short' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "serviceProviderType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "serviceProviderTypeLabel", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "serviceProviderRTACode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "serviceProviderRTAName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "sectorOne", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "sectorTwo", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'array',
        es: { type: 'nested', properties: { rating: { type: 'text' }, ratingClassification: { type: 'text' } } },
        itemType: 'object'
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], InstrumentsReporting.prototype, "instrumentRatings", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "mutualFundsId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "fundManager", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "fundManagerEducation", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "fundManagerExperience", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "fundObjective", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "riskColourName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "risk", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "activeRisk", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "informationRisk", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "fundRating", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "riskGrade", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "returnGrade", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "rank", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "scripStyle", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "corpus", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "expenseRatio", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "turnoverRatio", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "peScore", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "pbScore", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "giantMarketCapPercentage", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "largeMarketCapPercentage", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "midMarketCapPercentage", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "smallMarketCapPercentage", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "tinyMarketCapPercentage", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "averageMaturity", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "yieldToMaturity", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "modDuration", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "absoluteReturn", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "annualReturn", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "standardDeviation", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "mean", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "alpha", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "beta", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "rsquared", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "alphaStated", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "betaStated", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "rsquaredStated", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "jensonAlpha", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "volatility", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "sortinoRatio", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "treynorRatio", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "sharpeRatio", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "informationRatio", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        es: { type: 'date' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], InstrumentsReporting.prototype, "mutualFundsStartDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        es: { type: 'date' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], InstrumentsReporting.prototype, "mutualFundsEndDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        es: { type: 'boolean' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], InstrumentsReporting.prototype, "mutualFundsIsSIPAllowed", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        es: { type: 'boolean' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], InstrumentsReporting.prototype, "mutualFundsIsPurchaseAllowed", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        es: { type: 'boolean' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], InstrumentsReporting.prototype, "mutualFundsIsSwitchInAllowed", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        es: { type: 'boolean' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], InstrumentsReporting.prototype, "mutualFundsIsSwitchOutAllowed", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        es: { type: 'boolean' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], InstrumentsReporting.prototype, "mutualFundsIsRedemptionAllowed", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        es: { type: 'boolean' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], InstrumentsReporting.prototype, "mutualFundsIsSTPAllowed", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        es: { type: 'boolean' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], InstrumentsReporting.prototype, "mutualFundsIsSWPAllowed", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "mutualFundsMinSIPAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "mutualFundsMaxSIPAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "mutualFundsMinRedemptionAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "mutualFundsMaxRedemptionAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "mutualFundsMinRedemptionQuantity", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "mutualFundsMaxRedemptionQuantity", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "mutualFundsReinvestmentFlag", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "mutualFundsPlanType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "mutualFundsPlanTypeLabel", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "mutualFundsMinInvestmentAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "mutualFundsMinAdditionalInvestmentAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "mutualFundsMaxInvestmentAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "mutualFundsMaxAdditionalInvestmentAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "mutualFundsReturnFor1Month", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "mutualFundsReturnFor1Day", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "mutualFundsReturnFor3Month", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "mutualFundsReturnFor6Month", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "mutualFundsReturnFor1Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "mutualFundsReturnFor2Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "mutualFundsReturnFor3Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "mutualFundsReturnFor5Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "mutualFundsSharpeRatioFor1Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "mutualFundsSharpeRatioFor3Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "mutualFundsSharpeRatioFor5Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "mutualFundsVolatilityFor1Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "mutualFundsVolatilityFor3Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "mutualFundsVolatilityFor5Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "mutualFundsRedemptionAmountMultiplier", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "mutualFundsRedemptionQuantityMultiplier", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "mutualFundsPurchaseAmountMultiplier", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "mutualFundsEndType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "mutualFundsEndTypeLabel", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "mutualFundsLockinPeriod", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "mutualFundsFaceValue", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        es: { type: 'date' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], InstrumentsReporting.prototype, "mutualFundsAllotmentDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "bondCoupon", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        es: { type: 'date' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], InstrumentsReporting.prototype, "bondMaturityDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "benchmarkInstrumentId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "benchmarkInstrumentName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "instrumentCategoryBenchmarkName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'object',
        es: { type: 'nested', properties: { riskProfileIds: { type: 'long' } } },
        itemType: 'object'
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], InstrumentsReporting.prototype, "instrumentCategorySuitability", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "instrumentSebiCategoryId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword' } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "instrumentSebiCategoryName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "instrumentSebiCategoryDescription", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "instrumentSebiCategoryBosCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "instrumentSebiCategoryShortName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "bseUniqueId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: false,
        es: { type: 'boolean' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], InstrumentsReporting.prototype, "instrumentIsNfo", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        es: { type: 'date' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], InstrumentsReporting.prototype, "mutualFundsIssueOpenDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        es: { type: 'date' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], InstrumentsReporting.prototype, "mutualFundsIssueCloseDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        es: { type: 'date' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], InstrumentsReporting.prototype, "mutualFundsIssueActualCloseDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "mutualFundsExitLoad", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "logo", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsReporting.prototype, "serviceProviderStatus", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "serviceProviderStatusLabel", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "website", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "addressLine1", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "addressLine2", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "addressLine3", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "city", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "pincode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "phone", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        es: { type: 'boolean' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], InstrumentsReporting.prototype, "instrumentCategoryIsActive", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "instrumentCategoryRedemptionCutoffTime", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsReporting.prototype, "instrumentCategorySuitabilityLabel", void 0);
InstrumentsReporting = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            plural: 'InstrumentsReportings',
            indexes: {},
            elasticsearch: { index: 'instrumentsreporting', type: 'instrument' },
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], InstrumentsReporting);
exports.InstrumentsReporting = InstrumentsReporting;
//# sourceMappingURL=instruments-reporting.model.js.map