"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelPortfolioInstrument = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
/*import {ModelPortfolioAsset} from './model-portfolio-asset.model';
import {ModelPortfolioCategory} from './model-portfolio-category.model';
import {ModelPortfolioProduct} from './model-portfolio-product.model';
import {ModelPortfolio} from './model-portfolio.model';*/
const risk_profile_model_1 = require("./risk-profile.model");
const model_portfolio_amount_capping_model_1 = require("./model-portfolio-amount-capping.model");
let ModelPortfolioInstrument = class ModelPortfolioInstrument extends __1.BaseSQLModel {
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
], ModelPortfolioInstrument.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'weightage', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 15, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ModelPortfolioInstrument.prototype, "weightage", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'min_tenure_months', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ModelPortfolioInstrument.prototype, "minTenureMonths", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'max_tenure_months', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ModelPortfolioInstrument.prototype, "maxTenureMonths", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'INVESTMENTTYPE',
        postgresql: { columnName: 'investment_type', dataType: 'SMALLINT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ModelPortfolioInstrument.prototype, "investmentType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Instrument, {
        name: 'instrument',
        keyFrom: 'instrumentId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_instrument', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ModelPortfolioInstrument.prototype, "instrumentId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => risk_profile_model_1.RiskProfile, {
        name: 'riskProfile',
        keyFrom: 'riskProfileId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_risk_profile', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ModelPortfolioInstrument.prototype, "riskProfileId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => model_portfolio_amount_capping_model_1.ModelPortfolioAmountCapping, {
        name: 'modelPortfolioAmountCapping',
        keyFrom: 'modelPortfolioAmountCappingId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_model_portfolio_amount_capping', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ModelPortfolioInstrument.prototype, "modelPortfolioAmountCappingId", void 0);
ModelPortfolioInstrument = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            forceId: false,
            indexes: {},
            postgresql: { tableName: 'model_portfolio_instrument' },
            plural: 'ModelPortfolioInstruments',
            foreignKeys: {
                fkidx_model_portfolio_instrument_instrument_fk_id_instrument: {
                    name: 'fkidx_model_portfolio_instrument_instrument_fk_id_instrument',
                    foreignKey: 'fk_id_instrument',
                    entityKey: 'id',
                    entity: 'Instrument'
                } /*,
                fkidx_model_portfolio_instrument_portfolio_fk_id_portfolio: {
                  name: 'fkidx_model_portfolio_instrument_portfolio_fk_id_portfolio',
                  foreignKey: 'fk_id_model_portfolio',
                  entityKey: 'id',
                  entity: 'ModelPortfolio'
                },
                fkidx_model_portfolio_instrument_category_fk_id_category: {
                  name: 'fkidx_model_portfolio_instrument_category_fk_id_category',
                  foreignKey: 'fk_id_model_portfolio_category',
                  entityKey: 'id',
                  entity: 'ModelPortfolioCategory'
                },
                fkidx_model_portfolio_instrument_asset_fk_id_asset: {
                  name: 'fkidx_model_portfolio_instrument_asset_fk_id_asset',
                  foreignKey: 'fk_id_model_portfolio_asset',
                  entityKey: 'id',
                  entity: 'ModelPortfolioAsset'
                },
                fkidx_model_portfolio_instrument_product_fk_id_product: {
                  name: 'fkidx_model_portfolio_instrument_product_fk_id_product',
                  foreignKey: 'fk_id_model_portfolio_product',
                  entityKey: 'id',
                  entity: 'ModelPortfolioProduct'
                }*/
            },
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], ModelPortfolioInstrument);
exports.ModelPortfolioInstrument = ModelPortfolioInstrument;
//# sourceMappingURL=model-portfolio-instrument.model.js.map