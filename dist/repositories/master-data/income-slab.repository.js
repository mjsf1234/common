"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncomeSlabRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class IncomeSlabRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.IncomeSlab, dataSource);
    }
}
exports.IncomeSlabRepository = IncomeSlabRepository;
//# sourceMappingURL=income-slab.repository.js.map