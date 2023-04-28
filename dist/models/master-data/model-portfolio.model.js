"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelPortfolio = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
const model_portfolio_asset_model_1 = require("./model-portfolio-asset.model");
const model_portfolio_category_model_1 = require("./model-portfolio-category.model");
const model_portfolio_config_model_1 = require("./model-portfolio-config.model");
const model_portfolio_product_model_1 = require("./model-portfolio-product.model");
let ModelPortfolio = class ModelPortfolio extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: false,
        id: true,
        postgresql: { columnName: 'id', type: 'number', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ModelPortfolio.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'description', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ModelPortfolio.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'name', dataType: 'VARCHAR', dataLength: 500, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ModelPortfolio.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'irr', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 15, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ModelPortfolio.prototype, "irr", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'fv_lumpsum_10k', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ModelPortfolio.prototype, "fvLumpsum10k", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'fv_sip_1k', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ModelPortfolio.prototype, "fvSIP1k", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'tenure_months', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ModelPortfolio.prototype, "tenureMonths", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'equity_return', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 15, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ModelPortfolio.prototype, "equityReturn", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'debt_return', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 15, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ModelPortfolio.prototype, "debtReturn", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        postgresql: { columnName: 'include_in_tax', dataType: 'BOOLEAN', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], ModelPortfolio.prototype, "includeInTax", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        postgresql: { columnName: 'include_in_sip', dataType: 'BOOLEAN', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], ModelPortfolio.prototype, "includeInSip", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'GOALOBJECTIVE',
        postgresql: { columnName: 'objective_type', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ModelPortfolio.prototype, "objectiveType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        optionLabelIdentifier: 'PRODUCTOBJECTIVE',
        postgresql: { columnName: 'product_type', dataType: 'SMALLINT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ModelPortfolio.prototype, "productType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'recommendation_reasoning', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ModelPortfolio.prototype, "recommendationReasoning", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'INVESTMENTTYPE',
        postgresql: { columnName: 'investment_type', dataType: 'SMALLINT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ModelPortfolio.prototype, "investmentType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Tenure, {
        name: 'tenure',
        keyFrom: 'tenureId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_tenure', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ModelPortfolio.prototype, "tenureId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.RiskProfile, {
        name: 'riskProfile',
        keyFrom: 'riskProfileId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_risk_profile', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ModelPortfolio.prototype, "riskProfileId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.ModelPortfolioAmountCapping, {
        name: 'modelPortfolioAmountCapping',
        keyFrom: 'modelPortfolioAmountCappingId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_model_portfolio_amount_capping', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ModelPortfolio.prototype, "modelPortfolioAmountCappingId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => model_portfolio_asset_model_1.ModelPortfolioAsset, { keyTo: 'modelPortfolioId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], ModelPortfolio.prototype, "modelPortfolioAssets", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => model_portfolio_category_model_1.ModelPortfolioCategory, { keyTo: 'modelPortfolioId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], ModelPortfolio.prototype, "modelPortfolioCategories", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => model_portfolio_product_model_1.ModelPortfolioProduct, { keyTo: 'modelPortfolioId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], ModelPortfolio.prototype, "modelPortfolioProducts", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => model_portfolio_config_model_1.ModelPortfolioConfig, { keyTo: 'modelPortfolioId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], ModelPortfolio.prototype, "modelPortfolioConfig", void 0);
ModelPortfolio = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            forceId: false,
            indexes: {},
            postgresql: { tableName: 'model_portfolio' },
            plural: 'ModelPortfolios',
            foreignKeys: {
                fkidx_model_portfolio_risk_profile_fk_id_risk_profile: {
                    name: 'fkidx_model_portfolio_risk_profile_fk_id_risk_profile',
                    foreignKey: 'fk_id_risk_profile',
                    entityKey: 'id',
                    entity: 'RiskProfile'
                },
                fkidx_model_portfolio_tenure_fk_id_tenure: {
                    name: 'fkidx_model_portfolio_tenure_fk_id_tenure',
                    foreignKey: 'fk_id_tenure',
                    entityKey: 'id',
                    entity: 'Tenure'
                }
            },
            hiddenProperties: ['fk_id_risk_profile', 'fk_id_tenure']
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], ModelPortfolio);
exports.ModelPortfolio = ModelPortfolio;
//# sourceMappingURL=model-portfolio.model.js.map