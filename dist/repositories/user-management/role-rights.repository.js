"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleRightsRepository = void 0;
const __1 = require("..");
const models_1 = require("../../models");
class RoleRightsRepository extends __1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.RoleRights, dataSource);
    }
}
exports.RoleRightsRepository = RoleRightsRepository;
//# sourceMappingURL=role-rights.repository.js.map