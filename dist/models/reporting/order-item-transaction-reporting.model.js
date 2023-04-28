"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemsTransactionReporting = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const base_es_model_model_1 = require("../base-es-model.model");
let OrderItemsTransactionReporting = class OrderItemsTransactionReporting extends base_es_model_model_1.BaseESModel {
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
], OrderItemsTransactionReporting.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        default: false,
        es: { type: 'boolean' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], OrderItemsTransactionReporting.prototype, "isDummy", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        es: { type: 'date' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], OrderItemsTransactionReporting.prototype, "transactionDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        es: { type: 'date' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], OrderItemsTransactionReporting.prototype, "orderDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        es: { type: 'date' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], OrderItemsTransactionReporting.prototype, "navDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "quantity", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "pricePerUnit", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "totalAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'short' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "transactionSubType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "transactionSubTypeLabel", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "serviceProviderReferenceNumber", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "userTransactionNumber", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', index: false }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "remark", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        es: { type: 'short' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "transactionStatus", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "transactionStatusLabel", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "orderItemId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "orderItemUniqueId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "orderId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "orderUniqueId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "systematicMethodId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "systematicMethodFrequency", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "systematicMethodFrequencyLabel", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "systematicMethodFrequencyDay", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "systematicMethodType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "systematicMethodTypeLabel", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        es: { type: 'date' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], OrderItemsTransactionReporting.prototype, "systematicMethodStartDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        es: { type: 'date' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], OrderItemsTransactionReporting.prototype, "systematicMethodEndDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "transactionTypeId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "transactionTypeName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', index: false }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "transactionTypeDescription", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'short' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "holdingCalculationBuySellType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "holdingCalculationBuySellTypeLabel", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "instrumentId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword' } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "instrumentName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword' } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "instrumentFullName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "instrumentDescription", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "instrumentServiceProviderSpecificCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "instrumentRTACode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "instrumentFundooRTACode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "instrumentISINCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'short' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "instrumentStatus", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "instrumentStatusLabel", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "instrumentInceptionPrice", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        es: { type: 'date' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], OrderItemsTransactionReporting.prototype, "instrumentInceptionPriceDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "instrumentLastPrice", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        es: { type: 'date' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], OrderItemsTransactionReporting.prototype, "instrumentLastPriceDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "instrumentMovementFromPreviousPrice", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "instrumentPercentageMovementFromPreviousPrice", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "secondaryInstrumentId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword' } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "secondaryInstrumentName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword' } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "secondaryInstrumentFullName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "secondaryInstrumentServiceProviderSpecificCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "secondaryInstrumentRTACode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "productId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword' } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "productName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "productDescription", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "assetId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword' } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "assetName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "assetDescription", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'short' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "assetType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "assetTypeLabel", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "taxAssetId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword' } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "taxAssetName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "taxAssetDescription", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'short' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "taxAssetType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "taxAssetTypeLabel", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "instrumentTypeId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword' } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "instrumentTypeName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "instrumentTypeDescription", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "instrumentCategoryId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword' } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "instrumentCategoryName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "instrumentCategoryDescription", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: true,
        default: false,
        es: { type: 'boolean' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], OrderItemsTransactionReporting.prototype, "instrumentIsUnitized", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'short' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "instrumentUnitizedFlag", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "instrumentUnitizedFlagLabel", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "serviceProviderAccountId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "serviceProviderAccountNumber", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'short' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "serviceProviderAccountType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "serviceProviderAccountTypeLabel", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "distributorId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "distributorName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "groupId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "groupName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "familyId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "familyName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "appUserId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "appUserName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "appUserEmail", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "appUserCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "appUserContactNumberCountryCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "appUserContactNumber", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "accountId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        es: { type: 'text', fields: { keyword: { type: 'keyword' } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "accountName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "accountUniqueId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'short' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "accountStatus", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "accountStatusLabel", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        es: { type: 'date' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], OrderItemsTransactionReporting.prototype, "accountActivationDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        default: false,
        es: { type: 'boolean' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], OrderItemsTransactionReporting.prototype, "serviceProviderAccountIsHeldAway", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        default: false,
        es: { type: 'boolean' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], OrderItemsTransactionReporting.prototype, "accountIsProspect", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "serviceProviderId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword' } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "serviceProviderName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword' } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "serviceProviderShortName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "serviceProviderDescription", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'short' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "serviceProviderType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "serviceProviderTypeLabel", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "serviceProviderRTACode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "currencyId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword' } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "currencyName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "currencyShortName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "goalId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "goalUniqueId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword' } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "goalName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'short' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "goalType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "goalTypeLabel", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "goalDescription", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "bseOrderRemarks", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "bseOrderStatus", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'keyword' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "bseCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'short' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "orderMedium", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'keyword' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "orderMediumLabel", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'short' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "paymentMode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "utrNumber", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        es: { type: 'date' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], OrderItemsTransactionReporting.prototype, "valueDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "orderTime", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "city", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "transactionId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "transactionBOSCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "transactionNSECode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "transactionBSECode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "reverseFeedUniqueHash", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "openingQuantity", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "closingQuantity", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "brokerageAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "accruedInterest", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "openingAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "closingAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "taxAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "totalTaxAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "securitiesTransactionTaxAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "serviceProviderReferenceName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "coupon", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        es: { type: 'date' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], OrderItemsTransactionReporting.prototype, "maturityDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        es: { type: 'short' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "accrualFrequency", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "accrualFrequencyLabel", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "instrumentBOSCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword' } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "instrumentCategoryShortName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "bondDetailsCoupon", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "accountCategoryId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "corporateActionId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "pricePerUnitCA", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "offeredUnitCA", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "heldUnitCA", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'object',
        es: { type: 'object' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], OrderItemsTransactionReporting.prototype, "corporateActionSettings", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "instrumentIdCA", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword' } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "instrumentNameCA", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "secondaryInstrumentIdCA", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword' } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "secondaryInstrumentNameCA", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "realEstateDetailsAddress", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "serviceProviderAccountFixedDepositName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "insuranceServiceProviderAccountDetailName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "ppfDetailName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "deletedByUserId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "deletedByUserName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "recordUniqueId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "brokerCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'short' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "paymentReconciliationStatus", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "paymentReconciliationStatusLabel", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'short' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrderItemsTransactionReporting.prototype, "orderSource", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrderItemsTransactionReporting.prototype, "orderSourceLabel", void 0);
OrderItemsTransactionReporting = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            plural: 'orderitemtransactionreportings',
            indexes: {},
            elasticsearch: { index: 'orderitemtransactionreporting', type: 'orderitemtransaction' },
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], OrderItemsTransactionReporting);
exports.OrderItemsTransactionReporting = OrderItemsTransactionReporting;
//# sourceMappingURL=order-item-transaction-reporting.model.js.map