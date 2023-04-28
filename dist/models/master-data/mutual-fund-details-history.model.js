"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MutualFundDetailsHistory = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
const instrument_model_1 = require("./instrument.model");
let MutualFundDetailsHistory = class MutualFundDetailsHistory extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: true,
        postgresql: { columnName: 'effective_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], MutualFundDetailsHistory.prototype, "effectiveDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'expense_ratio', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 5 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetailsHistory.prototype, "expenseRatio", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'yield_to_maturity', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 5 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetailsHistory.prototype, "yieldToMaturity", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'mod_duration', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 5 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetailsHistory.prototype, "modDuration", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'corpus', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 30, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetailsHistory.prototype, "corpus", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        postgresql: { columnName: 'avg_maturity', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 30, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetailsHistory.prototype, "avgMaturity", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => instrument_model_1.Instrument, {
        name: 'instrument',
        keyFrom: 'instrumentId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_instrument', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MutualFundDetailsHistory.prototype, "instrumentId", void 0);
MutualFundDetailsHistory = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            indexes: {
                idx_is_active: { keys: { is_active: 1 }, options: { unique: false } },
                idx_created_date: { keys: { created_date: 1 }, options: { unique: false } },
                idx_last_modified_date: { keys: { last_modified_date: 1 }, options: { unique: false } },
                idx_effective_date: { keys: { effective_date: -1 }, options: { unique: false } },
                idx_effective_date_fk_id_instrument: {
                    keys: { effective_date: -1, is_active: 1, fk_id_instrument: 1 },
                    options: { unique: false }
                }
            },
            postgresql: { tableName: 'mutual_fund_details_history' },
            plural: 'MutualFundDetailsHistories',
            foreignKeys: {
                fkidx_mutual_fund_details_history_instrument_fk_id_instrument: {
                    name: 'fkidx_mutual_fund_details_history_instrument_fk_id_instrument',
                    foreignKey: 'fk_id_instrument',
                    entityKey: 'id',
                    entity: 'Instrument'
                }
            },
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], MutualFundDetailsHistory);
exports.MutualFundDetailsHistory = MutualFundDetailsHistory;
//# sourceMappingURL=mutual-fund-details-history.model.js.map