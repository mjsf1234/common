"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelPortfolioProduct = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
const model_portfolio_asset_model_1 = require("./model-portfolio-asset.model");
const model_portfolio_model_1 = require("./model-portfolio.model");
let ModelPortfolioProduct = class ModelPortfolioProduct extends __1.BaseSQLModel {
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
], ModelPortfolioProduct.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'weightage', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 15, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ModelPortfolioProduct.prototype, "weightage", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        postgresql: { columnName: 'priority', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ModelPortfolioProduct.prototype, "priority", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => model_portfolio_asset_model_1.ModelPortfolioAsset, {
        name: 'modelPortfolioAsset',
        keyFrom: 'modelPortfolioAssetId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_model_portfolio_asset', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ModelPortfolioProduct.prototype, "modelPortfolioAssetId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Product, {
        name: 'product',
        keyFrom: 'productId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_product', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ModelPortfolioProduct.prototype, "productId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => model_portfolio_model_1.ModelPortfolio, {
        name: 'modelPortfolio',
        keyFrom: 'modelPortfolioId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_model_portfolio', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ModelPortfolioProduct.prototype, "modelPortfolioId", void 0);
ModelPortfolioProduct = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            forceId: false,
            indexes: {},
            postgresql: { tableName: 'model_portfolio_product' },
            plural: 'ModelPortfolioProducts',
            foreignKeys: {
                fkidx_model_portfolio_product_product_fk_id_product: {
                    name: 'fkidx_model_portfolio_product_product_fk_id_product',
                    foreignKey: 'fk_id_product',
                    entityKey: 'id',
                    entity: 'Product'
                },
                fkidx_model_portfolio_product_asset_fk_id_asset: {
                    name: 'fkidx_model_portfolio_product_asset_fk_id_asset',
                    foreignKey: 'fk_id_model_portfolio_asset',
                    entityKey: 'id',
                    entity: 'ModelPortfolioAsset'
                },
                fkidx_model_portfolio_product_portfolio_fk_id_portfolio: {
                    name: 'fkidx_model_portfolio_product_portfolio_fk_id_portfolio',
                    foreignKey: 'fk_id_model_portfolio',
                    entityKey: 'id',
                    entity: 'ModelPortfolio'
                }
            },
            hiddenProperties: ['fk_id_product', 'fk_id_model_portfolio_asset', 'fk_id_model_portfolio']
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], ModelPortfolioProduct);
exports.ModelPortfolioProduct = ModelPortfolioProduct;
//# sourceMappingURL=model-portfolio-product.model.js.map