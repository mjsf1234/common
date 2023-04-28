"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WmsGenericMessage = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let WmsGenericMessage = class WmsGenericMessage extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        id: 1,
        generated: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], WmsGenericMessage.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'error_code', dataType: 'VARCHAR', dataLength: 256, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], WmsGenericMessage.prototype, "errorCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'error_message', dataType: 'TEXT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], WmsGenericMessage.prototype, "errorMessage", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'cust_error_code', dataType: 'VARCHAR', dataLength: 256, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], WmsGenericMessage.prototype, "custErrorCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        optionLabelIdentifier: 'WMSGENERICMESSAGES',
        postgresql: { columnName: 'wms_generic_message_status', dataType: 'SMALLINT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], WmsGenericMessage.prototype, "wmsGenericMessageStatus", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: false,
        default: false,
        postgresql: { columnName: 'inquiry_flag', dataType: 'BOOLEAN', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], WmsGenericMessage.prototype, "inquiryFlag", void 0);
WmsGenericMessage = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            forceId: false,
            indexes: {
                idx_is_active: { keys: { is_active: 1 }, options: { unique: false } },
                idx_created_date: { keys: { created_date: 1 }, options: { unique: false } },
                idx_last_modified_date: { keys: { last_modified_date: 1 }, options: { unique: false } }
            },
            postgresql: { tableName: 'wms_generic_messages' },
            plural: 'WmsGenericMessages',
            foreignKeys: {},
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], WmsGenericMessage);
exports.WmsGenericMessage = WmsGenericMessage;
//# sourceMappingURL=wms-generic-messages.model.js.map