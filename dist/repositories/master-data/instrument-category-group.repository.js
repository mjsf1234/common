"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstrumentCategoryGroupRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class InstrumentCategoryGroupRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.InstrumentCategoryGroup, dataSource);
    }
}
exports.InstrumentCategoryGroupRepository = InstrumentCategoryGroupRepository;
//# sourceMappingURL=instrument-category-group.repository.js.map