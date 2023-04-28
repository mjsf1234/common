"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditTrail = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
const service_provider_account_model_1 = require("../transaction/service-provider-account.model");
let AuditTrail = class AuditTrail extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'old_registered_email', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AuditTrail.prototype, "oldRegisteredEmail", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'new_registered_email', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AuditTrail.prototype, "newRegisteredEmail", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'old_registered_mobile', dataType: 'NUMERIC', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AuditTrail.prototype, "oldRegisteredMobileNo", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'new_registered_mobile', dataType: 'NUMERIC', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AuditTrail.prototype, "newRegisteredMobileNo", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'remark', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AuditTrail.prototype, "remark", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => service_provider_account_model_1.ServiceProviderAccount, {
        name: 'serviceProviderAccount',
        keyFrom: 'serviceProviderAccountId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_serviceprovideraccountid', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AuditTrail.prototype, "serviceProviderAccountId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.AccountAppFileMapping, {
        name: 'accountAppFileMapping',
        keyFrom: 'accountAppFileMappingId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_accountappfilemappingid', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AuditTrail.prototype, "accountAppFileMappingId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.AuditTrailFile, {
        name: 'auditTrailFile',
        keyFrom: 'auditTrailFileId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_audit_trail_file', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AuditTrail.prototype, "auditTrailFileId", void 0);
AuditTrail = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'rta_audit_trail' },
            plural: 'RtaAuditTrails',
            foreignKeys: {
                fkidx_audit_rail_service_provider_id: {
                    name: 'fkidx_audit_rail_service_provider_id',
                    foreignKey: 'fk_id_serviceprovideraccountid',
                    entityKey: 'id',
                    entity: 'ServiceProviderAccount'
                },
                fkidx_audit_rail_accountappfilemappingid: {
                    name: 'fkidx_audit_rail_accountappfilemappingid',
                    foreignKey: 'fk_id_accountappfilemappingid',
                    entityKey: 'id',
                    entity: 'AccountAppFileMapping'
                },
                fkidx_audit_rail_fk_id_audit_rail_file: {
                    name: 'fkidx_audit_rail_fk_id_audit_rail_file',
                    foreignKey: 'fk_id_audit_trail_file',
                    entityKey: 'id',
                    entity: 'AuditTrailFile'
                }
            },
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], AuditTrail);
exports.AuditTrail = AuditTrail;
//# sourceMappingURL=audit-rail.js.map