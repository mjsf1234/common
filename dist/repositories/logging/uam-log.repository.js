"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UAMLogRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class UAMLogRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.UAMLog, dataSource);
    }
}
exports.UAMLogRepository = UAMLogRepository;
//# sourceMappingURL=uam-log.repository.js.map