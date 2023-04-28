"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppFilesReporting = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const base_es_model_model_1 = require("../base-es-model.model");
let AppFilesReporting = class AppFilesReporting extends base_es_model_model_1.BaseESModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AppFilesReporting.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AppFilesReporting.prototype, "appFileId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        es: { type: 'date' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AppFilesReporting.prototype, "uploadDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AppFilesReporting.prototype, "path", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AppFilesReporting.prototype, "containerName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AppFilesReporting.prototype, "checksum", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AppFilesReporting.prototype, "originalFileName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AppFilesReporting.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        es: { type: 'double' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AppFilesReporting.prototype, "size", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AppFilesReporting.prototype, "extension", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AppFilesReporting.prototype, "mimeType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AppFilesReporting.prototype, "accountId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AppFilesReporting.prototype, "accountName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AppFilesReporting.prototype, "accountUniqueId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AppFilesReporting.prototype, "accountNumbers", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        isPseudonym: true,
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AppFilesReporting.prototype, "appUserName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AppFilesReporting.prototype, "appUserId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AppFilesReporting.prototype, "appUserCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AppFilesReporting.prototype, "appUserEmail", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AppFilesReporting.prototype, "bankAccountId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        isPseudonym: true,
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AppFilesReporting.prototype, "bankAccountName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AppFilesReporting.prototype, "bankAccountNumber", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AppFilesReporting.prototype, "bankName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AppFilesReporting.prototype, "orderId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: true,
        es: { type: 'date' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AppFilesReporting.prototype, "orderDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AppFilesReporting.prototype, "bankBranchIfscCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AppFilesReporting.prototype, "serviceRequestDocumentType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AppFilesReporting.prototype, "serviceRequestDocumentComment", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AppFilesReporting.prototype, "bankAccountComment", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        es: { type: 'long' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AppFilesReporting.prototype, "bankAccountCommentedByUserId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AppFilesReporting.prototype, "bankAccountCommentedByUserName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        es: { type: 'text', fields: { keyword: { type: 'keyword', ignore_above: 256 } } }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AppFilesReporting.prototype, "rtaName", void 0);
AppFilesReporting = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            plural: 'AppFilesReportings',
            indexes: {},
            elasticsearch: { index: 'appfilesreporting', type: 'appfile' },
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], AppFilesReporting);
exports.AppFilesReporting = AppFilesReporting;
//# sourceMappingURL=app-files-reporting.model.js.map