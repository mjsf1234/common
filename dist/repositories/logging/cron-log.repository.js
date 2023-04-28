"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CronLogRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class CronLogRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.CronLog, dataSource);
    }
}
exports.CronLogRepository = CronLogRepository;
//# sourceMappingURL=cron-log.repository.js.map