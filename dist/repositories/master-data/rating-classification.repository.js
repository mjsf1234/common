"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingClassificationRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class RatingClassificationRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.RatingClassification, dataSource);
    }
}
exports.RatingClassificationRepository = RatingClassificationRepository;
//# sourceMappingURL=rating-classification.repository.js.map