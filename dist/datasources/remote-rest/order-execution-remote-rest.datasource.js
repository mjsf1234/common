"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderExecutionRemoteRestDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const createConfig = () => {
    var _a;
    const config = {
        name: 'order_execution_remote_rest',
        connector: 'rest',
        baseURL: ((_a = process.env.COMMON_ORD_EXCT_RMT_BSURL) !== null && _a !== void 0 ? _a : 'http://localhost:3015/API/OrderExecution'),
        crud: true
    };
    return config;
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let OrderExecutionRemoteRestDataSource = class OrderExecutionRemoteRestDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = createConfig()) {
        super(dsConfig);
    }
};
OrderExecutionRemoteRestDataSource.dataSourceName = 'order_execution_remote_rest';
OrderExecutionRemoteRestDataSource.defaultConfig = createConfig();
OrderExecutionRemoteRestDataSource = (0, tslib_1.__decorate)([
    (0, core_1.lifeCycleObserver)('datasource'),
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.config.order_execution_remote_rest', { optional: true })),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], OrderExecutionRemoteRestDataSource);
exports.OrderExecutionRemoteRestDataSource = OrderExecutionRemoteRestDataSource;
//# sourceMappingURL=order-execution-remote-rest.datasource.js.map