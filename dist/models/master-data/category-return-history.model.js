"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryReturnHistory = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
const instrument_category_model_1 = require("./instrument-category.model");
let CategoryReturnHistory = class CategoryReturnHistory extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
        postgresql: { columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CategoryReturnHistory.prototype, "bosCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'MUTUALFUNDENDTYPE',
        postgresql: { columnName: 'mutual_fund_end_type', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CategoryReturnHistory.prototype, "mutualFundEndType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'performance_share_class', dataType: 'VARCHAR', dataLength: 255, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CategoryReturnHistory.prototype, "performanceShareClass", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: false,
        postgresql: { columnName: 'return_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], CategoryReturnHistory.prototype, "returnDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: false,
        postgresql: { columnName: 'return_for_1_day', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CategoryReturnHistory.prototype, "returnFor1Day", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: false,
        postgresql: { columnName: 'return_for_1_week', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CategoryReturnHistory.prototype, "returnFor1Week", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: false,
        postgresql: { columnName: 'return_for_1_month', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CategoryReturnHistory.prototype, "returnFor1Month", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: false,
        postgresql: { columnName: 'return_for_3_month', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CategoryReturnHistory.prototype, "returnFor3Month", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: false,
        postgresql: { columnName: 'return_for_6_month', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CategoryReturnHistory.prototype, "returnFor6Month", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: false,
        postgresql: { columnName: 'return_for_9_month', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CategoryReturnHistory.prototype, "returnFor9Month", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: false,
        postgresql: { columnName: 'return_for_1_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CategoryReturnHistory.prototype, "returnFor1Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: false,
        postgresql: { columnName: 'return_for_2_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CategoryReturnHistory.prototype, "returnFor2Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: false,
        postgresql: { columnName: 'return_for_3_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CategoryReturnHistory.prototype, "returnFor3Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: false,
        postgresql: { columnName: 'return_for_4_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CategoryReturnHistory.prototype, "returnFor4Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: false,
        postgresql: { columnName: 'return_for_5_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CategoryReturnHistory.prototype, "returnFor5Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: false,
        postgresql: { columnName: 'return_for_10_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CategoryReturnHistory.prototype, "returnFor10Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: false,
        postgresql: { columnName: 'return_since_launch', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CategoryReturnHistory.prototype, "returnSinceLaunch", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: false,
        postgresql: { columnName: 'return_for_ytd', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CategoryReturnHistory.prototype, "returnForYTD", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => instrument_category_model_1.InstrumentCategory, {
        name: 'instrumentCategory',
        keyFrom: 'instrumentCategoryId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_instrument_category', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CategoryReturnHistory.prototype, "instrumentCategoryId", void 0);
CategoryReturnHistory = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            indexes: {
                idx_is_active: { keys: { is_active: 1 }, options: { unique: false } },
                idx_created_date: { keys: { created_date: 1 }, options: { unique: false } },
                idx_last_modified_date: { keys: { last_modified_date: 1 }, options: { unique: false } },
                idx_return_date: {
                    keys: {
                        return_date: 1
                    },
                    options: {
                        unique: false
                    }
                },
                idx_bos_code: {
                    keys: {
                        bos_code: 1
                    },
                    options: {
                        unique: false
                    }
                },
                idx_fk_id_instrument_category: {
                    keys: {
                        fk_id_instrument_category: 1
                    },
                    options: {
                        unique: false
                    }
                }
            },
            postgresql: { tableName: 'category_return_history' },
            plural: 'CategoryReturnHistories',
            foreignKeys: {
                fkidx_category_return_category_fk_id_instrument_category: {
                    name: 'fkidx_category_return_category_fk_id_instrument_category',
                    foreignKey: 'fk_id_instrument_category',
                    entityKey: 'id',
                    entity: 'InstrumentCategory'
                }
            },
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], CategoryReturnHistory);
exports.CategoryReturnHistory = CategoryReturnHistory;
//# sourceMappingURL=category-return-history.model.js.map