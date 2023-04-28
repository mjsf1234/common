"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulkUpload = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let BulkUpload = class BulkUpload extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        postgresql: { columnName: 'type', dataType: 'SMALLINT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BulkUpload.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        postgresql: { columnName: 'status', dataType: 'SMALLINT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BulkUpload.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'object',
        default: {},
        postgresql: { columnName: 'extra', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], BulkUpload.prototype, "extra", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.MasterDataAppFile, {
        name: 'masterDataAppFile',
        keyFrom: 'masterDataAppFileId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_file', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BulkUpload.prototype, "masterDataAppFileId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.AppUser, {
        name: 'appUser',
        keyFrom: 'appUserId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_user', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BulkUpload.prototype, "appUserId", void 0);
BulkUpload = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            plurals: 'BulkUploads',
            postgresql: { tableName: 'bulk_upload' },
            foreignKeys: {
                fkidx_bulk_upload_file_fk_id_file: {
                    name: 'fkidx_bulk_upload_file_fk_id_file',
                    foreignKey: 'fk_id_file',
                    entityKey: 'id',
                    entity: 'AppFile'
                },
                fkidx_bulk_upload_user_fk_id_user: {
                    name: 'fkidx_bulk_upload_user_fk_id_user',
                    foreignKey: 'fk_id_user',
                    entityKey: 'id',
                    entity: 'AppUser'
                }
            }
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], BulkUpload);
exports.BulkUpload = BulkUpload;
//# sourceMappingURL=bulk-upload.model.js.map