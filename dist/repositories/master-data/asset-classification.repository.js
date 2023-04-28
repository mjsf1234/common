"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetClassificationRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class AssetClassificationRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.AssetClassification, dataSource);
    }
}
exports.AssetClassificationRepository = AssetClassificationRepository;
//# sourceMappingURL=asset-classification.repository.js.map