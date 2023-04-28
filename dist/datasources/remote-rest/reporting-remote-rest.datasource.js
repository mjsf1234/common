"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportingRemoteRestDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const createConfig = () => {
    var _a;
    const config = {
        name: 'reporting_remote_rest',
        connector: 'rest',
        baseURL: ((_a = process.env.COMMON_REPT_RMT_BSURL) !== null && _a !== void 0 ? _a : 'http://localhost:3016/API/Reporting'),
        crud: true
    };
    return config;
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let ReportingRemoteRestDataSource = class ReportingRemoteRestDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = createConfig()) {
        super(dsConfig);
    }
};
ReportingRemoteRestDataSource.dataSourceName = 'reporting_remote_rest';
ReportingRemoteRestDataSource.defaultConfig = createConfig();
ReportingRemoteRestDataSource = (0, tslib_1.__decorate)([
    (0, core_1.lifeCycleObserver)('datasource'),
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.config.reporting_remote_rest', { optional: true })),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], ReportingRemoteRestDataSource);
exports.ReportingRemoteRestDataSource = ReportingRemoteRestDataSource;
//# sourceMappingURL=reporting-remote-rest.datasource.js.map