"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvisoryClientMasterRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class AdvisoryClientMasterRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.AdvisoryClientMaster, dataSource);
    }
}
exports.AdvisoryClientMasterRepository = AdvisoryClientMasterRepository;
//# sourceMappingURL=advisory-client-master.repository.js.map