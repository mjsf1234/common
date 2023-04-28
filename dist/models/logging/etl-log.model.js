"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EtlLog = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let EtlLog = class EtlLog extends __1.BaseDataDumpModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        postgresql: { columnName: 'row_number', dataType: 'INT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], EtlLog.prototype, "rowNumber", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'error_code', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EtlLog.prototype, "errorCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'error_message', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EtlLog.prototype, "errorMessage", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        required: false,
        postgresql: { columnName: 'log_gen_time', dataType: 'TIMESTAMP', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], EtlLog.prototype, "logGenTime", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.BulkUpload, {
        name: 'bulkUpload',
        keyFrom: 'bulkUploadId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_bulk_upload', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], EtlLog.prototype, "bulkUploadId", void 0);
EtlLog = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'etl_log' },
            plural: 'EtlLogs',
            foreignKeys: {
                fkidx_etl_log_fk_id_bulk_upload: {
                    name: 'fkidx_etl_log_fk_id_bulk_upload',
                    foreignKey: 'fk_id_bulk_upload',
                    entityKey: 'id',
                    entity: 'BulkUpload'
                }
            },
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], EtlLog);
exports.EtlLog = EtlLog;
//# sourceMappingURL=etl-log.model.js.map