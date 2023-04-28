"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelPortfolioAmountCappingRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class ModelPortfolioAmountCappingRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.ModelPortfolioAmountCapping, dataSource);
    }
}
exports.ModelPortfolioAmountCappingRepository = ModelPortfolioAmountCappingRepository;
//# sourceMappingURL=model-portfolio-amount-capping.repository.js.map