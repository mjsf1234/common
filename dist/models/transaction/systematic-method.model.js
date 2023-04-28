"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystematicMethod = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let SystematicMethod = class SystematicMethod extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        optionLabelIdentifier: 'SYSTEMATICMETHODFREQUENCY',
        postgresql: { columnName: 'frequency', dataType: 'SMALLINT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SystematicMethod.prototype, "frequency", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'frequency_day', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SystematicMethod.prototype, "frequencyDay", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        optionLabelIdentifier: 'SYSTEMATICMETHODTYPE',
        postgresql: { columnName: 'type', dataType: 'SMALLINT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SystematicMethod.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        optionLabelIdentifier: 'SYSTEMATICMETHODSTATUS',
        postgresql: { columnName: 'status', dataType: 'SMALLINT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SystematicMethod.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'no_of_transactions', dataType: 'INT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SystematicMethod.prototype, "transactionCount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: true,
        postgresql: { columnName: 'start_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], SystematicMethod.prototype, "startDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'end_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], SystematicMethod.prototype, "endDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'first_execution_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], SystematicMethod.prototype, "firstExecutionDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'next_execution_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], SystematicMethod.prototype, "nextExecutionDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'quantity', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SystematicMethod.prototype, "quantity", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SystematicMethod.prototype, "amount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SystematicMethod.prototype, "bosCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'systematic_registration_number', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SystematicMethod.prototype, "systematicRegistrationNumber", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'nse_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SystematicMethod.prototype, "nseCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'bse_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SystematicMethod.prototype, "bseCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'previous_execution_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], SystematicMethod.prototype, "previousExecutionDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'current_installment_number', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SystematicMethod.prototype, "currentInstallmentNo", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'available_dates', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SystematicMethod.prototype, "availableDates", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'goal_type_label', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SystematicMethod.prototype, "goalTypeLabel", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Instrument, {
        name: 'toInstrument',
        keyFrom: 'toScheme',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'to_scheme', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SystematicMethod.prototype, "toScheme", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Account, {
        name: 'account',
        keyFrom: 'accountId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_account', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SystematicMethod.prototype, "accountId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Mandate, {
        name: 'mandate',
        keyFrom: 'mandateId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_mandate', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SystematicMethod.prototype, "mandateId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.ServiceProviderAccount, {
        name: 'serviceProviderAccount',
        keyFrom: 'serviceProviderAccountId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_service_provider_account', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SystematicMethod.prototype, "serviceProviderAccountId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Currency, {
        name: 'currency',
        keyFrom: 'currencyId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_currency', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SystematicMethod.prototype, "currencyId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Instrument, {
        name: 'instrument',
        keyFrom: 'instrumentId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_instrument', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SystematicMethod.prototype, "instrumentId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Goal, {
        name: 'goal',
        keyFrom: 'goalId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_goal', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SystematicMethod.prototype, "goalId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => __1.OrderItem, { keyTo: 'systematicMethodId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], SystematicMethod.prototype, "orderItems", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => __1.SystematicMethodStatusHistory, { keyTo: 'systematicMethodId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], SystematicMethod.prototype, "statusHistories", void 0);
SystematicMethod = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'systematic_method' },
            plural: 'SystematicMethods',
            foreignKeys: {
                fkidx_systematic_method_account_fk_id_account: {
                    name: 'fkidx_systematic_method_account_fk_id_account',
                    foreignKey: 'fk_id_account',
                    entityKey: 'id',
                    entity: 'Account'
                },
                fkidx_systematic_method_mandate_fk_id_mandate: {
                    name: 'fkidx_systematic_method_mandate_fk_id_mandate',
                    foreignKey: 'fk_id_mandate',
                    entityKey: 'id',
                    entity: 'Mandate'
                },
                fkidx_systematic_method_service_provider_account_fk_id_spa: {
                    name: 'fkidx_systematic_method_service_provider_account_fk_id_spa',
                    foreignKey: 'fk_id_service_provider_account',
                    entityKey: 'id',
                    entity: 'ServiceProviderAccount'
                },
                fkidx_systematic_method_goal_fk_id_goal: {
                    name: 'fkidx_systematic_method_goal_fk_id_goal',
                    foreignKey: 'fk_id_goal',
                    entityKey: 'id',
                    entity: 'Goal'
                },
                fkidx_systematic_method_currency_fk_id_currency: {
                    name: 'fkidx_systematic_method_currency_fk_id_currency',
                    foreignKey: 'fk_id_currency',
                    entityKey: 'id',
                    entity: 'Currency'
                },
                fkidx_systematic_method_instrument_fk_id_instrument: {
                    name: 'fkidx_systematic_method_instrument_fk_id_instrument',
                    foreignKey: 'fk_id_instrument',
                    entityKey: 'id',
                    entity: 'Instrument'
                }
            },
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], SystematicMethod);
exports.SystematicMethod = SystematicMethod;
//# sourceMappingURL=systematic-method.model.js.map