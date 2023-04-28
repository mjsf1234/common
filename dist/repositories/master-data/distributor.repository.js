"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistributorRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class DistributorRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.Distributor, dataSource);
    }
}
exports.DistributorRepository = DistributorRepository;
//# sourceMappingURL=distributor.repository.js.map