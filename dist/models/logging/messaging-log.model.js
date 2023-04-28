"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagingLog = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let MessagingLog = class MessagingLog extends __1.BaseDataDumpModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'queue_name', dataType: 'VARCHAR', dataLength: 512, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MessagingLog.prototype, "queueName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'queue_message_id', dataType: 'VARCHAR', dataLength: 512, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MessagingLog.prototype, "queueMessageId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'object',
        required: true,
        postgresql: { columnName: 'message_body', dataType: 'TEXT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], MessagingLog.prototype, "messageBody", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: true,
        postgresql: { columnName: 'message_published_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], MessagingLog.prototype, "messagePublishedDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'message_consumed_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], MessagingLog.prototype, "messageConsumedDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'message_processed_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], MessagingLog.prototype, "messageProcessedDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        required: false,
        postgresql: { columnName: 'log_gen_time', dataType: 'TIMESTAMP', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], MessagingLog.prototype, "logGenTime", void 0);
MessagingLog = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            indexes: {
                idx_is_active: { keys: { is_active: 1 }, options: { unique: false } },
                idx_created_date: { keys: { created_date: 1 }, options: { unique: false } },
                idx_last_modified_date: { keys: { last_modified_date: 1 }, options: { unique: false } },
                idx_queue_name_queue_message_id: { keys: { queue_name: 1, queue_message_id: 1 }, options: { unique: false } }
            },
            postgresql: { tableName: 'messaging_log' },
            plural: 'MessagingLogs',
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], MessagingLog);
exports.MessagingLog = MessagingLog;
//# sourceMappingURL=messaging-log.model.js.map