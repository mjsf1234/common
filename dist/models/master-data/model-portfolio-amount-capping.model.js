"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelPortfolioAmountCapping = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let ModelPortfolioAmountCapping = class ModelPortfolioAmountCapping extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        id: 1,
        generated: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ModelPortfolioAmountCapping.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'min_amount', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ModelPortfolioAmountCapping.prototype, "minAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'max_amount', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ModelPortfolioAmountCapping.prototype, "maxAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'number_of_schemes', nullable: 'Y', dataType: 'SMALLINT' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ModelPortfolioAmountCapping.prototype, "numberOfSchemes", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'INVESTMENTTYPE',
        postgresql: { columnName: 'investment_type', dataType: 'SMALLINT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ModelPortfolioAmountCapping.prototype, "investmentType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => __1.ModelPortfolio, { keyTo: 'modelPortfolioAmountCappingId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], ModelPortfolioAmountCapping.prototype, "modelPortfolios", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => __1.ModelPortfolioInstrument, { keyTo: 'modelPortfolioAmountCappingId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], ModelPortfolioAmountCapping.prototype, "modelPortfolioInstruments", void 0);
ModelPortfolioAmountCapping = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            forceId: false,
            indexes: {
                idx_is_active: { keys: { is_active: 1 }, options: { unique: false } },
                idx_created_date: { keys: { created_date: 1 }, options: { unique: false } },
                idx_last_modified_date: { keys: { last_modified_date: 1 }, options: { unique: false } }
            },
            postgresql: { tableName: 'model_portfolio_amount_capping' },
            plural: 'ModelPortfolioAmountCappings',
            foreignKeys: {},
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], ModelPortfolioAmountCapping);
exports.ModelPortfolioAmountCapping = ModelPortfolioAmountCapping;
//# sourceMappingURL=model-portfolio-amount-capping.model.js.map