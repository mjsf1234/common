"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UamLoginLogsRepository = void 0;
const __1 = require("..");
const models_1 = require("../../models");
class UamLoginLogsRepository extends __1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.UamLoginLogs, dataSource);
    }
}
exports.UamLoginLogsRepository = UamLoginLogsRepository;
//# sourceMappingURL=uam-login-logs.repository.js.map