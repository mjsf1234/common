"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthCheckerLogRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class HealthCheckerLogRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.HealthCheckerLog, dataSource);
    }
}
exports.HealthCheckerLogRepository = HealthCheckerLogRepository;
//# sourceMappingURL=health-checker-log.repository.js.map