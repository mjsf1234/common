"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OccupationRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class OccupationRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.Occupation, dataSource);
    }
}
exports.OccupationRepository = OccupationRepository;
//# sourceMappingURL=occupation.repository.js.map