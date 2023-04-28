"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncomingApiCallLogRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class IncomingApiCallLogRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.IncomingApiCallLog, dataSource);
    }
}
exports.IncomingApiCallLogRepository = IncomingApiCallLogRepository;
//# sourceMappingURL=incoming-api-call-log.repository.js.map