"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelPortfolioConfig = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let ModelPortfolioConfig = class ModelPortfolioConfig extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'model_name', dataType: 'VARCHAR', dataLength: 255, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ModelPortfolioConfig.prototype, "modelName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        postgresql: { columnName: 'model_with_tenure', dataType: 'INT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ModelPortfolioConfig.prototype, "modelWithTenure", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        optionLabelIdentifier: 'MODELPORTFOLIOMODELTYPE',
        postgresql: { columnName: 'model_type', dataType: 'INT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ModelPortfolioConfig.prototype, "modelType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        optionLabelIdentifier: 'MODELPORTFOLIOFLOW',
        postgresql: { columnName: 'for_instrument', dataType: 'INT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ModelPortfolioConfig.prototype, "forInstrument", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        optionLabelIdentifier: 'MODELCONFIGBYWEIGHTORQUATITY',
        postgresql: { columnName: 'weight_or_quantity', dataType: 'INT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ModelPortfolioConfig.prototype, "weightOrQuantity", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'object',
        postgresql: { columnName: 'configuration_for_non_instrument', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], ModelPortfolioConfig.prototype, "configurationForNonInstrument", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'MODELPORTFOLIOGOALTYPE',
        postgresql: { columnName: 'bos_code', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ModelPortfolioConfig.prototype, "bosCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'description', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ModelPortfolioConfig.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: false,
        postgresql: { columnName: 'cagr', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 15, dataScale: 3 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ModelPortfolioConfig.prototype, "cagr", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.ModelPortfolio, {
        name: 'modelPortfolio',
        keyFrom: 'modelPortfolioId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_model_portfolio', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ModelPortfolioConfig.prototype, "modelPortfolioId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.ModelPortfolioAmountCapping, {
        name: 'modelPortfolioAmountCapping',
        keyFrom: 'modelPortfolioAmountCappingId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_model_portfolio_amount_capping', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ModelPortfolioConfig.prototype, "modelPortfolioAmountCappingId", void 0);
ModelPortfolioConfig = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            forceId: false,
            indexes: {},
            postgresql: { tableName: 'model_portfolio_config' },
            plural: 'ModelPortfolioConfig'
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], ModelPortfolioConfig);
exports.ModelPortfolioConfig = ModelPortfolioConfig;
//# sourceMappingURL=model-portfolio-config.model.js.map