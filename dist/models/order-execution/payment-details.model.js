"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentDetails = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
const order_item_model_1 = require("./order-item.model");
let PaymentDetails = class PaymentDetails extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'gateway_reference_number', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PaymentDetails.prototype, "gatewayReferenceNumber", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'external_reference_number', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PaymentDetails.prototype, "externalReferenceNumber", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'PAYMENTMODE',
        postgresql: { columnName: 'payment_mode', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PaymentDetails.prototype, "paymentMode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'PAYMENTSTATUS',
        postgresql: { columnName: 'payment_status', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PaymentDetails.prototype, "paymentStatus", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'payment_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], PaymentDetails.prototype, "paymentDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'remarks', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PaymentDetails.prototype, "remarks", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'narration', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PaymentDetails.prototype, "narration", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'PAYMENTRECONCILIATIONSTATUS',
        postgresql: { columnName: 'reconcilation_status', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PaymentDetails.prototype, "reconcilationStatus", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'PAYMENTCONFIRMATIONTOAMCSTATUS',
        postgresql: { columnName: 'payment_confirmation_to_amc_status', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PaymentDetails.prototype, "paymentConfirmationToAMCStatus", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'PAYMENTREVERSALSTATUS',
        postgresql: { columnName: 'reversal_status', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PaymentDetails.prototype, "reversalStatus", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'WMSGENERICMESSAGES',
        postgresql: { columnName: 'payment_error_type', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PaymentDetails.prototype, "paymentErrorType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'debit_retry_count', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PaymentDetails.prototype, "debitRetryCount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'inquiry_retry_count', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PaymentDetails.prototype, "inquiryRetryCount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'reversal_retry_count', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PaymentDetails.prototype, "reversalRetryCount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'DEBITAPISTATUS',
        postgresql: { columnName: 'debit_api_status', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PaymentDetails.prototype, "debitApiStatus", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => order_item_model_1.OrderItem, {
        name: 'orderItem',
        keyFrom: 'orderItemId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_order_item', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PaymentDetails.prototype, "orderItemId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.BankAccount, {
        name: 'bankAccount',
        keyFrom: 'bankAccountId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_bank_account', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PaymentDetails.prototype, "bankAccountId", void 0);
PaymentDetails = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'payment_details' },
            plural: 'PaymentDetails',
            foreignKeys: {
                fkidx_payment_details_order_item_fk_id_order_item: {
                    name: 'fkidx_payment_details_order_item_fk_id_order_item',
                    foreignKey: 'fk_id_order_item',
                    entityKey: 'id',
                    entity: 'OrderItem'
                },
                fkidx_payment_details_bank_account_fk_id_bank_account: {
                    name: 'fkidx_payment_details_bank_account_fk_id_bank_account',
                    foreignKey: 'fk_id_bank_account',
                    entityKey: 'id',
                    entity: 'BankAccount'
                }
            },
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], PaymentDetails);
exports.PaymentDetails = PaymentDetails;
//# sourceMappingURL=payment-details.model.js.map