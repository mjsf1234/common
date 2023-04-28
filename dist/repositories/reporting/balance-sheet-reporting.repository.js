"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalanceSheetReportingRepository = void 0;
const __1 = require("..");
const balance_sheet_reporting_model_1 = require("../../models/reporting/balance-sheet-reporting.model");
class BalanceSheetReportingRepository extends __1.BaseLocalRepository {
    constructor(dataSource) {
        super(balance_sheet_reporting_model_1.BalanceSheetReporting, dataSource);
    }
}
exports.BalanceSheetReportingRepository = BalanceSheetReportingRepository;
//# sourceMappingURL=balance-sheet-reporting.repository.js.map