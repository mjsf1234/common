"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelPortfolioAsset = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
const model_portfolio_model_1 = require("./model-portfolio.model");
let ModelPortfolioAsset = class ModelPortfolioAsset extends __1.BaseSQLModel {
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
], ModelPortfolioAsset.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'weightage', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 15, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ModelPortfolioAsset.prototype, "weightage", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'sip_weightage', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 15, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ModelPortfolioAsset.prototype, "sipWeightage", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        postgresql: { columnName: 'priority', dataType: 'INT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ModelPortfolioAsset.prototype, "priority", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => model_portfolio_model_1.ModelPortfolio, {
        name: 'modelPortfolio',
        keyFrom: 'modelPortfolioId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_model_portfolio', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ModelPortfolioAsset.prototype, "modelPortfolioId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Asset, {
        name: 'asset',
        keyFrom: 'assetId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_asset', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ModelPortfolioAsset.prototype, "assetId", void 0);
ModelPortfolioAsset = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            forceId: false,
            indexes: {},
            postgresql: { tableName: 'model_portfolio_asset' },
            plural: 'ModelPortfolioAssets',
            foreignKeys: {
                fkidx_model_portfolio_asset_portfolio_fk_id_portfolio: {
                    name: 'fkidx_model_portfolio_asset_portfolio_fk_id_portfolio',
                    foreignKey: 'fk_id_model_portfolio',
                    entityKey: 'id',
                    entity: 'ModelPortfolio'
                },
                fkidx_model_portfolio_asset_asset_fk_id_asset: {
                    name: 'fkidx_model_portfolio_asset_asset_fk_id_asset',
                    foreignKey: 'fk_id_asset',
                    entityKey: 'id',
                    entity: 'Asset'
                }
            },
            hiddenProperties: ['fk_id_model_portfolio', 'fk_id_asset']
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], ModelPortfolioAsset);
exports.ModelPortfolioAsset = ModelPortfolioAsset;
//# sourceMappingURL=model-portfolio-asset.model.js.map