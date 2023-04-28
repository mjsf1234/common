"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaptchaRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class CaptchaRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.Captcha, dataSource);
    }
}
exports.CaptchaRepository = CaptchaRepository;
//# sourceMappingURL=captcha.repository.js.map