"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RtaHolding = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
const rta_holding_reconciliation_model_1 = require("./rta-holding-reconciliation.model");
let RtaHolding = class RtaHolding extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'name', dataType: 'VARCHAR', dataLength: 100, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], RtaHolding.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'remarks', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], RtaHolding.prototype, "remarks", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        default: 1,
        optionLabelIdentifier: 'RTAHOLDINGSTATUS',
        postgresql: { columnName: 'status', dataType: 'SMALLINT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], RtaHolding.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Rta, {
        name: 'rta',
        keyFrom: 'rtaId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_rta', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], RtaHolding.prototype, "rtaId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.AppUser, {
        name: 'uploadedByAppUser',
        keyFrom: 'uploadedByAppUserId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_uploaded_by_user', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], RtaHolding.prototype, "uploadedByAppUserId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.TransactionAppFile, {
        name: 'transactionAppFile',
        keyFrom: 'transactionAppFileId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_file', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], RtaHolding.prototype, "transactionAppFileId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.TransactionAppFile, {
        name: 'transactionAppFile',
        keyFrom: 'transactionAppFileId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_rta_reconciliation_file_id', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], RtaHolding.prototype, "rtaReconciliationFileId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => rta_holding_reconciliation_model_1.RtaHoldingReconciliation, { keyTo: 'rtaHoldingId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], RtaHolding.prototype, "rtaHoldingReconciliations", void 0);
RtaHolding = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'rta_holding' },
            plural: 'RTAHoldings',
            foreignKeys: {
                fkidx_rta_holding_rta_fk_id_rta: {
                    name: 'fkidx_rta_holding_rta_fk_id_rta',
                    foreignKey: 'fk_id_rta',
                    entityKey: 'id',
                    entity: 'RTA'
                },
                fkidx_rta_holding_user_fk_id_uploaded_by_user: {
                    name: 'fkidx_rta_holding_user_fk_id_uploaded_by_user',
                    foreignKey: 'fk_id_uploaded_by_user',
                    entityKey: 'id',
                    entity: 'AppUser'
                },
                fkidx_rta_holding_file_fk_id_file: {
                    name: 'fkidx_rta_holding_file_fk_id_file',
                    foreignKey: 'fk_id_file',
                    entityKey: 'id',
                    entity: 'AppFile'
                }
            },
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], RtaHolding);
exports.RtaHolding = RtaHolding;
//# sourceMappingURL=rta-holding.model.js.map