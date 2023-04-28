"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsolidatedDocument = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
//@todo - Ketan - check the use of this table
let ConsolidatedDocument = class ConsolidatedDocument extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'generated_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], ConsolidatedDocument.prototype, "generatedDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'upload_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], ConsolidatedDocument.prototype, "uploadDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        default: 1,
        optionLabelIdentifier: 'CONSOLIDATEDDOCUMENTSTATUS',
        postgresql: { columnName: 'status', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ConsolidatedDocument.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
        postgresql: { columnName: 'remarks', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ConsolidatedDocument.prototype, "remarks", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.AppUser, {
        name: 'appUser',
        keyFrom: 'appUserId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_user', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ConsolidatedDocument.prototype, "appUserId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Account, {
        name: 'account',
        keyFrom: 'accountId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_account', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ConsolidatedDocument.prototype, "accountId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.BankAccount, {
        name: 'bankAccount',
        keyFrom: 'bankAccountId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_bank_account', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ConsolidatedDocument.prototype, "bankAccountId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.UserManagementAppFile, {
        name: 'appFile',
        keyFrom: 'appFileId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_file', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ConsolidatedDocument.prototype, "appFileId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Rta, {
        name: 'rta',
        keyFrom: 'rtaId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_rta', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ConsolidatedDocument.prototype, "rtaId", void 0);
ConsolidatedDocument = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'consolidated_document' },
            plural: 'ConsolidatedDocuments',
            foreignKeys: {
                fkidx_consolidated_document_user_fk_id_user: {
                    name: 'fkidx_consolidated_document_user_fk_id_user',
                    foreignKey: 'fk_id_user',
                    entityKey: 'id',
                    entity: 'AppUser'
                },
                fkidx_consolidated_document_bank_account_fk_id_bank_account: {
                    name: 'fkidx_consolidated_document_bank_account_fk_id_bank_account',
                    foreignKey: 'fk_id_bank_account',
                    entityKey: 'id',
                    entity: 'BankAccount'
                },
                fkidx_consolidated_document_account_fk_id_account: {
                    name: 'fkidx_consolidated_document_account_fk_id_account',
                    foreignKey: 'fk_id_account',
                    entityKey: 'id',
                    entity: 'Account'
                },
                fkidx_consolidated_document_app_file_fk_id_app_file: {
                    name: 'fkidx_consolidated_document_app_file_fk_id_app_file',
                    foreignKey: 'fk_id_file',
                    entityKey: 'id',
                    entity: 'AppFile'
                },
                fkidx_consolidated_document_rta_fk_id_rta: {
                    name: 'fkidx_consolidated_document_rta_fk_id_rta',
                    foreignKey: 'fk_id_rta',
                    entityKey: 'id',
                    entity: 'RTA'
                }
            },
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], ConsolidatedDocument);
exports.ConsolidatedDocument = ConsolidatedDocument;
//# sourceMappingURL=consolidated-document.model.js.map