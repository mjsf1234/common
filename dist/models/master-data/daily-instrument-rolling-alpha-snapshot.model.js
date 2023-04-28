"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DailyInstrumentRollingAlphaSnapshot = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
const instrument_model_1 = require("./instrument.model");
let DailyInstrumentRollingAlphaSnapshot = class DailyInstrumentRollingAlphaSnapshot extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DailyInstrumentRollingAlphaSnapshot.prototype, "bosCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: true,
        postgresql: { columnName: 'effective_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], DailyInstrumentRollingAlphaSnapshot.prototype, "effectiveDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'return_for_1_week', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 38, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DailyInstrumentRollingAlphaSnapshot.prototype, "returnFor1Week", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'return_for_2_week', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 38, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DailyInstrumentRollingAlphaSnapshot.prototype, "returnFor2Week", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'return_for_3_week', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 38, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DailyInstrumentRollingAlphaSnapshot.prototype, "returnFor3Week", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'return_for_1_month', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 38, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DailyInstrumentRollingAlphaSnapshot.prototype, "returnFor1Month", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'return_for_3_month', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 38, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DailyInstrumentRollingAlphaSnapshot.prototype, "returnFor3Month", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'return_for_6_month', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 38, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DailyInstrumentRollingAlphaSnapshot.prototype, "returnFor6Month", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'return_for_1_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 38, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DailyInstrumentRollingAlphaSnapshot.prototype, "returnFor1Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'return_for_2_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 38, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DailyInstrumentRollingAlphaSnapshot.prototype, "returnFor2Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'return_for_3_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 38, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DailyInstrumentRollingAlphaSnapshot.prototype, "returnFor3Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'return_for_5_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 38, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DailyInstrumentRollingAlphaSnapshot.prototype, "returnFor5Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'sharpe_ratio_for_1_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DailyInstrumentRollingAlphaSnapshot.prototype, "sharpeRatioFor1Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'sharpe_ratio_for_3_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DailyInstrumentRollingAlphaSnapshot.prototype, "sharpeRatioFor3Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'sharpe_ratio_for_5_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DailyInstrumentRollingAlphaSnapshot.prototype, "sharpeRatioFor5Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'volatility_for_1_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DailyInstrumentRollingAlphaSnapshot.prototype, "volatilityFor1Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'volatility_for_3_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DailyInstrumentRollingAlphaSnapshot.prototype, "volatilityFor3Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'volatility_for_5_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DailyInstrumentRollingAlphaSnapshot.prototype, "volatilityFor5Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'avg_return_1_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 38, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DailyInstrumentRollingAlphaSnapshot.prototype, "avgReturn1Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => instrument_model_1.Instrument, {
        name: 'instrument',
        keyFrom: 'instrumentId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_instrument', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DailyInstrumentRollingAlphaSnapshot.prototype, "instrumentId", void 0);
DailyInstrumentRollingAlphaSnapshot = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            indexes: {
                idx_is_active: { keys: { is_active: 1 }, options: { unique: false } },
                idx_created_date: { keys: { created_date: 1 }, options: { unique: false } },
                idx_last_modified_date: { keys: { last_modified_date: 1 }, options: { unique: false } },
                idx_effective_date: { keys: { effective_date: 1 }, options: { unique: false } },
                idx_fk_id_instrument: { keys: { fk_id_instrument: 1 }, options: { unique: false } }
            },
            postgresql: { tableName: 'daily_instrument_rolling_alpha_snapshot' },
            plural: 'DailyInstrumentRollingAlphaSnapshots',
            foreignKeys: {
                fkidx_diraps_instrument_fk_id_instrument: {
                    name: 'fkidx_diraps_instrument_fk_id_instrument',
                    foreignKey: 'fk_id_instrument',
                    entityKey: 'id',
                    entity: 'Instrument'
                }
            },
            hiddenProperties: ['fk_id_instrument']
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], DailyInstrumentRollingAlphaSnapshot);
exports.DailyInstrumentRollingAlphaSnapshot = DailyInstrumentRollingAlphaSnapshot;
//# sourceMappingURL=daily-instrument-rolling-alpha-snapshot.model.js.map