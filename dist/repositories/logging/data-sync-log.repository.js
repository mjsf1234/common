"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataSyncLogRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class DataSyncLogRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.DataSyncLog, dataSource);
    }
}
exports.DataSyncLogRepository = DataSyncLogRepository;
//# sourceMappingURL=data-sync-log.repository.js.map