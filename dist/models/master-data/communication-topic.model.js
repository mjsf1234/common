"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunicationTopic = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let CommunicationTopic = class CommunicationTopic extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        id: 1,
        generated: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CommunicationTopic.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'topic', dataType: 'VARCHAR', dataLength: 256, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CommunicationTopic.prototype, "topic", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'category', dataType: 'TEXT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CommunicationTopic.prototype, "category", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'sub_category', dataType: 'TEXT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CommunicationTopic.prototype, "subCategory", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'email_template', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CommunicationTopic.prototype, "emailTemplate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'sms_template', dataType: 'TEXT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CommunicationTopic.prototype, "smsTemplate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'push_notification_template', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CommunicationTopic.prototype, "pushNotificationTemplate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'description', dataType: 'TEXT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CommunicationTopic.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        postgresql: { columnName: 'mode_email', dataType: 'BOOLEAN', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CommunicationTopic.prototype, "modeEmail", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        postgresql: { columnName: 'mode_sms', dataType: 'BOOLEAN', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CommunicationTopic.prototype, "modeSms", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        postgresql: { columnName: 'mode_push', dataType: 'BOOLEAN', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CommunicationTopic.prototype, "modePush", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        postgresql: { columnName: 'toggle_notification', dataType: 'BOOLEAN', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CommunicationTopic.prototype, "toggleNotification", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'temp_id', dataType: 'VARCHAR', dataLength: 25, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CommunicationTopic.prototype, "tempId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => __1.CommunicationMatrix, { keyTo: 'communicationTopicId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], CommunicationTopic.prototype, "communicationMatrix", void 0);
CommunicationTopic = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            forceId: false,
            indexes: {
                idx_is_active: { keys: { is_active: 1 }, options: { unique: false } },
                idx_created_date: { keys: { created_date: 1 }, options: { unique: false } },
                idx_last_modified_date: { keys: { last_modified_date: 1 }, options: { unique: false } }
            },
            postgresql: { tableName: 'communication_topic' },
            plural: 'CommunicationTopics',
            foreignKeys: {},
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], CommunicationTopic);
exports.CommunicationTopic = CommunicationTopic;
//# sourceMappingURL=communication-topic.model.js.map