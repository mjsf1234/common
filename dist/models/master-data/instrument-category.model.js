"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstrumentCategory = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const _1 = require(".");
const __1 = require("..");
const category_return_history_model_1 = require("./category-return-history.model");
const instrument_model_1 = require("./instrument.model");
const instrument_category_group_model_1 = require("./instrument-category-group.model");
const queues_1 = require("../../queues");
let InstrumentCategory = class InstrumentCategory extends __1.BaseSQLModel {
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
], InstrumentCategory.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'name', dataType: 'VARCHAR', dataLength: 255, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentCategory.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentCategory.prototype, "bosCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'short_name', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentCategory.prototype, "shortName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'description', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentCategory.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'fundoo_code', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentCategory.prototype, "fundooCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'purchase_cutoff_time', dataType: 'TIME', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentCategory.prototype, "purchaseCutoffTime", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'redemption_cutoff_time', dataType: 'TIME', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentCategory.prototype, "redemptionCutoffTime", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'object',
        default: {},
        postgresql: { columnName: 'config', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], InstrumentCategory.prototype, "config", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'object',
        default: { riskProfileIds: [1, 2, 3, 4, 5] },
        postgresql: { columnName: 'suitability', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], InstrumentCategory.prototype, "suitability", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => instrument_model_1.Instrument, {
        name: 'benchmarkInstrument',
        keyFrom: 'benchmarkInstrumentId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_benchmark_instrument', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentCategory.prototype, "benchmarkInstrumentId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => _1.Asset, {
        name: 'asset',
        keyFrom: 'assetId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_asset', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentCategory.prototype, "assetId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => instrument_category_group_model_1.InstrumentCategoryGroup, {
        name: 'instrumentCategoryGroup',
        keyFrom: 'categoryGroupId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_category_group', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentCategory.prototype, "categoryGroupId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => category_return_history_model_1.CategoryReturnHistory, { keyTo: 'instrumentCategoryId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], InstrumentCategory.prototype, "categoryReturnHistories", void 0);
InstrumentCategory = (0, tslib_1.__decorate)([
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
            postgresql: { tableName: 'instrument_category' },
            plural: 'InstrumentCategories',
            foreignKeys: {
                fkidx_instrument_category_fk_id_instrument: {
                    name: 'fkidx_instrument_category_fk_id_instrument',
                    foreignKey: 'fk_id_benchmark_instrument',
                    entityKey: 'id',
                    entity: 'Instrument'
                }
            },
            hiddenProperties: ['config'],
            syncRefresher: {
                eventType: queues_1.TransactionalDataRefreshingQueueMessageEventType.INSTRUMENT_REPLICATION_BY_WHERE_FILTER,
                params: {
                    instrumentCategoryId: 'id'
                }
            }
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], InstrumentCategory);
exports.InstrumentCategory = InstrumentCategory;
//# sourceMappingURL=instrument-category.model.js.map