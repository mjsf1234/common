"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentConfirmationFeedLog = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let PaymentConfirmationFeedLog = class PaymentConfirmationFeedLog extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'name', dataType: 'VARCHAR', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PaymentConfirmationFeedLog.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: false,
        optionLabelIdentifier: 'UTR_FILE_UPLOAD_STATUS',
        postgresql: { columnName: 'status', dataType: 'SMALLINT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PaymentConfirmationFeedLog.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'row_count', dataType: 'INT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PaymentConfirmationFeedLog.prototype, "rowCount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'generated_date', dataType: 'DATE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], PaymentConfirmationFeedLog.prototype, "generatedDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'uploaded_date', dataType: 'DATE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], PaymentConfirmationFeedLog.prototype, "uploadedDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'success_count', dataType: 'INT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PaymentConfirmationFeedLog.prototype, "successCount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'failure_count', dataType: 'INT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PaymentConfirmationFeedLog.prototype, "failureCount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.ServiceProvider, {
        name: 'serviceProvider',
        keyFrom: 'serviceProviderId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_service_provider', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PaymentConfirmationFeedLog.prototype, "serviceProviderId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.OrderExecutionAppFile, {
        name: 'orderExecutionAppFile',
        keyFrom: 'orderExecutionAppFileId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_order_execution_app_file', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PaymentConfirmationFeedLog.prototype, "orderExecutionAppFileId", void 0);
PaymentConfirmationFeedLog = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'payment_confirmation_feed_log' },
            plural: 'PaymentConfirmationFeedLogs',
            // foreignKeys: {
            //   fkidx_payment_confirmation_feed_log_fk_id_user: {
            //     name: 'fkidx_payment_confirmation_feed_log_fk_id_user',
            //     foreignKey: 'fk_id_app_file',
            //     entityKey: 'id',
            //     entity: 'AppFile'
            //   },
            //   fkidx_payment_confirmation_feed_log_fk_id_service_provider: {
            //     name: 'fkidx_payment_confirmation_feed_log_fk_id_service_provider',
            //     foreignKey: 'fk_id_service_provider',
            //     entityKey: 'id',
            //     entity: 'ServiceProvider'
            //   },
            //   fkidx_payment_confirmation_feed_log_fk_id_order_execution_app_file: {
            //     name: 'fkidx_payment_confirmation_feed_log_fk_id_order_execution_app_file',
            //     foreignKey: 'fk_id_order_execution_app_file',
            //     entityKey: 'id',
            //     entity: 'OrderExecutionAppFile'
            //   }
            // },
            hiddenProperties: ['fk_id_order_execution_app_file', 'fk_id_service_provider']
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], PaymentConfirmationFeedLog);
exports.PaymentConfirmationFeedLog = PaymentConfirmationFeedLog;
//# sourceMappingURL=payment-confirmation-feed-log.model.js.map