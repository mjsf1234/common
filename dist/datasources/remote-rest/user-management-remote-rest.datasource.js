"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManagementRemoteRestDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const createConfig = () => {
    var _a;
    const config = {
        name: 'user_management_remote_rest',
        connector: 'rest',
        baseURL: ((_a = process.env.COMMON_USR_MGMT_RMT_BSURL) !== null && _a !== void 0 ? _a : 'http://localhost:3018/API/UserManagement'),
        crud: true
    };
    return config;
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let UserManagementRemoteRestDataSource = class UserManagementRemoteRestDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = createConfig()) {
        super(dsConfig);
    }
};
UserManagementRemoteRestDataSource.dataSourceName = 'user_management_remote_rest';
UserManagementRemoteRestDataSource.defaultConfig = createConfig();
UserManagementRemoteRestDataSource = (0, tslib_1.__decorate)([
    (0, core_1.lifeCycleObserver)('datasource'),
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.config.user_management_remote_rest', { optional: true })),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], UserManagementRemoteRestDataSource);
exports.UserManagementRemoteRestDataSource = UserManagementRemoteRestDataSource;
//# sourceMappingURL=user-management-remote-rest.datasource.js.map