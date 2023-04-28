"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelPortfolioCategory = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
const model_portfolio_asset_model_1 = require("./model-portfolio-asset.model");
const model_portfolio_product_model_1 = require("./model-portfolio-product.model");
const model_portfolio_model_1 = require("./model-portfolio.model");
let ModelPortfolioCategory = class ModelPortfolioCategory extends __1.BaseSQLModel {
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
], ModelPortfolioCategory.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'weightage', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 15, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ModelPortfolioCategory.prototype, "weightage", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'sip_weightage', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 15, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ModelPortfolioCategory.prototype, "sipWeightage", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'priority', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ModelPortfolioCategory.prototype, "priority", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'sip_priority', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ModelPortfolioCategory.prototype, "sipPriority", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => model_portfolio_model_1.ModelPortfolio, {
        name: 'modelPortfolio',
        keyFrom: 'modelPortfolioId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_model_portfolio', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ModelPortfolioCategory.prototype, "modelPortfolioId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.InstrumentCategory, {
        name: 'instrumentCategory',
        keyFrom: 'instrumentCategoryId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_instrument_category', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ModelPortfolioCategory.prototype, "instrumentCategoryId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => model_portfolio_asset_model_1.ModelPortfolioAsset, {
        name: 'modelPortfolioAsset',
        keyFrom: 'modelPortfolioAssetId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_model_portfolio_asset', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ModelPortfolioCategory.prototype, "modelPortfolioAssetId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => model_portfolio_product_model_1.ModelPortfolioProduct, {
        name: 'modelPortfolioProduct',
        keyFrom: 'modelPortfolioProductId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_model_portfolio_product', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ModelPortfolioCategory.prototype, "modelPortfolioProductId", void 0);
ModelPortfolioCategory = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            forceId: false,
            indexes: {},
            postgresql: { tableName: 'model_portfolio_category' },
            plural: 'ModelPortfolioCategories',
            foreignKeys: {
                fkidx_model_portfolio_category_portfolio_fk_id_portfolio: {
                    name: 'fkidx_model_portfolio_category_portfolio_fk_id_portfolio',
                    foreignKey: 'fk_id_model_portfolio',
                    entityKey: 'id',
                    entity: 'ModelPortfolio'
                },
                fkidx_model_portfolio_category_category_fk_id_category: {
                    name: 'fkidx_model_portfolio_category_category_fk_id_category',
                    foreignKey: 'fk_id_instrument_category',
                    entityKey: 'id',
                    entity: 'InstrumentCategory'
                },
                fkidx_model_portfolio_category_asset_fk_id_asset: {
                    name: 'fkidx_model_portfolio_category_asset_fk_id_asset',
                    foreignKey: 'fk_id_model_portfolio_asset',
                    entityKey: 'id',
                    entity: 'ModelPortfolioAsset'
                },
                fkidx_model_portfolio_category_product_fk_id_product: {
                    name: 'fkidx_model_portfolio_category_product_fk_id_product',
                    foreignKey: 'fk_id_model_portfolio_product',
                    entityKey: 'id',
                    entity: 'ModelPortfolioProduct'
                }
            },
            hiddenProperties: ['fk_id_model_portfolio', 'fk_id_instrument_category', 'fk_id_model_portfolio_asset', 'fk_id_model_portfolio_product']
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], ModelPortfolioCategory);
exports.ModelPortfolioCategory = ModelPortfolioCategory;
//# sourceMappingURL=model-portfolio-category.model.js.map