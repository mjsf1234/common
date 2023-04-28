"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class AssetRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.Asset, dataSource);
    }
}
exports.AssetRepository = AssetRepository;
//# sourceMappingURL=asset.repository.js.map