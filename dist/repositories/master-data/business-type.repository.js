"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessTypeRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class BusinessTypeRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.BusinessType, dataSource);
    }
}
exports.BusinessTypeRepository = BusinessTypeRepository;
//# sourceMappingURL=business-type.repository.js.map