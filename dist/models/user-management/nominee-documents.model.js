"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NomineeDocument = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
//@todo - Ketan - check the use of this table
let NomineeDocument = class NomineeDocument extends __1.BaseSQLModel {
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
], NomineeDocument.prototype, "generatedDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'upload_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], NomineeDocument.prototype, "uploadDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        default: 1,
        optionLabelIdentifier: 'NOMINEEDOCUMENTSTATUS',
        postgresql: { columnName: 'status', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], NomineeDocument.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
        postgresql: { columnName: 'remarks', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], NomineeDocument.prototype, "remarks", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
        postgresql: { columnName: 'aof_file_name', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], NomineeDocument.prototype, "aofFileName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.ServiceProvider, {
        name: 'serviceProvider',
        keyFrom: 'serviceProviderId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_service_provider', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], NomineeDocument.prototype, "serviceProviderId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Account, {
        name: 'account',
        keyFrom: 'accountId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_account', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], NomineeDocument.prototype, "accountId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.UserManagementAppFile, {
        name: 'appFile',
        keyFrom: 'appFileId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_file', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], NomineeDocument.prototype, "appFileId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Rta, {
        name: 'rta',
        keyFrom: 'rtaId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_rta', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], NomineeDocument.prototype, "rtaId", void 0);
NomineeDocument = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'nominee_document' },
            plural: 'NomineeDocuments',
            foreignKeys: {
                fkidx_nominee_document_fk_id_service_provider: {
                    name: 'fkidx_nominee_document_fk_id_service_provider',
                    foreignKey: 'fk_id_service_provider',
                    entityKey: 'id',
                    entity: 'ServiceProvider'
                },
                fkidx_nominee_document_account_fk_id_account: {
                    name: 'fkidx_nominee_document_account_fk_id_account',
                    foreignKey: 'fk_id_account',
                    entityKey: 'id',
                    entity: 'Account'
                },
                fkidx_nominee_document_app_file_fk_id_app_file: {
                    name: 'fkidx_nominee_document_app_file_fk_id_app_file',
                    foreignKey: 'fk_id_file',
                    entityKey: 'id',
                    entity: 'AppFile'
                },
                fkidx_nominee_document_rta_fk_id_rta: {
                    name: 'fkidx_nominee_document_rta_fk_id_rta',
                    foreignKey: 'fk_id_rta',
                    entityKey: 'id',
                    entity: 'RTA'
                }
            },
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], NomineeDocument);
exports.NomineeDocument = NomineeDocument;
//# sourceMappingURL=nominee-documents.model.js.map