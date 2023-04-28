"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HoldingsReportingRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class HoldingsReportingRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.HoldingsReporting, dataSource);
    }
}
exports.HoldingsReportingRepository = HoldingsReportingRepository;
//# sourceMappingURL=holdings-reporting.repository.js.map