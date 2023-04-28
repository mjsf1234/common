"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemsReportingRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class OrderItemsReportingRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.OrderItemsReporting, dataSource);
    }
}
exports.OrderItemsReportingRepository = OrderItemsReportingRepository;
//# sourceMappingURL=order-items-reporting.repository.js.map