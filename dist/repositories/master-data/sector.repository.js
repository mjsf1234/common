"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectorRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class SectorRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.Sector, dataSource);
    }
}
exports.SectorRepository = SectorRepository;
//# sourceMappingURL=sector.repository.js.map