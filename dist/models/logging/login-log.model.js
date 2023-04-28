"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginLog = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let LoginLog = class LoginLog extends __1.BaseDataDumpModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        required: true,
        postgresql: { columnName: 'login_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], LoginLog.prototype, "loginDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'ip_address', dataType: 'VARCHAR', dataLength: 512, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LoginLog.prototype, "ipAddress", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'source', dataType: 'VARCHAR', dataLength: 512, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LoginLog.prototype, "source", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'version', dataType: 'VARCHAR', dataLength: 512, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LoginLog.prototype, "version", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'object',
        default: {},
        postgresql: { columnName: 'details', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], LoginLog.prototype, "details", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'transaction_id', dataType: 'VARCHAR', dataLength: 500, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LoginLog.prototype, "transactionId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        required: false,
        postgresql: { columnName: 'log_gen_time', dataType: 'TIMESTAMP', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], LoginLog.prototype, "logGenTime", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.AppUser, {
        name: 'appUser',
        keyFrom: 'appUserId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_user', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], LoginLog.prototype, "appUserId", void 0);
LoginLog = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            indexes: {
                idx_is_active: { keys: { is_active: 1 }, options: { unique: false } },
                idx_created_date: { keys: { created_date: 1 }, options: { unique: false } },
                idx_last_modified_date: { keys: { last_modified_date: 1 }, options: { unique: false } },
                idx_transaction_id: { keys: { transaction_id: 1 }, options: { unique: false } }
            },
            postgresql: { tableName: 'login_log' },
            plural: 'LoginLogs',
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], LoginLog);
exports.LoginLog = LoginLog;
//# sourceMappingURL=login-log.model.js.map