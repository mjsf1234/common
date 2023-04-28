"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutgoingApiCallLog = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let OutgoingApiCallLog = class OutgoingApiCallLog extends __1.BaseDataDumpModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'url', dataType: 'VARCHAR', dataLength: 255, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OutgoingApiCallLog.prototype, "url", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'object',
        default: {},
        required: true,
        isPseudonym: true,
        postgresql: { columnName: 'request', dataType: 'TEXT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], OutgoingApiCallLog.prototype, "request", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'object',
        default: {},
        isPseudonym: true,
        postgresql: { columnName: 'response', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], OutgoingApiCallLog.prototype, "response", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: true,
        postgresql: { columnName: 'success', dataType: 'BOOLEAN', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], OutgoingApiCallLog.prototype, "success", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'external_system_name', dataType: 'VARCHAR', dataLength: 255, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OutgoingApiCallLog.prototype, "externalSystemName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'transaction_id', dataType: 'VARCHAR', dataLength: 500, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OutgoingApiCallLog.prototype, "transactionId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'log_gen_time', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], OutgoingApiCallLog.prototype, "logGenTime", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'object',
        default: {},
        isPseudonym: true,
        postgresql: { columnName: 'extra_info', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], OutgoingApiCallLog.prototype, "extraInfo", void 0);
OutgoingApiCallLog = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            indexes: {
                idx_is_active: { keys: { is_active: 1 }, options: { unique: false } },
                idx_created_date: { keys: { created_date: 1 }, options: { unique: false } },
                idx_last_modified_date: { keys: { last_modified_date: 1 }, options: { unique: false } },
                idx_transaction_id: { keys: { transaction_id: 1 }, options: { unique: false } }
            },
            postgresql: { tableName: 'outgoing_api_call_log' },
            plural: 'OutgoingAPICallLogs',
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], OutgoingApiCallLog);
exports.OutgoingApiCallLog = OutgoingApiCallLog;
//# sourceMappingURL=outgoing-api-call-log.model.js.map