"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstrumentsReportingRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class InstrumentsReportingRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.InstrumentsReporting, dataSource);
    }
}
exports.InstrumentsReportingRepository = InstrumentsReportingRepository;
//# sourceMappingURL=instruments-reporting.repository.js.map