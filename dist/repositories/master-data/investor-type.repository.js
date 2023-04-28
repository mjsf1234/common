"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvestorTypeRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class InvestorTypeRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.InvestorType, dataSource);
    }
}
exports.InvestorTypeRepository = InvestorTypeRepository;
//# sourceMappingURL=investor-type.repository.js.map