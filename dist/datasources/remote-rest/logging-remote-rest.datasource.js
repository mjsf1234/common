"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggingRestRemoteDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const createConfig = () => {
    var _a;
    const config = {
        name: 'logging_remote_rest',
        connector: 'rest',
        baseURL: ((_a = process.env.COMMON_LGGN_RMT_BSURL) !== null && _a !== void 0 ? _a : 'http://localhost:3013/API/Logging'),
        crud: true
    };
    return config;
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let LoggingRestRemoteDataSource = class LoggingRestRemoteDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = createConfig()) {
        super(dsConfig);
    }
};
LoggingRestRemoteDataSource.dataSourceName = 'logging_remote_rest';
LoggingRestRemoteDataSource.defaultConfig = createConfig();
LoggingRestRemoteDataSource = (0, tslib_1.__decorate)([
    (0, core_1.lifeCycleObserver)('datasource'),
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.config.logging_remote_rest', { optional: true })),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], LoggingRestRemoteDataSource);
exports.LoggingRestRemoteDataSource = LoggingRestRemoteDataSource;
//# sourceMappingURL=logging-remote-rest.datasource.js.map