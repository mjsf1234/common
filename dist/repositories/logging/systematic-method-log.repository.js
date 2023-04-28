"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystematicMethodLogRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class SystematicMethodLogRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.SystematicMethodLog, dataSource);
    }
}
exports.SystematicMethodLogRepository = SystematicMethodLogRepository;
//# sourceMappingURL=systematic-method-log.repository.js.map