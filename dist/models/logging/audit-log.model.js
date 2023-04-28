"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditLog = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let AuditLog = class AuditLog extends __1.BaseDataDumpModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'model_name', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AuditLog.prototype, "modelName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        postgresql: { columnName: 'model_id', dataType: 'INT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AuditLog.prototype, "modelId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'object',
        isPseudonym: true,
        default: {},
        postgresql: { columnName: 'object_before_change', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], AuditLog.prototype, "objectBeforeChange", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'object',
        isPseudonym: true,
        default: {},
        postgresql: { columnName: 'object_after_change', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], AuditLog.prototype, "objectAfterChange", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'object',
        isPseudonym: true,
        default: {},
        postgresql: { columnName: 'difference', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], AuditLog.prototype, "difference", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'transaction_id', dataType: 'VARCHAR', dataLength: 255, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AuditLog.prototype, "transactionId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
        postgresql: { columnName: 'ip_address', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AuditLog.prototype, "ipAddress", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
        postgresql: { columnName: 'host_name', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AuditLog.prototype, "hostName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        required: false,
        postgresql: { columnName: 'log_gen_time', dataType: 'TIMESTAMP', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AuditLog.prototype, "logGenTime", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.AppUser, {
        name: 'changedByAppUser',
        keyFrom: 'changedByAppUserId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_changed_by_app_user', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AuditLog.prototype, "changedByAppUserId", void 0);
AuditLog = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            indexes: {
                idx_is_active: { keys: { is_active: 1 }, options: { unique: false } },
                idx_created_date: { keys: { created_date: 1 }, options: { unique: false } },
                idx_last_modified_date: { keys: { last_modified_date: 1 }, options: { unique: false } },
                idx_model_name: { keys: { model_name: 1 }, options: { unique: false } },
                idx_model_id: { keys: { model_id: 1 }, options: { unique: false } },
                idx_transaction_id: { keys: { transaction_id: 1 }, options: { unique: false } },
                idx_audit_log_model_name_model_id: { keys: { model_name: 1, model_id: 2 }, options: { unique: false } }
            },
            postgresql: { tableName: 'audit_log' },
            plural: 'AuditLogs',
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], AuditLog);
exports.AuditLog = AuditLog;
//# sourceMappingURL=audit-log.model.js.map