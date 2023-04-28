"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppFilesReportingRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class AppFilesReportingRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.AppFilesReporting, dataSource);
    }
}
exports.AppFilesReportingRepository = AppFilesReportingRepository;
//# sourceMappingURL=app-files-reporting.repository.js.map