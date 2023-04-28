"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManagementAppFile = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
const __2 = require("..");
const service_request_document_model_1 = require("./service-request-document.model");
const _1 = require(".");
let UserManagementAppFile = class UserManagementAppFile extends __2.BaseAppFileModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.hasOne)(() => __1.InvestorDetails, { keyTo: 'signatureImageFileId' }),
    (0, tslib_1.__metadata)("design:type", __1.InvestorDetails)
], UserManagementAppFile.prototype, "investorDetailsForSignature", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasOne)(() => service_request_document_model_1.ServiceRequestDocument, { keyTo: 'appFileId' }),
    (0, tslib_1.__metadata)("design:type", service_request_document_model_1.ServiceRequestDocument)
], UserManagementAppFile.prototype, "serviceRequestDocument", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasOne)(() => _1.BankAccount, { keyTo: 'chequeImageFileId' }),
    (0, tslib_1.__metadata)("design:type", _1.BankAccount)
], UserManagementAppFile.prototype, "bankAccount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasOne)(() => _1.CsrFatca, { keyTo: 'userManagementappFileId' }),
    (0, tslib_1.__metadata)("design:type", _1.CsrFatca)
], UserManagementAppFile.prototype, "csrFatca", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasOne)(() => _1.AccountAppFileMapping, { keyTo: 'appFileId' }),
    (0, tslib_1.__metadata)("design:type", _1.AccountAppFileMapping)
], UserManagementAppFile.prototype, "accountAppFileMapping", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasOne)(() => _1.InstrumentsExportFile, { keyTo: 'userManagementAppFileId' }),
    (0, tslib_1.__metadata)("design:type", _1.InstrumentsExportFile)
], UserManagementAppFile.prototype, "instrumentsExportFile", void 0);
UserManagementAppFile = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'user_management_file' },
            plural: 'UserManagementAppFiles'
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], UserManagementAppFile);
exports.UserManagementAppFile = UserManagementAppFile;
//# sourceMappingURL=user-management-app-file.model.js.map