"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationLog = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let NotificationLog = class NotificationLog extends __1.BaseDataDumpModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'subject', dataType: 'VARCHAR', dataLength: 255, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], NotificationLog.prototype, "subject", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'object',
        postgresql: { columnName: 'content', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], NotificationLog.prototype, "content", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'NOTIFICATIONMEDIUMTYPE',
        postgresql: { columnName: 'medium_type', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], NotificationLog.prototype, "mediumType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'medium_address', dataType: 'VARCHAR', dataLength: 512, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], NotificationLog.prototype, "mediumAddress", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'object',
        postgresql: { columnName: 'provider_log', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], NotificationLog.prototype, "providerLog", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        required: false,
        postgresql: { columnName: 'log_gen_time', dataType: 'TIMESTAMP', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], NotificationLog.prototype, "logGenTime", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.AppUser, {
        name: 'appUser',
        keyFrom: 'appUserId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_user', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], NotificationLog.prototype, "appUserId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Device, {
        name: 'device',
        keyFrom: 'deviceId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_device', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], NotificationLog.prototype, "deviceId", void 0);
NotificationLog = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'notification_log' },
            plural: 'NotificationLogs',
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], NotificationLog);
exports.NotificationLog = NotificationLog;
//# sourceMappingURL=notification-log.model.js.map