"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CasRequest = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
const transaction_app_file_model_1 = require("./transaction-app-file.model");
let CasRequest = class CasRequest extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
        postgresql: {
            columnName: 'cas_reference_number',
            dataType: 'VARCHAR',
            dataLength: 30,
            nullable: 'Y'
        }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CasRequest.prototype, "casReferenceNumber", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: false,
        optionLabelIdentifier: 'CASREADTYPE',
        postgresql: {
            columnName: 'read_type',
            dataType: 'SMALLINT',
            __dataLength: 1,
            nullable: 'Y'
        }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CasRequest.prototype, "readType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: false,
        optionLabelIdentifier: 'CASTYPE',
        default: 1,
        postgresql: {
            columnName: 'cas_type',
            dataType: 'SMALLINT',
            __dataLength: 1,
            nullable: 'Y'
        }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CasRequest.prototype, "casType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: false,
        optionLabelIdentifier: 'CASREQUESTSTATUS',
        default: 1,
        postgresql: {
            columnName: 'status',
            dataType: 'SMALLINT',
            __dataLength: 1,
            nullable: 'Y'
        }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CasRequest.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: true,
        postgresql: {
            columnName: 'triggered_date',
            dataType: 'TIMESTAMP WITH TIME ZONE',
            nullable: 'N'
        }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], CasRequest.prototype, "triggeredDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: false,
        postgresql: {
            columnName: 'received_date',
            dataType: 'TIMESTAMP WITH TIME ZONE',
            nullable: 'Y'
        }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], CasRequest.prototype, "receivedDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: false,
        postgresql: {
            columnName: 'processed_date',
            dataType: 'TIMESTAMP WITH TIME ZONE',
            nullable: 'Y'
        }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], CasRequest.prototype, "processedDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.AppUser, {
        name: 'appUser',
        keyFrom: 'appUserId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_user', dataType: 'INT', __dataLength: 11, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CasRequest.prototype, "appUserId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => transaction_app_file_model_1.TransactionAppFile, {
        name: 'transactionAppFile',
        keyFrom: 'transactionAppFileId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_file', dataType: 'INT', __dataLength: 11, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CasRequest.prototype, "transactionAppFileId", void 0);
CasRequest = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: true,
            postgresql: {
                tableName: 'cas_request',
                plural: 'CasRequests',
                foreignKeys: {
                    fkidx_cas_log_cas_fk_id_user: {
                        name: 'fkidx_cas_log_cas_fk_id_user',
                        foreignKey: 'fk_id_user',
                        entityKey: 'id',
                        entity: 'AppUser'
                    },
                    fkidx_cas_log_file_fk_id_file: {
                        name: 'fkidx_cas_log_file_fk_id_file',
                        foreignKey: 'fk_id_cas_file',
                        entityKey: 'id',
                        entity: 'AppFile'
                    }
                }
            },
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], CasRequest);
exports.CasRequest = CasRequest;
//# sourceMappingURL=cas-request.model.js.map