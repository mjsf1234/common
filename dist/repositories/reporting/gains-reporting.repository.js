"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GainsReportingRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class GainsReportingRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.GainsReporting, dataSource);
    }
}
exports.GainsReportingRepository = GainsReportingRepository;
//# sourceMappingURL=gains-reporting.repository.js.map