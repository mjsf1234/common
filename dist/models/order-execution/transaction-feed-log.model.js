"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionFeedLog = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
const order_item_model_1 = require("./order-item.model");
let TransactionFeedLog = class TransactionFeedLog extends __1.BaseDataDumpModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        postgresql: { columnName: 'row_count', dataType: 'INT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], TransactionFeedLog.prototype, "rowCount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'TRANSACTIONFEEDSTATUS',
        required: true,
        postgresql: { columnName: 'status', dataType: 'SMALLINT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], TransactionFeedLog.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: true,
        postgresql: { columnName: 'generated_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], TransactionFeedLog.prototype, "generatedDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: true,
        postgresql: { columnName: 'uploaded_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], TransactionFeedLog.prototype, "uploadedDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        postgresql: { columnName: 'success_count', dataType: 'INT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], TransactionFeedLog.prototype, "successCount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        postgresql: { columnName: 'failure_count', dataType: 'INT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], TransactionFeedLog.prototype, "failureCount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'remarks', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TransactionFeedLog.prototype, "remarks", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.OrderExecutionAppFile, {
        name: 'txnFeedFile',
        keyFrom: 'txnFeedFileId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_txn_feed_file', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], TransactionFeedLog.prototype, "txnFeedFileId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Rta, {
        name: 'rta',
        keyFrom: 'rtaId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_rta', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], TransactionFeedLog.prototype, "rtaId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => order_item_model_1.OrderItem, { keyTo: 'txnFeedLogId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], TransactionFeedLog.prototype, "orderItems", void 0);
TransactionFeedLog = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            indexes: {
                idx_is_active: { keys: { is_active: 1 }, options: { unique: false } },
                idx_created_date: { keys: { created_date: 1 }, options: { unique: false } },
                idx_last_modified_date: { keys: { last_modified_date: 1 }, options: { unique: false } }
            },
            plural: 'TransactionFeedLogs',
            postgresql: { tableName: 'transaction_feed_log' },
            foreignKeys: {
                fkidx_txn_feed_log_app_file_fk_id_app_file: {
                    name: 'fkidx_txn_feed_log_app_file_fk_id_app_file',
                    foreignKey: 'fk_id_app_file',
                    entityKey: 'id',
                    entity: 'AppFile'
                },
                fkidx_txn_feed_log_rta_fk_id_rta: {
                    name: 'fkidx_txn_feed_log_rta_fk_id_rta',
                    foreignKey: 'fk_id_rta',
                    entityKey: 'id',
                    entity: 'RTA'
                }
            },
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], TransactionFeedLog);
exports.TransactionFeedLog = TransactionFeedLog;
//# sourceMappingURL=transaction-feed-log.model.js.map