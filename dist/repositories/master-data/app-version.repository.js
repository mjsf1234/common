"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppVersionRepository = void 0;
const __1 = require("..");
const models_1 = require("../../models");
class AppVersionRepository extends __1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.AppVersion, dataSource);
    }
}
exports.AppVersionRepository = AppVersionRepository;
//# sourceMappingURL=app-version.repository.js.map