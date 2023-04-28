"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreLoginUserRepository = void 0;
const __1 = require("..");
const models_1 = require("../../models");
class PreLoginUserRepository extends __1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.PreLoginUser, dataSource);
    }
}
exports.PreLoginUserRepository = PreLoginUserRepository;
//# sourceMappingURL=pre-login-user.repository.js.map