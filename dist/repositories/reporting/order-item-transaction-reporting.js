"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemsTransactionReportingRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class OrderItemsTransactionReportingRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.OrderItemsTransactionReporting, dataSource);
    }
}
exports.OrderItemsTransactionReportingRepository = OrderItemsTransactionReportingRepository;
//# sourceMappingURL=order-item-transaction-reporting.js.map