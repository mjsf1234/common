"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DailyInstrumentRollingAlphaSnapshotReportingRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class DailyInstrumentRollingAlphaSnapshotReportingRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.DailyInstrumentRollingAlphaSnapshotReporting, dataSource);
    }
}
exports.DailyInstrumentRollingAlphaSnapshotReportingRepository = DailyInstrumentRollingAlphaSnapshotReportingRepository;
//# sourceMappingURL=daily-instrument-rolling-alpha-snapshot-reporting.repository.js.map