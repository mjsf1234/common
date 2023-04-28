"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsReportingRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class TransactionsReportingRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.TransactionsReporting, dataSource);
    }
}
exports.TransactionsReportingRepository = TransactionsReportingRepository;
//# sourceMappingURL=transactions-reporting.repository.js.map