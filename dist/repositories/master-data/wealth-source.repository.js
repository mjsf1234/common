"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WealthSourceRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class WealthSourceRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.WealthSource, dataSource);
    }
}
exports.WealthSourceRepository = WealthSourceRepository;
//# sourceMappingURL=wealth-source.repository.js.map