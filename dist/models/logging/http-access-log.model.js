"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPAccessLog = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let HTTPAccessLog = class HTTPAccessLog extends __1.BaseDataDumpModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'transaction_id', dataType: 'VARCHAR', dataLength: 500, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HTTPAccessLog.prototype, "transactionId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
        postgresql: { columnName: 'request_url', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HTTPAccessLog.prototype, "requestURL", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        required: false,
        postgresql: { columnName: 'start_time', dataType: 'TIMESTAMP', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], HTTPAccessLog.prototype, "startTime", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        required: false,
        postgresql: { columnName: 'end_time', dataType: 'TIMESTAMP', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], HTTPAccessLog.prototype, "endTime", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        required: false,
        postgresql: { columnName: 'duration_in_ms', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HTTPAccessLog.prototype, "durationInMs", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
        postgresql: { columnName: 'request_method', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HTTPAccessLog.prototype, "requestMethod", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: false,
        default: false,
        postgresql: { columnName: 'is_error', dataType: 'BOOLEAN', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], HTTPAccessLog.prototype, "isError", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'object',
        default: {},
        isPseudonym: true,
        postgresql: { columnName: 'payload', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HTTPAccessLog.prototype, "payload", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'object',
        default: {},
        isPseudonym: true,
        postgresql: { columnName: 'response_json', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], HTTPAccessLog.prototype, "responseJSON", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
        postgresql: { columnName: 'ip_address', dataType: 'VARCHAR', dataLength: 512, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HTTPAccessLog.prototype, "ipAddress", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'log_gen_time', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], HTTPAccessLog.prototype, "logGenTime", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.AppUser, {
        name: 'appUser',
        keyFrom: 'appUserId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_user', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HTTPAccessLog.prototype, "appUserId", void 0);
HTTPAccessLog = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            indexes: {
                idx_is_active: { keys: { is_active: 1 }, options: { unique: false } },
                idx_created_date: { keys: { created_date: 1 }, options: { unique: false } },
                idx_last_modified_date: { keys: { last_modified_date: 1 }, options: { unique: false } },
                idx_transaction_id: { keys: { transaction_id: 1 }, options: { unique: false } }
            },
            postgresql: { tableName: 'http_access_log' },
            plural: 'HTTPAccessLogs',
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], HTTPAccessLog);
exports.HTTPAccessLog = HTTPAccessLog;
//# sourceMappingURL=http-access-log.model.js.map