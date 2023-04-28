"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditTrailFile = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
const audit_rail_1 = require("./audit-rail");
let AuditTrailFile = class AuditTrailFile extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'name', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AuditTrailFile.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'remarks', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AuditTrailFile.prototype, "remarks", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        default: 1,
        optionLabelIdentifier: 'AUDITTRAILSTATUS',
        postgresql: { columnName: 'status', dataType: 'SMALLINT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AuditTrailFile.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Rta, {
        name: 'rta',
        keyFrom: 'rtaId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_rta', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AuditTrailFile.prototype, "rtaId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.AppUser, {
        name: 'uploadedByAppUser',
        keyFrom: 'uploadedByAppUserId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_uploaded_by_user', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AuditTrailFile.prototype, "uploadedByAppUserId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.UserManagementAppFile, {
        name: 'uploadedFile',
        keyFrom: 'uploadedFileId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_uploaded_file', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AuditTrailFile.prototype, "uploadedFileId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.UserManagementAppFile, {
        name: 'exportedFile',
        keyFrom: 'exportedFileId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_exported_file', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AuditTrailFile.prototype, "exportedFileId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.AppUser, {
        name: 'deletedByAppUser',
        keyFrom: 'deletedByAppUserId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_user_deleted_by', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AuditTrailFile.prototype, "deletedByAppUserId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => audit_rail_1.AuditTrail, { keyTo: 'auditTrailFileId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], AuditTrailFile.prototype, "auditTrail", void 0);
AuditTrailFile = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'audit_trail_file' },
            plural: 'audit_trail_files',
            foreignKeys: {
                fkidx_audit_trail_file_rta_fk_id_rta: {
                    name: 'fkidx_audit_trail_file_rta_fk_id_rta',
                    foreignKey: 'fk_id_rta',
                    entityKey: 'id',
                    entity: 'Rta'
                },
                fkidx_audit_trail_file_user_fk_id_uploaded_by_user: {
                    name: 'fkidx_audit_trail_file_user_fk_id_uploaded_by_user',
                    foreignKey: 'fk_id_uploaded_by_user',
                    entityKey: 'id',
                    entity: 'AppUser'
                },
                // fkidx_audit_trail_file_file_fk_id_file: {
                //   name: 'fkidx_audit_trail_file_file_fk_id_file',
                //   foreignKey: 'fk_id_file',
                //   entityKey: 'id',
                //   entity: 'AppFile'
                // },
                fkidx_audit_trail_file_app_user_fk_id_user_deleted_by: {
                    name: 'fkidx_audit_trail_file_app_user_fk_id_user_deleted_by',
                    foreignKey: 'fk_id_user_deleted_by',
                    entityKey: 'id',
                    entity: 'AppUser'
                },
                fkidx_audit_trail_file_fk_id_uploaded_file: {
                    name: 'fkidx_audit_trail_file_fk_id_uploaded_file',
                    foreignKey: 'fk_id_uploaded_file',
                    entityKey: 'id',
                    entity: 'UserManagementAppFile'
                },
                fkidx_audit_trail_file_fk_id_exported_file: {
                    name: 'fkidx_audit_trail_file_fk_id_exported_file',
                    foreignKey: 'fk_id_exported_file',
                    entityKey: 'id',
                    entity: 'UserManagementAppFile'
                },
            },
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], AuditTrailFile);
exports.AuditTrailFile = AuditTrailFile;
//# sourceMappingURL=audit-trail-file.js.map