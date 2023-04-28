"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterDataAppFileRepository = void 0;
const __1 = require("..");
const models_1 = require("../../models");
class MasterDataAppFileRepository extends __1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.MasterDataAppFile, dataSource);
    }
}
exports.MasterDataAppFileRepository = MasterDataAppFileRepository;
//# sourceMappingURL=master-data-app-file.repository.js.map