"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorLog = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let ErrorLog = class ErrorLog extends __1.BaseDataDumpModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'error_code', dataType: 'VARCHAR', dataLength: 255, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ErrorLog.prototype, "errorCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'error_message', dataType: 'VARCHAR', dataLength: 255, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ErrorLog.prototype, "errorMessage", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'object',
        postgresql: { columnName: 'stack_trace', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], ErrorLog.prototype, "stackTrace", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'remark', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ErrorLog.prototype, "remark", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        default: false,
        postgresql: { columnName: 'is_resolved', dataType: 'BOOLEAN', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], ErrorLog.prototype, "isResolved", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        required: false,
        postgresql: { columnName: 'log_gen_time', dataType: 'TIMESTAMP', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], ErrorLog.prototype, "logGenTime", void 0);
ErrorLog = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'error_log' },
            plural: 'ErrorLogs',
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], ErrorLog);
exports.ErrorLog = ErrorLog;
//# sourceMappingURL=error-log.model.js.map