"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstrumentCategoryAssetExposure = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
//import { Asset } from '.';
const __1 = require("..");
const asset_model_1 = require("./asset.model");
const instrument_category_model_1 = require("./instrument-category.model");
let InstrumentCategoryAssetExposure = class InstrumentCategoryAssetExposure extends __1.BaseSQLModel {
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
], InstrumentCategoryAssetExposure.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'name', dataType: 'VARCHAR', dataLength: 100, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentCategoryAssetExposure.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 100,
        required: true,
        postgresql: { columnName: 'percentage', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentCategoryAssetExposure.prototype, "percentage", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => instrument_category_model_1.InstrumentCategory, {
        name: 'instrumentCategory',
        keyFrom: 'instrumentCategoryId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_instrument_category', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentCategoryAssetExposure.prototype, "instrumentCategoryId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => asset_model_1.Asset, {
        name: 'asset',
        keyFrom: 'assetId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_asset', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentCategoryAssetExposure.prototype, "assetId", void 0);
InstrumentCategoryAssetExposure = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            forceId: false,
            indexes: {
                idx_is_active: { keys: { is_active: 1 }, options: { unique: false } },
                idx_created_date: { keys: { created_date: 1 }, options: { unique: false } },
                idx_last_modified_date: { keys: { last_modified_date: 1 }, options: { unique: false } },
                idx_instrument_category_name: { keys: { name: 1 }, options: { unique: true, caseInsensitiveUnique: true } }
            },
            postgresql: { tableName: 'instrument_category_asset_exposure' },
            plural: 'InstrumentCategoryAssetExposures',
            foreignKeys: {},
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], InstrumentCategoryAssetExposure);
exports.InstrumentCategoryAssetExposure = InstrumentCategoryAssetExposure;
//# sourceMappingURL=instrument-category-asset-exposure.model.js.map