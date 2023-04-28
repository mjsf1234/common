"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvestorCategoryRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class InvestorCategoryRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.InvestorCategory, dataSource);
    }
}
exports.InvestorCategoryRepository = InvestorCategoryRepository;
//# sourceMappingURL=investor-category.repository.js.map