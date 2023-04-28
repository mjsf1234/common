"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstrumentPricesReportingRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class InstrumentPricesReportingRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.InstrumentPricesReporting, dataSource);
    }
}
exports.InstrumentPricesReportingRepository = InstrumentPricesReportingRepository;
//# sourceMappingURL=instrument-prices-reporting.repository.js.map