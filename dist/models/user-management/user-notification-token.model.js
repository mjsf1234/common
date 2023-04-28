"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserNotificationToken = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let UserNotificationToken = class UserNotificationToken extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'object',
        default: {},
        postgresql: { columnName: 'config', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], UserNotificationToken.prototype, "config", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.AppUser, {
        name: 'appUser',
        keyFrom: 'appUserId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_user', dataType: 'INT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], UserNotificationToken.prototype, "appUserId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        isPseudonym: true,
        postgresql: { columnName: 'registration_token', dataType: 'VARCHAR', dataLength: 255, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserNotificationToken.prototype, "registrationToken", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
        postgresql: { columnName: 'device_name', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserNotificationToken.prototype, "deviceName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
        postgresql: { columnName: 'os_name', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserNotificationToken.prototype, "osName", void 0);
UserNotificationToken = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'user_notification_token' },
            plural: 'UserNotificationTokens',
            foreignKeys: {
                fkidx_user_notification_token_fk_id_app_user: {
                    name: 'fkidx_user_notification_token_fk_id_app_user',
                    foreignKey: 'fk_id_user',
                    entityKey: 'id',
                    entity: 'AppUser'
                }
            },
            indexes: {
                idx_registration_token: { keys: { registration_token: 1 }, options: { unique: true } },
            }
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], UserNotificationToken);
exports.UserNotificationToken = UserNotificationToken;
//# sourceMappingURL=user-notification-token.model.js.map