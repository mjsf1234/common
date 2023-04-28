"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapitalGainIndexationRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class CapitalGainIndexationRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.CapitalGainIndexation, dataSource);
    }
}
exports.CapitalGainIndexationRepository = CapitalGainIndexationRepository;
//# sourceMappingURL=capital-gain-indexation.repository.js.map