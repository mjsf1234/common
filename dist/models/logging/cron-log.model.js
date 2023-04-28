"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CronLog = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let CronLog = class CronLog extends __1.BaseDataDumpModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'cron_job_name', dataType: 'VARCHAR', dataLength: 255, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CronLog.prototype, "cronJobName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'command', dataType: 'VARCHAR', dataLength: 512, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CronLog.prototype, "command", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'CRONSTATUS',
        default: 1,
        required: true,
        postgresql: { columnName: 'cron_status', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CronLog.prototype, "cronStatus", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'object',
        postgresql: { columnName: 'log', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], CronLog.prototype, "log", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: true,
        postgresql: { columnName: 'start_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], CronLog.prototype, "startDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'end_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], CronLog.prototype, "endDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        postgresql: { columnName: 'is_success', dataType: 'BOOLEAN', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CronLog.prototype, "isSuccess", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        required: false,
        postgresql: { columnName: 'log_gen_time', dataType: 'TIMESTAMP', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], CronLog.prototype, "logGenTime", void 0);
CronLog = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            indexes: {
                idx_is_active: { keys: { is_active: 1 }, options: { unique: false } },
                idx_created_date: { keys: { created_date: 1 }, options: { unique: false } },
                idx_last_modified_date: { keys: { last_modified_date: 1 }, options: { unique: false } },
                idx_cron_job_name: { keys: { cron_job_name: 1 }, options: { unique: false } }
            },
            postgresql: { tableName: 'cron_log' },
            plural: 'CronLogs',
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], CronLog);
exports.CronLog = CronLog;
//# sourceMappingURL=cron-log.model.js.map