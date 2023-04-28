"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoricalHoldingsReportingRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class HistoricalHoldingsReportingRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.HistoricalHoldingsReporting, dataSource);
    }
}
exports.HistoricalHoldingsReportingRepository = HistoricalHoldingsReportingRepository;
//# sourceMappingURL=historical-holdings-reporting.repository.js.map