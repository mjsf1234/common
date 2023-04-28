"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EquityDetailsHistoryRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class EquityDetailsHistoryRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.EquityDetailsHistory, dataSource);
    }
}
exports.EquityDetailsHistoryRepository = EquityDetailsHistoryRepository;
//# sourceMappingURL=equity-details-history.repository.js.map