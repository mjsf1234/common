"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutgoingApiCallLogRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class OutgoingApiCallLogRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.OutgoingApiCallLog, dataSource);
    }
}
exports.OutgoingApiCallLogRepository = OutgoingApiCallLogRepository;
//# sourceMappingURL=outgoing-api-call-log.repository.js.map