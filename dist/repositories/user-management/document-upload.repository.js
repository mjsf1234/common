"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentUploadRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class DocumentUploadRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.DocumentUpload, dataSource);
    }
}
exports.DocumentUploadRepository = DocumentUploadRepository;
//# sourceMappingURL=document-upload.repository.js.map