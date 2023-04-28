"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoliticallyExposureTypeRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class PoliticallyExposureTypeRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.PoliticallyExposureType, dataSource);
    }
}
exports.PoliticallyExposureTypeRepository = PoliticallyExposureTypeRepository;
//# sourceMappingURL=politically-exposure-type.repository.js.map