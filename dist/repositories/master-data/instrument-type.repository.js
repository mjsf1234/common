"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstrumentTypeRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class InstrumentTypeRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.InstrumentType, dataSource);
    }
}
exports.InstrumentTypeRepository = InstrumentTypeRepository;
//# sourceMappingURL=instrument-type.repository.js.map