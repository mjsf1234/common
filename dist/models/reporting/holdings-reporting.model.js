"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HoldingsReporting = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const base_es_model_model_1 = require("../base-es-model.model");
let HoldingsReporting = class HoldingsReporting extends base_es_model_model_1.BaseESModel {
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
], HoldingsReporting.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "holdingId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'keyword' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "holdingUniqueId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        es: { type: 'date' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], HoldingsReporting.prototype, "holdingDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        es: { type: 'date' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], HoldingsReporting.prototype, "investmentDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "quantity", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "averagePricePerUnit", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "totalInvestedAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "currentPricePerUnit", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "dividendReinvested", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "dividendPaid", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "totalCurrentValue", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "totalCommitmentAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "totalDrawdownAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "totalInterestAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "totalReturnOfCapitalAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "totalReturnOnCapitalAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "totalIncome", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "accruedInterest", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "absoluteProfitLoss", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "percentageProfitLoss", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "xirr", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "unrealizedShortTermCapitalGain", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "unrealizedLongTermCapitalGain", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "unrealizedBusinessCapitalGain", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "realizedShortTermCapitalGain", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "realizedLongTermCapitalGain", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "realizedBusinessCapitalGain", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "unrealizedShortTermCapitalQuantity", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "unrealizedLongTermCapitalQuantity", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "benchmarkTotalCurrentValue", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "benchmarkXirr", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "beginningMarketValue", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "beginningMarketQuantity", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "flows", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "inflows", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "outflows", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "benchmarkFlows", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "benchmarkInflows", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "benchmarkOutflows", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "absoluteReturn", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "benchmarkAbsoluteReturn", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "profit", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'array',
        es: { type: 'nested', properties: { amount: { type: 'double' }, when: { type: 'date' } } },
        itemType: 'object'
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], HoldingsReporting.prototype, "xirrData", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'array',
        es: { type: 'nested', properties: { amount: { type: 'double' }, when: { type: 'date' } } },
        itemType: 'object'
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], HoldingsReporting.prototype, "benchmarkXirrData", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "sellableQuantity", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "goalTargetAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        es: { type: 'date' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], HoldingsReporting.prototype, "goalEndDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'object',
        es: {
            type: 'object',
            properties: {
                quantity: { type: 'double' },
                totalCurrentValue: { type: 'double' },
                totalInvestedAmount: { type: 'double' },
                benchmarkTotalCurrentValue: { type: 'double' },
                portfolioGain: { type: 'double' },
                benchmarkGain: { type: 'double' },
                previousDayTotalCurrentValue: { type: 'double' },
                previousDayBenchmarkTotalCurrentValue: { type: 'double' }
            }
        }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], HoldingsReporting.prototype, "states", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        default: false,
        es: { type: 'boolean' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], HoldingsReporting.prototype, "isZeroised", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "distributorId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "distributorName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "groupId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "groupName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "familyId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "familyName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "appUserId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "appUserName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "appUserEmail", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "appUserCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "appUserContactNumberCountryCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "appUserContactNumber", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "accountId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "accountName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "accountUniqueId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'short' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "accountStatus", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "accountStatusLabel", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        es: { type: 'date' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], HoldingsReporting.prototype, "accountActivationDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        default: false,
        es: { type: 'boolean' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], HoldingsReporting.prototype, "serviceProviderAccountIsHeldAway", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        default: false,
        es: { type: 'boolean' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], HoldingsReporting.prototype, "accountIsProspect", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "accountCategoryId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "serviceProviderId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "serviceProviderAccountNumber", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "serviceProviderAccountName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "serviceProviderAccountEmail", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "serviceProviderAccountPhoneNumber", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "coupon", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        es: { type: 'date' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], HoldingsReporting.prototype, "maturityDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        es: { type: 'short' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "accrualFrequency", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "accrualFrequencyLabel", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "serviceProviderAccountId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "serviceProviderReferenceNumber", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'short' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "serviceProviderAccountType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "serviceProviderAccountTypeLabel", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "serviceProviderName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "serviceProviderShortName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', index: false }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "serviceProviderDescription", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'short' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "serviceProviderType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "serviceProviderTypeLabel", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "currencyId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "currencyName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "currencyShortName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "goalId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "goalUniqueId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "goalName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'short' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "goalType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "goalTypeLabel", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', index: false }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "goalDescription", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "instrumentId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "instrumentName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "instrumentFullName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', index: false }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "instrumentDescription", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "instrumentServiceProviderSpecificCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "instrumentBOSCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "instrumentRTACode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "instrumentBSECode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "instrumentFundooRTACode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "instrumentISINCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'short' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "instrumentStatus", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "instrumentStatusLabel", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "instrumentInceptionPrice", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        es: { type: 'date' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], HoldingsReporting.prototype, "instrumentInceptionPriceDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "instrumentLastPrice", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        es: { type: 'date' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], HoldingsReporting.prototype, "instrumentLastPriceDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "instrumentMovementFromPreviousPrice", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "instrumentPercentageMovementFromPreviousPrice", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "productId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "productName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', index: false }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "productDescription", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "assetId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "assetName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', index: false }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "assetDescription", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'short' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "assetType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "assetTypeLabel", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "taxAssetId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "taxAssetName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', index: false }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "taxAssetDescription", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'short' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "taxAssetType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "taxAssetTypeLabel", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "assetClassificationId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "assetClassificationName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "capitalBucketId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "capitalBucketName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "instrumentTypeId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "instrumentTypeName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'keyword', index: false }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "instrumentTypeDescription", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "instrumentCategoryId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "instrumentCategoryName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', index: false }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "instrumentCategoryDescription", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "instrumentMutualFundsId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "instrumentMutualFundsMinInvestmentAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "instrumentMutualFundsMinAdditionalInvestmentAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "instrumentMutualFundsMaxInvestmentAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "instrumentMutualFundsMaxAdditionalInvestmentAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "instrumentMutualFundsReturnFor1Month", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "instrumentMutualFundsReturnFor1Day", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "instrumentMutualFundsReturnFor3Month", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "instrumentMutualFundsReturnFor6Month", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "instrumentMutualFundsReturnFor1Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "instrumentMutualFundsReturnFor2Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "instrumentMutualFundsReturnFor3Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "instrumentMutualFundsReturnFor5Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "instrumentMutualFundsSharpeRatioFor1Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "instrumentMutualFundsSharpeRatioFor3Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "instrumentMutualFundsSharpeRatioFor5Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "instrumentMutualFundsVolatilityFor1Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "instrumentMutualFundsVolatilityFor3Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "instrumentMutualFundsVolatilityFor5Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        es: { type: 'date' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], HoldingsReporting.prototype, "instrumentMutualFundsStartDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        es: { type: 'date' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], HoldingsReporting.prototype, "instrumentMutualFundsEndDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'short' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "instrumentMutualFundsEndType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "instrumentMutualFundsEndTypeLabel", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "instrumentMutualFundsAverageMaturity", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "instrumentMutualFundsYieldToMaturity", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "instrumentMutualFundsModDuration", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: true,
        default: false,
        es: { type: 'boolean' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], HoldingsReporting.prototype, "instrumentIsUnitized", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'short' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "instrumentUnitizedFlag", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "instrumentUnitizedFlagLabel", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "instrumentBondDetailsIssuerName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        es: { type: 'date' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], HoldingsReporting.prototype, "instrumentBondDetailsMaturityDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "instrumentBondDetailsCoupon", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "realEstateDetailsAddress", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "serviceProviderAccountFixedDepositName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "insuranceServiceProviderAccountDetailName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "ppfDetailName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        es: { type: 'date' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], HoldingsReporting.prototype, "instrumentMaturityDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "instrumentBseUniqueId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'short' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "depositType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'short' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "depositMode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        es: { type: 'date' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], HoldingsReporting.prototype, "depositMaturityDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "depositName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "depositInvestedValue", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "tenureMonths", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "interestRate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        es: { type: 'date' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], HoldingsReporting.prototype, "depositStartDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'short' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "depositFrequency", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'short' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "interestFrequency", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'short' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "compoundingFrequency", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "maturityAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "installmentAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        es: { type: 'date' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], HoldingsReporting.prototype, "installmentDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'short' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "depositStatus", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'short' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "depositSubType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'short' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "actionOnMaturity", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "totalInterestPayable", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "totalInstallments", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "currentInstallment", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "depositPayoutAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        es: { type: 'date' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], HoldingsReporting.prototype, "lastRenewalDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingsReporting.prototype, "brokerCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'short' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HoldingsReporting.prototype, "instrumentRecommendationType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        es: { type: 'date' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], HoldingsReporting.prototype, "accountOpeningDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        default: false,
        es: { type: 'boolean' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], HoldingsReporting.prototype, "isSellAllowed", void 0);
HoldingsReporting = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            plural: 'HoldingsReportings',
            indexes: {},
            elasticsearch: { index: 'holdingsreporting', type: 'holding' },
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], HoldingsReporting);
exports.HoldingsReporting = HoldingsReporting;
//# sourceMappingURL=holdings-reporting.model.js.map