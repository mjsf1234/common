"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppUserNotification = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
const app_user_model_1 = require("./app-user.model");
let AppUserNotification = class AppUserNotification extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        default: true,
        postgresql: { columnName: 'transaction_sms', dataType: 'BOOLEAN', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AppUserNotification.prototype, "transactionSms", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        default: true,
        postgresql: { columnName: 'transaction_email', dataType: 'BOOLEAN', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AppUserNotification.prototype, "transactionEmail", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        default: true,
        postgresql: { columnName: 'transaction_pushnotification', dataType: 'BOOLEAN', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AppUserNotification.prototype, "transactionPushnotification", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: true,
        default: true,
        postgresql: { columnName: 'upcoming_payments_sms', dataType: 'BOOLEAN', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AppUserNotification.prototype, "upcomingPaymentsSms", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        default: true,
        postgresql: { columnName: 'upcoming_payments_email', dataType: 'BOOLEAN', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AppUserNotification.prototype, "upcomingPaymentsEmail", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        default: true,
        postgresql: { columnName: 'upcoming_payments_pushnotification', dataType: 'BOOLEAN', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AppUserNotification.prototype, "upcomingPaymentsPushnotification", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        default: true,
        postgresql: { columnName: 'rebalance_sms', dataType: 'BOOLEAN', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AppUserNotification.prototype, "rebalanceSms", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        default: true,
        postgresql: { columnName: 'rebalance_email', dataType: 'BOOLEAN', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AppUserNotification.prototype, "rebalanceEmail", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: true,
        default: true,
        postgresql: { columnName: 'rebalance_pushnotification', dataType: 'BOOLEAN', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AppUserNotification.prototype, "rebalancePushnotification", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => app_user_model_1.AppUser, {
        name: 'appUser',
        keyFrom: 'appUserId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_user', dataType: 'INT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AppUserNotification.prototype, "appUserId", void 0);
AppUserNotification = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            indexes: {
                idx_is_active: { keys: { is_active: 1 }, options: { unique: false } },
                idx_created_date: { keys: { created_date: 1 }, options: { unique: false } },
                idx_last_modified_date: { keys: { last_modified_date: 1 }, options: { unique: false } },
                isx_user_id: { keys: { appUserId: 1 }, options: { unique: true } }
            },
            postgresql: { tableName: 'user_notification' },
            plural: 'AppUserNotifications',
            foreignKeys: {
                fkidx_user_notification_app_user_fk_id_family: {
                    name: 'fkidx_user_notification_app_user_fk_id_family',
                    foreignKey: 'fk_id_user',
                    entityKey: 'id',
                    entity: 'AppUser'
                }
            },
            hiddenProperties: ['password', 'oneTimePassword', 'passwordExpiry', 'loginRetryCount', 'otp', 'otp_expiry', 'mpin']
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], AppUserNotification);
exports.AppUserNotification = AppUserNotification;
//# sourceMappingURL=app-user-notification-mapping.model.js.map