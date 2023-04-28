"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientEtlLogRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class ClientEtlLogRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.ClientEtlLog, dataSource);
    }
}
exports.ClientEtlLogRepository = ClientEtlLogRepository;
//# sourceMappingURL=client-etl-log.repository.js.map