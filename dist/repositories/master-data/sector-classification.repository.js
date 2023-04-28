"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectorClassificationRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class SectorClassificationRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.SectorClassification, dataSource);
    }
}
exports.SectorClassificationRepository = SectorClassificationRepository;
//# sourceMappingURL=sector-classification.repository.js.map