"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthCheckerLog = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let HealthCheckerLog = class HealthCheckerLog extends __1.BaseDataDumpModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'job_name', dataType: 'VARCHAR', nullable: 'Y', dataLength: 255 }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HealthCheckerLog.prototype, "jobName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        postgresql: { columnName: 'job_sequence', dataType: 'SMALLINT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HealthCheckerLog.prototype, "jobSequence", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: true,
        postgresql: { columnName: 'execution_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], HealthCheckerLog.prototype, "executionDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'HEALTHCHECKERSTATUS',
        required: true,
        postgresql: { columnName: 'status', dataType: 'SMALLINT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], HealthCheckerLog.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'remark', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HealthCheckerLog.prototype, "remark", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        required: false,
        postgresql: { columnName: 'log_gen_time', dataType: 'TIMESTAMP', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], HealthCheckerLog.prototype, "logGenTime", void 0);
HealthCheckerLog = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            indexes: {
                idx_is_active: { keys: { is_active: 1 }, options: { unique: false } },
                idx_created_date: { keys: { created_date: 1 }, options: { unique: false } },
                idx_last_modified_date: { keys: { last_modified_date: 1 }, options: { unique: false } },
                idx_health_checker_log_execution_date: { keys: { execution_date: 1 } }
            },
            plural: 'HealthCheckerLogs',
            postgresql: { tableName: 'health_checker_log' },
            foreignKeys: {},
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], HealthCheckerLog);
exports.HealthCheckerLog = HealthCheckerLog;
//# sourceMappingURL=health-checker-log.model.js.map