"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorLogRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class ErrorLogRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.ErrorLog, dataSource);
    }
}
exports.ErrorLogRepository = ErrorLogRepository;
//# sourceMappingURL=error-log.repository.js.map