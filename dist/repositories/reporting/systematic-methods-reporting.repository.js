"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystematicMethodsReportingRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class SystematicMethodsReportingRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.SystematicMethodsReporting, dataSource);
    }
}
exports.SystematicMethodsReportingRepository = SystematicMethodsReportingRepository;
//# sourceMappingURL=systematic-methods-reporting.repository.js.map