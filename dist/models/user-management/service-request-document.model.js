"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRequestDocument = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
const account_model_1 = require("./account.model");
const user_management_app_file_model_1 = require("./user-management-app-file.model");
let ServiceRequestDocument = class ServiceRequestDocument extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        isPseudonym: true,
        postgresql: { columnName: 'comment', dataType: 'TEXT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ServiceRequestDocument.prototype, "comment", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'SERVICEREQUESTDOCUMENTTYPE',
        postgresql: { columnName: 'type', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ServiceRequestDocument.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => account_model_1.Account, {
        name: 'account',
        keyFrom: 'accountId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_account', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ServiceRequestDocument.prototype, "accountId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => user_management_app_file_model_1.UserManagementAppFile, {
        name: 'userManagementAppFile',
        keyFrom: 'userManagementAppFileId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_file', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ServiceRequestDocument.prototype, "userManagementAppFileId", void 0);
ServiceRequestDocument = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'service_request_document' },
            plural: 'ServiceRequestDocuments',
            foreignKeys: {
                fkidx_service_request_document_fk_id_account: {
                    name: 'fkidx_service_request_document_fk_id_account',
                    foreignKey: 'fk_id_account',
                    entityKey: 'id',
                    entity: 'Account'
                },
                fkidx_service_request_document_fk_id_file: {
                    name: 'fkidx_service_request_document_fk_id_file',
                    foreignKey: 'fk_id_file',
                    entityKey: 'id',
                    entity: 'AppFile'
                }
            },
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], ServiceRequestDocument);
exports.ServiceRequestDocument = ServiceRequestDocument;
//# sourceMappingURL=service-request-document.model.js.map