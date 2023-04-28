"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DailyInstrumentRollingAlphaSnapshotReporting = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const base_es_model_model_1 = require("../base-es-model.model");
let DailyInstrumentRollingAlphaSnapshotReporting = class DailyInstrumentRollingAlphaSnapshotReporting extends base_es_model_model_1.BaseESModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DailyInstrumentRollingAlphaSnapshotReporting.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DailyInstrumentRollingAlphaSnapshotReporting.prototype, "dailyInstrumentRollingAlphaSnapshotId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: true,
        es: { type: 'date' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], DailyInstrumentRollingAlphaSnapshotReporting.prototype, "effectiveDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DailyInstrumentRollingAlphaSnapshotReporting.prototype, "returnFor1Month", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DailyInstrumentRollingAlphaSnapshotReporting.prototype, "returnFor3Month", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DailyInstrumentRollingAlphaSnapshotReporting.prototype, "returnFor6Month", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DailyInstrumentRollingAlphaSnapshotReporting.prototype, "returnFor1Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DailyInstrumentRollingAlphaSnapshotReporting.prototype, "returnFor3Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DailyInstrumentRollingAlphaSnapshotReporting.prototype, "returnFor5Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DailyInstrumentRollingAlphaSnapshotReporting.prototype, "sharpeRatioFor1Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DailyInstrumentRollingAlphaSnapshotReporting.prototype, "sharpeRatioFor3Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DailyInstrumentRollingAlphaSnapshotReporting.prototype, "sharpeRatioFor5Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DailyInstrumentRollingAlphaSnapshotReporting.prototype, "volatilityFor1Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DailyInstrumentRollingAlphaSnapshotReporting.prototype, "volatilityFor2Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DailyInstrumentRollingAlphaSnapshotReporting.prototype, "volatilityFor3Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DailyInstrumentRollingAlphaSnapshotReporting.prototype, "volatilityFor5Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DailyInstrumentRollingAlphaSnapshotReporting.prototype, "avgReturn1Year", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DailyInstrumentRollingAlphaSnapshotReporting.prototype, "instrumentId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DailyInstrumentRollingAlphaSnapshotReporting.prototype, "instrumentName", void 0);
DailyInstrumentRollingAlphaSnapshotReporting = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            plural: 'DailyInstrumentRollingAlphaSnapshotReportings',
            indexes: {},
            elasticsearch: {
                index: 'dailyinstrumentrollingalphasnapshotreporting',
                type: 'dailyinstrumentrollingalphasnapshot'
            },
            foreignKeys: {},
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], DailyInstrumentRollingAlphaSnapshotReporting);
exports.DailyInstrumentRollingAlphaSnapshotReporting = DailyInstrumentRollingAlphaSnapshotReporting;
//# sourceMappingURL=daily-instrument-rolling-alpha-snapshot-reporting.model.js.map