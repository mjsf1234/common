"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderExecutionAppFile = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let OrderExecutionAppFile = class OrderExecutionAppFile extends __1.BaseAppFileModel {
    constructor(data) {
        super(data);
    }
};
OrderExecutionAppFile = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'order_execution_file' },
            plural: 'OrderExecutionAppFiles'
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], OrderExecutionAppFile);
exports.OrderExecutionAppFile = OrderExecutionAppFile;
//# sourceMappingURL=order-execution-app-file.model.js.map