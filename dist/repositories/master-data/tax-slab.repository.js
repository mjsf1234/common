"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxSlabRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class TaxSlabRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.TaxSlab, dataSource);
    }
}
exports.TaxSlabRepository = TaxSlabRepository;
//# sourceMappingURL=tax-slab.repository.js.map