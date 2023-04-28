"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoleRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class AppRoleRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.AppRole, dataSource);
    }
}
exports.AppRoleRepository = AppRoleRepository;
//# sourceMappingURL=app-role.repository.js.map