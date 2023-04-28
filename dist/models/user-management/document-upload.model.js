"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentUpload = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
//@todo - Ketan - check the use of this table
let DocumentUpload = class DocumentUpload extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'reference_number', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentUpload.prototype, "referenceNumber", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'issue_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], DocumentUpload.prototype, "issueDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'expiry_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], DocumentUpload.prototype, "expiryDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        default: 1,
        optionLabelIdentifier: 'CUSTOMERDOCUMENTTYPE',
        postgresql: { columnName: 'document_type', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DocumentUpload.prototype, "documentType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number'
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DocumentUpload.prototype, "fk_id_user", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number'
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DocumentUpload.prototype, "fk_id_account", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number'
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DocumentUpload.prototype, "fk_id_bank_account", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number'
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DocumentUpload.prototype, "fk_id_file", void 0);
DocumentUpload = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'document_upload' },
            plural: 'DocumentUploads',
            foreignKeys: {
                fkidx_document_upload_user_fk_id_user: {
                    name: 'fkidx_document_upload_user_fk_id_user',
                    foreignKey: 'fk_id_user',
                    entityKey: 'id',
                    entity: 'AppUser'
                },
                fkidx_document_upload_bank_account_fk_id_bank_account: {
                    name: 'fkidx_document_upload_bank_account_fk_id_bank_account',
                    foreignKey: 'fk_id_bank_account',
                    entityKey: 'id',
                    entity: 'BankAccount'
                },
                fkidx_document_upload_account_fk_id_account: {
                    name: 'fkidx_document_upload_account_fk_id_account',
                    foreignKey: 'fk_id_account',
                    entityKey: 'id',
                    entity: 'Account'
                },
                fkidx_document_upload_app_file_fk_id_app_file: {
                    name: 'fkidx_document_upload_app_file_fk_id_app_file',
                    foreignKey: 'fk_id_file',
                    entityKey: 'id',
                    entity: 'AppFile'
                }
            },
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], DocumentUpload);
exports.DocumentUpload = DocumentUpload;
//# sourceMappingURL=document-upload.model.js.map