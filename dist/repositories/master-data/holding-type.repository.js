"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HoldingTypeRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class HoldingTypeRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.HoldingType, dataSource);
    }
}
exports.HoldingTypeRepository = HoldingTypeRepository;
//# sourceMappingURL=holding-type.repository.js.map