"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsrFatca = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let CsrFatca = class CsrFatca extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'status', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CsrFatca.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'remarks', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CsrFatca.prototype, "remarks", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'uploaded_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], CsrFatca.prototype, "uploadedDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'generated_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], CsrFatca.prototype, "generatedDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Account, {
        name: 'account',
        keyFrom: 'accountId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_account', dataType: 'INT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CsrFatca.prototype, "accountId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.UserManagementAppFile, {
        name: 'userManagementAppFile',
        keyFrom: 'userManagementAppFileId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_fatca_doc_file', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CsrFatca.prototype, "userManagementAppFileId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Rta, {
        name: 'rta',
        keyFrom: 'rtaId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_rta', dataType: 'INT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CsrFatca.prototype, "rtaId", void 0);
CsrFatca = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            indexes: {},
            postgresql: { tableName: 'csr_fatca' },
            plural: 'CsrFatcas',
            foreignKeys: {
                fkidx_csr_fatca_account_fk_id_account: {
                    name: 'fkidx_csr_fatca_account_fk_id_account',
                    foreignKey: 'fk_id_account',
                    entityKey: 'id',
                    entity: 'Account'
                },
                fkidx_csr_fatca_app_file_fk_id_fatca_doc_file: {
                    name: 'fkidx_csr_fatca_app_file_fk_id_fatca_doc_file',
                    foreignKey: 'fk_id_fatca_doc_file',
                    entityKey: 'id',
                    entity: 'UserManagementAppFile'
                },
                fkidx_csr_fatca_rta_fk_id_rta: {
                    name: 'fkidx_csr_fatca_rta_fk_id_rta',
                    foreignKey: 'fk_id_rta',
                    entityKey: 'id',
                    entity: 'Rta'
                }
            },
            hiddenProperties: ['fk_id_account', 'fk_id_fatca_doc_file', 'fk_id_rta']
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], CsrFatca);
exports.CsrFatca = CsrFatca;
//# sourceMappingURL=csr-fatca.model.js.map