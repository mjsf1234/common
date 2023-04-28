"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderExecutionAppFileRepository = void 0;
const __1 = require("..");
const order_execution_app_file_model_1 = require("../../models/order-execution/order-execution-app-file.model");
class OrderExecutionAppFileRepository extends __1.BaseLocalRepository {
    constructor(dataSource) {
        super(order_execution_app_file_model_1.OrderExecutionAppFile, dataSource);
    }
}
exports.OrderExecutionAppFileRepository = OrderExecutionAppFileRepository;
//# sourceMappingURL=order-execution-app-file.repository.js.map