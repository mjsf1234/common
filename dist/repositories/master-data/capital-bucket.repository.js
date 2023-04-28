"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapitalBucketRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class CapitalBucketRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.CapitalBucket, dataSource);
    }
}
exports.CapitalBucketRepository = CapitalBucketRepository;
//# sourceMappingURL=capital-bucket.repository.js.map