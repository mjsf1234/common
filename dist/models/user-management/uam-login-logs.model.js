"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UamLoginLogs = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let UamLoginLogs = class UamLoginLogs extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'user_id', dataType: 'VARCHAR', dataLength: 100, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UamLoginLogs.prototype, "userId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'employee_code', dataType: 'VARCHAR', dataLength: 100, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UamLoginLogs.prototype, "employeeCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'employee_name', dataType: 'VARCHAR', dataLength: 100, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UamLoginLogs.prototype, "employeeName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: true,
        postgresql: { columnName: 'login_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], UamLoginLogs.prototype, "loginDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'login_time', dataType: 'VARCHAR', dataLength: 100, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UamLoginLogs.prototype, "loginTime", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'logout_time', dataType: 'VARCHAR', dataLength: 100, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UamLoginLogs.prototype, "logoutTime", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        default: "WEALTHAPP",
        postgresql: { columnName: 'application_name', dataType: 'VARCHAR', dataLength: 100, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UamLoginLogs.prototype, "applicationName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        default: "WEALTHAPP",
        postgresql: { columnName: 'ip_address', dataType: 'TEXT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UamLoginLogs.prototype, "ipAddress", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        default: "NOT AVAILABLE",
        postgresql: { columnName: 'asset_details', dataType: 'VARCHAR', dataLength: 100, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UamLoginLogs.prototype, "assetDetails", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        isPseudonym: true,
        postgresql: { columnName: 'token', dataType: 'VARCHAR', dataLength: 64, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UamLoginLogs.prototype, "token", void 0);
UamLoginLogs = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'uam_login_logs' },
            plural: 'UamLoginLogs'
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], UamLoginLogs);
exports.UamLoginLogs = UamLoginLogs;
//# sourceMappingURL=uam-login-logs.model.js.map