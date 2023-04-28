"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GainsReporting = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const base_es_model_model_1 = require("../base-es-model.model");
let GainsReporting = class GainsReporting extends base_es_model_model_1.BaseESModel {
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
], GainsReporting.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GainsReporting.prototype, "gainId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], GainsReporting.prototype, "gainUniqueId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        es: { type: 'date' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], GainsReporting.prototype, "buyDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], GainsReporting.prototype, "buyFinancialYear", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GainsReporting.prototype, "buyIndexationCost", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GainsReporting.prototype, "indexedCost", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GainsReporting.prototype, "pricePerUnitAsOnGrandfatheringDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GainsReporting.prototype, "nav", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GainsReporting.prototype, "adjustedPurchaseCost", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        es: { type: 'date' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], GainsReporting.prototype, "sellDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], GainsReporting.prototype, "sellFinancialYear", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GainsReporting.prototype, "sellIndexationCost", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GainsReporting.prototype, "holdingDays", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GainsReporting.prototype, "quantity", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GainsReporting.prototype, "averageBuyPricePerUnit", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GainsReporting.prototype, "averageSellPricePerUnit", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GainsReporting.prototype, "totalBuyAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GainsReporting.prototype, "totalSellAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GainsReporting.prototype, "shortTermCapitalGain", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GainsReporting.prototype, "longTermCapitalGain", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GainsReporting.prototype, "businessCapitalGain", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GainsReporting.prototype, "totalCapitalGain", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GainsReporting.prototype, "totalCapitalGainWithIndexation", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GainsReporting.prototype, "differenceDueToIndexation", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'short' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GainsReporting.prototype, "capitalGainType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], GainsReporting.prototype, "capitalGainTypeLabel", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GainsReporting.prototype, "buyTransactionId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GainsReporting.prototype, "sellTransactionId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GainsReporting.prototype, "distributorId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], GainsReporting.prototype, "distributorName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GainsReporting.prototype, "groupId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], GainsReporting.prototype, "groupName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GainsReporting.prototype, "familyId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], GainsReporting.prototype, "familyName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GainsReporting.prototype, "appUserId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], GainsReporting.prototype, "appUserName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], GainsReporting.prototype, "appUserEmail", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], GainsReporting.prototype, "appUserCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], GainsReporting.prototype, "appUserContactNumberCountryCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], GainsReporting.prototype, "appUserContactNumber", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GainsReporting.prototype, "accountId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], GainsReporting.prototype, "accountName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], GainsReporting.prototype, "accountUniqueId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'short' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GainsReporting.prototype, "accountStatus", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], GainsReporting.prototype, "accountStatusLabel", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        es: { type: 'date' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], GainsReporting.prototype, "accountActivationDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        default: false,
        es: { type: 'boolean' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], GainsReporting.prototype, "serviceProviderAccountIsHeldAway", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GainsReporting.prototype, "serviceProviderId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], GainsReporting.prototype, "serviceProviderAccountNumber", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GainsReporting.prototype, "serviceProviderAccountId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], GainsReporting.prototype, "serviceProviderReferenceNumber", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'short' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GainsReporting.prototype, "serviceProviderAccountType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], GainsReporting.prototype, "serviceProviderAccountTypeLabel", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], GainsReporting.prototype, "serviceProviderName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], GainsReporting.prototype, "serviceProviderShortName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', index: false }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], GainsReporting.prototype, "serviceProviderDescription", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'short' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GainsReporting.prototype, "serviceProviderType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], GainsReporting.prototype, "serviceProviderTypeLabel", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GainsReporting.prototype, "currencyId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], GainsReporting.prototype, "currencyName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], GainsReporting.prototype, "currencyShortName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GainsReporting.prototype, "instrumentId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], GainsReporting.prototype, "instrumentName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], GainsReporting.prototype, "instrumentFullName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', index: false }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], GainsReporting.prototype, "instrumentDescription", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], GainsReporting.prototype, "instrumentServiceProviderSpecificCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], GainsReporting.prototype, "instrumentRTACode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], GainsReporting.prototype, "instrumentFundooRTACode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], GainsReporting.prototype, "instrumentISINCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'short' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GainsReporting.prototype, "instrumentStatus", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], GainsReporting.prototype, "instrumentStatusLabel", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GainsReporting.prototype, "instrumentInceptionPrice", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        es: { type: 'date' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], GainsReporting.prototype, "instrumentInceptionPriceDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GainsReporting.prototype, "instrumentLastPrice", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        es: { type: 'date' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], GainsReporting.prototype, "instrumentLastPriceDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GainsReporting.prototype, "instrumentMovementFromPreviousPrice", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GainsReporting.prototype, "instrumentPercentageMovementFromPreviousPrice", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: true,
        default: false,
        es: { type: 'boolean' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], GainsReporting.prototype, "instrumentIsUnitized", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'short' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GainsReporting.prototype, "instrumentUnitizedFlag", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], GainsReporting.prototype, "instrumentUnitizedFlagLabel", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GainsReporting.prototype, "productId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], GainsReporting.prototype, "productName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', index: false }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], GainsReporting.prototype, "productDescription", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GainsReporting.prototype, "assetId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], GainsReporting.prototype, "assetName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', index: false }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], GainsReporting.prototype, "assetDescription", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'short' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GainsReporting.prototype, "assetType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], GainsReporting.prototype, "assetTypeLabel", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GainsReporting.prototype, "taxAssetId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], GainsReporting.prototype, "taxAssetName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', index: false }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], GainsReporting.prototype, "taxAssetDescription", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'short' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GainsReporting.prototype, "taxAssetType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], GainsReporting.prototype, "taxAssetTypeLabel", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GainsReporting.prototype, "instrumentTypeId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], GainsReporting.prototype, "instrumentTypeName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'keyword', index: false }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], GainsReporting.prototype, "instrumentTypeDescription", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GainsReporting.prototype, "instrumentCategoryId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], GainsReporting.prototype, "instrumentCategoryName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', index: false }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], GainsReporting.prototype, "instrumentCategoryDescription", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long', index: false }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GainsReporting.prototype, "effectiveCost", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long', index: false }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GainsReporting.prototype, "priceAsOn31Jan2018", void 0);
GainsReporting = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            plural: 'GainsReportings',
            indexes: {},
            elasticsearch: { index: 'gainsreporting', type: 'gain' },
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], GainsReporting);
exports.GainsReporting = GainsReporting;
//# sourceMappingURL=gains-reporting.model.js.map