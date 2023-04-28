"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstrumentSebiCategoryRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class InstrumentSebiCategoryRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.InstrumentSebiCategory, dataSource);
    }
}
exports.InstrumentSebiCategoryRepository = InstrumentSebiCategoryRepository;
//# sourceMappingURL=instrument-sebi-category.repository.js.map