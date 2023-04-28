"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UamLoginAttemptsConfigRepository = void 0;
const __1 = require("..");
const models_1 = require("../../models");
class UamLoginAttemptsConfigRepository extends __1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.UamLoginAttemptsConfig, dataSource);
    }
}
exports.UamLoginAttemptsConfigRepository = UamLoginAttemptsConfigRepository;
//# sourceMappingURL=uam-login-attempts-config.repository.js.map