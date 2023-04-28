"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RtaHoldingReconciliation = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let RtaHoldingReconciliation = class RtaHoldingReconciliation extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        default: 1,
        optionLabelIdentifier: 'RTAHOLDINGRECONCILIATIONSTATUS',
        postgresql: { columnName: 'status', dataType: 'SMALLINT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], RtaHoldingReconciliation.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'rta_holding_unique_hash', dataType: 'VARCHAR', dataLength: 1000, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], RtaHoldingReconciliation.prototype, "rtaHoldingUniqueHash", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'service_provider_code', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], RtaHoldingReconciliation.prototype, "serviceProviderCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'service_provider_account_number', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], RtaHoldingReconciliation.prototype, "serviceProviderAccountNumber", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'instrument_code', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], RtaHoldingReconciliation.prototype, "instrumentCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'holding_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], RtaHoldingReconciliation.prototype, "holdingDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'isin_code', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], RtaHoldingReconciliation.prototype, "isinCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'instrument_name', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], RtaHoldingReconciliation.prototype, "instrumentName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'investor_name', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], RtaHoldingReconciliation.prototype, "investorName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'price_per_unit', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], RtaHoldingReconciliation.prototype, "pricePerUnit", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'system_price_per_unit', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], RtaHoldingReconciliation.prototype, "systenPricePerUnit", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'system_quantity', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], RtaHoldingReconciliation.prototype, "systemQuantity", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'quantity', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], RtaHoldingReconciliation.prototype, "quantity", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'system_current_value', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], RtaHoldingReconciliation.prototype, "systemCurrentValue", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'current_value', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], RtaHoldingReconciliation.prototype, "currentValue", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'broker_code', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], RtaHoldingReconciliation.prototype, "brokerCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'remarks', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], RtaHoldingReconciliation.prototype, "remarks", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        postgresql: { columnName: 'pan', dataType: 'VARCHAR', nullable: 'Y', dataLength: 255 }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], RtaHoldingReconciliation.prototype, "pan", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'reinvestment_flag', dataType: 'VARCHAR', nullable: 'Y', dataLength: 255 }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], RtaHoldingReconciliation.prototype, "reinvestmentFlag", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'system_nav_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], RtaHoldingReconciliation.prototype, "systemNavDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.RtaHolding, {
        name: 'rtaHolding',
        keyFrom: 'rtaHoldingId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_rta_holding', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], RtaHoldingReconciliation.prototype, "rtaHoldingId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Instrument, {
        name: 'instrument',
        keyFrom: 'instrumentId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_instrument', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], RtaHoldingReconciliation.prototype, "instrumentId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.ServiceProvider, {
        name: 'serviceProvider',
        keyFrom: 'serviceProviderId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_service_provider', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], RtaHoldingReconciliation.prototype, "serviceProviderId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.ServiceProviderAccount, {
        name: 'serviceProviderAccount',
        keyFrom: 'serviceProviderAccountId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_service_provider_account', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], RtaHoldingReconciliation.prototype, "serviceProviderAccountId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.AppUser, {
        name: 'uploadedByAppUser',
        keyFrom: 'uploadedByAppUserId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_uploaded_by_user', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], RtaHoldingReconciliation.prototype, "uploadedByAppUserId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Holding, {
        name: 'holding',
        keyFrom: 'holdingId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_holding', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], RtaHoldingReconciliation.prototype, "holdingId", void 0);
RtaHoldingReconciliation = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'rta_holding_reconciliation' },
            plural: 'RTAHoldingReconciliations',
            foreignKeys: {
                fkidx_rta_holding_reconciliation_rta_holding_fk_id_rta_holding: {
                    name: 'fkidx_rta_holding_reconciliation_rta_holding_fk_id_rta_holding',
                    foreignKey: 'fk_id_rta_holding',
                    entityKey: 'id',
                    entity: 'RTAHolding'
                },
                fkidx_rta_holding_reconciliation_instrument_fk_id_instrument: {
                    name: 'fkidx_rta_holding_reconciliation_instrument_fk_id_instrument',
                    foreignKey: 'fk_id_instrument',
                    entityKey: 'id',
                    entity: 'Instrument'
                },
                fkidx_rta_holding_reconciliation_spa_fk_id_spa: {
                    name: 'fkidx_rta_holding_reconciliation_spa_fk_id_spa',
                    foreignKey: 'fk_id_service_provider_account',
                    entityKey: 'id',
                    entity: 'ServiceProviderAccount'
                },
                fkidx_rta_holding_reconciliation_sp_fk_id_sp: {
                    name: 'fkidx_rta_holding_reconciliation_sp_fk_id_sp',
                    foreignKey: 'fk_id_service_provider',
                    entityKey: 'id',
                    entity: 'ServiceProvider'
                },
                fkidx_rta_holding_reconciliation_user_fk_id_user: {
                    name: 'fkidx_rta_holding_reconciliation_user_fk_id_user',
                    foreignKey: 'fk_id_user',
                    entityKey: 'id',
                    entity: 'AppUser'
                },
                fkidx_rta_holding_reconciliation_holding_fk_id_holding: {
                    name: 'fkidx_rta_holding_reconciliation_holding_fk_id_holding',
                    foreignKey: 'fk_id_holding',
                    entityKey: 'id',
                    entity: 'Holding'
                }
            },
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], RtaHoldingReconciliation);
exports.RtaHoldingReconciliation = RtaHoldingReconciliation;
//# sourceMappingURL=rta-holding-reconciliation.model.js.map