"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MandateTypeRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class MandateTypeRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.MandateType, dataSource);
    }
}
exports.MandateTypeRepository = MandateTypeRepository;
//# sourceMappingURL=mandate-type.repository.js.map