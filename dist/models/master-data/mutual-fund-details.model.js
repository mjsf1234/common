"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MutualFundDetails = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
const instrument_model_1 = require("./instrument.model");
const systematic_method_setting_model_1 = require("./systematic-method-setting.model");
const queues_1 = require("../../queues");
let MutualFundDetails = class MutualFundDetails extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'amfi_name', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MutualFundDetails.prototype, "amfiName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'amfi_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MutualFundDetails.prototype, "amfiCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'start_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], MutualFundDetails.prototype, "startDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'end_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], MutualFundDetails.prototype, "endDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'reinvestment_flag', dataType: 'VARCHAR', dataLength: 30, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MutualFundDetails.prototype, "reinvestmentFlag", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'fund_manager', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MutualFundDetails.prototype, "fundManager", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'fund_manager_education', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MutualFundDetails.prototype, "fundManagerEducation", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'fund_manager_experience', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MutualFundDetails.prototype, "fundManagerExperience", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'fund_objective', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MutualFundDetails.prototype, "fundObjective", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'risk_colour_name', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MutualFundDetails.prototype, "riskColourName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'risk', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MutualFundDetails.prototype, "risk", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'fund_rating', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MutualFundDetails.prototype, "fundRating", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'risk_grade', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MutualFundDetails.prototype, "riskGrade", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'return_grade', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MutualFundDetails.prototype, "returnGrade", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'entry_load', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 5 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "entryLoad", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'exit_load', dataType: 'VARCHAR', nullable: 'Y', dataLength: 500 }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MutualFundDetails.prototype, "exitLoad", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'expense_ratio', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 5 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "expenseRatio", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'turnover_ratio', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 5 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "turnoverRatio", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'min_investment_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 5 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "minInvestmentAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'max_investment_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 5 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "maxInvestmentAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'min_additional_investment_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 5 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "minAdditionalInvestmentAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'max_additional_investment_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 5 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "maxAdditionalInvestmentAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'min_redemption_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 5 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "minRedemptionAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'max_redemption_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 5 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "maxRedemptionAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'min_redemption_quantity', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 5 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "minRedemptionQuantity", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'max_redemption_quantity', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 5 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "maxRedemptionQuantity", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'purchase_amount_multiplier', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 5 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "purchaseAmountMultiplier", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'redemption_amount_multiplier', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 5 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "redemptionAmountMultiplier", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'redemption_quantity_multiplier', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 5 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "redemptionQuantityMultiplier", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'settlement_days', dataType: 'VARCHAR', nullable: 'Y', dataLength: 255 }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MutualFundDetails.prototype, "settlementDays", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'MUTUALFUNDPLANTYPE',
        postgresql: { columnName: 'plan_type', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "planType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'MUTUALFUNDTYPE',
        postgresql: { columnName: 'mutual_fund_type', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "mutualFundType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'lockin_period', dataType: 'VARCHAR', nullable: 'Y', dataLength: 30 }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MutualFundDetails.prototype, "lockinPeriod", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'lock_lockin', dataType: 'VARCHAR', nullable: 'Y', dataLength: 100 }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MutualFundDetails.prototype, "loadLockin", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'redemption_days', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MutualFundDetails.prototype, "redemptionDays", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'price_earnings', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "priceEarnings", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'price_to_book', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "priceToBook", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'average_maturity', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 5 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "averageMaturity", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'yield_to_maturity', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 5 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "yieldToMaturity", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'mod_duration', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 5 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "modDuration", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        default: true,
        postgresql: { columnName: 'is_purchase_allowed', dataType: 'BOOLEAN', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], MutualFundDetails.prototype, "isPurchaseAllowed", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        default: true,
        postgresql: { columnName: 'is_switch_in_allowed', dataType: 'BOOLEAN', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], MutualFundDetails.prototype, "isSwitchInAllowed", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        default: true,
        postgresql: { columnName: 'is_switch_out_allowed', dataType: 'BOOLEAN', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], MutualFundDetails.prototype, "isSwitchOutAllowed", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        default: true,
        postgresql: { columnName: 'is_redemption_allowed', dataType: 'BOOLEAN', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], MutualFundDetails.prototype, "isRedemptionAllowed", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        default: true,
        postgresql: { columnName: 'is_sip_allowed', dataType: 'BOOLEAN', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], MutualFundDetails.prototype, "isSIPAllowed", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        default: true,
        postgresql: { columnName: 'is_stp_allowed', dataType: 'BOOLEAN', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], MutualFundDetails.prototype, "isSTPAllowed", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        default: true,
        postgresql: { columnName: 'is_swp_allowed', dataType: 'BOOLEAN', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], MutualFundDetails.prototype, "isSWPAllowed", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'purchase_cutoff_time', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MutualFundDetails.prototype, "purchaseCutoffTime", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'redemption_cutoff_time', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MutualFundDetails.prototype, "redemptionCutoffTime", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'min_sip_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 5 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "minSIPAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'max_sip_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 5 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "maxSIPAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'absolute_return', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "absoluteReturn", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'annual_return', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "annualReturn", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'standard_deviation', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "standardDeviation", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'mean', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "mean", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'alpha', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "alpha", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'beta', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "beta", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'rsquared', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "rsquared", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'alpha_stated', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "alphaStated", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'beta_stated', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "betaStated", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'rsquared_stated', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "rsquaredStated", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'jenson_alpha', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "jensonAlpha", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'volatility', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "volatility", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'sortino_ratio', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "sortinoRatio", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'treynor_ratio', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "treynorRatio", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'sharpe_ratio', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "sharpeRatio", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'information_ratio', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "informationRatio", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'active_risk', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "activeRisk", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'information_risk', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "informationRisk", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'return_for_1_month', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "returnFor1Month", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'return_for_1_day', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "returnFor1Day", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'return_for_3_month', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "returnFor3Month", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'return_for_6_month', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "returnFor6Month", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'return_for_1_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "returnFor1Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'return_for_2_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "returnFor2Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'return_for_3_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "returnFor3Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'return_for_5_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "returnFor5Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'sharpe_ratio_for_1_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "sharpeRatioFor1Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'sharpe_ratio_for_3_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "sharpeRatioFor3Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'sharpe_ratio_for_5_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "sharpeRatioFor5Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'volatility_for_1_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "volatilityFor1Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'volatility_for_3_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "volatilityFor3Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'volatility_for_5_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "volatilityFor5Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'MUTUALFUNDENDTYPE',
        postgresql: { columnName: 'mutual_fund_end_type', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "mutualFundEndType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'DIVIDENDFREQUENCY',
        postgresql: { columnName: 'dividend_frequency', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "dividendFrequency", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'REDEMPTIONTYPE',
        postgresql: { columnName: 'redemption_type', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "redemptionType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'NAVUPDATEFREQUENCY',
        postgresql: { columnName: 'nav_update_frequency', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "navUpdateFrequency", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'min_swp_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 5 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "minSWPAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'object',
        default: {},
        postgresql: { columnName: 'details', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], MutualFundDetails.prototype, "bankDetails", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'face_value', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "faceValue", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'issue_open_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], MutualFundDetails.prototype, "issueOpenDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'issue_close_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], MutualFundDetails.prototype, "issueCloseDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'allotment_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], MutualFundDetails.prototype, "allotmentDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'maturity_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], MutualFundDetails.prototype, "maturityDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'product_code', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MutualFundDetails.prototype, "productCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'scheme_name', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MutualFundDetails.prototype, "schemeName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'dep_acc_number', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MutualFundDetails.prototype, "depAccNo", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'dep_bank', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MutualFundDetails.prototype, "depBank", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'corpus', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 30, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "corpus", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        default: false,
        postgresql: { columnName: 'category_average', dataType: 'BOOLEAN', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], MutualFundDetails.prototype, "categoryAverage", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'exit_load_remarks', dataType: 'VARCHAR', dataLength: 500, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MutualFundDetails.prototype, "exitLoadRemarks", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
        postgresql: { columnName: 'rank', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MutualFundDetails.prototype, "rank", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
        postgresql: { columnName: 'scripStyle', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MutualFundDetails.prototype, "scripStyle", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: null,
        postgresql: { columnName: 'pe_score', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 30, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "peScore", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: null,
        postgresql: { columnName: 'pb_score', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 30, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "pbScore", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: null,
        postgresql: { columnName: 'giant_market_cap_percentage', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 30, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "giantMarketCapPercentage", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: null,
        postgresql: { columnName: 'large_market_cap_percentage', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 30, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "largeMarketCapPercentage", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: null,
        postgresql: { columnName: 'mid_market_cap_percentage', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 30, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "midMarketCapPercentage", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: null,
        postgresql: { columnName: 'small_market_cap_percentage', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 30, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "smallMarketCapPercentage", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: null,
        postgresql: { columnName: 'tiny_market_cap_percentage', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 30, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "tinyMarketCapPercentage", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'issue_actual_close_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], MutualFundDetails.prototype, "issueActualCloseDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => instrument_model_1.Instrument, {
        name: 'instrument',
        keyFrom: 'instrumentId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_instrument', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "instrumentId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => instrument_model_1.Instrument, {
        name: 'directSchemeInstrument',
        keyFrom: 'directSchemeInstrumentId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_direct_scheme_instrument', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "directSchemeInstrumentId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => instrument_model_1.Instrument, {
        name: 'primarySchemeInstrument',
        keyFrom: 'primarySchemeInstrumentId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_primary_scheme_instrument', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetails.prototype, "primarySchemeInstrumentId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => systematic_method_setting_model_1.SystematicMethodSetting, { keyTo: 'mutualFundDetailsId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], MutualFundDetails.prototype, "systematicMethodSettings", void 0);
MutualFundDetails = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'mutual_fund_details' },
            plural: 'MutualFundDetails',
            foreignKeys: {
                fkidx_mutual_fund_details_instrument_fk_id_instrument: {
                    name: 'fkidx_mutual_fund_details_instrument_fk_id_instrument',
                    foreignKey: 'fk_id_instrument',
                    entityKey: 'id',
                    entity: 'Instrument'
                },
                fkidx_mutual_fund_details_fk_id_direct_scheme_instr: {
                    name: 'fkidx_mutual_fund_details_fk_id_direct_scheme_instr',
                    foreignKey: 'fk_id_direct_scheme_instrument',
                    entityKey: 'id',
                    entity: 'Instrument'
                },
                fkidx_mutual_fund_details_fk_id_primary_scheme_instr: {
                    name: 'fkidx_mutual_fund_details_fk_id_primary_scheme_instr',
                    foreignKey: 'fk_id_primary_scheme_instrument',
                    entityKey: 'id',
                    entity: 'Instrument'
                }
            },
            hiddenProperties: [],
            syncRefresher: {
                eventType: queues_1.TransactionalDataRefreshingQueueMessageEventType.INSTRUMENT_REPLICATION_BY_INSTRUMENT_ID,
                params: {
                    instrumentId: 'instrumentId' // key in the model
                }
            }
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], MutualFundDetails);
exports.MutualFundDetails = MutualFundDetails;
//# sourceMappingURL=mutual-fund-details.model.js.map