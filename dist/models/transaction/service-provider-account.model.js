"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceProviderAccount = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
const gain_model_1 = require("./gain.model");
const historical_holding_model_1 = require("./historical-holding.model");
const holding_model_1 = require("./holding.model");
const systematic_method_model_1 = require("./systematic-method.model");
const transaction_model_1 = require("./transaction.model");
const models_1 = require("../../models");
let ServiceProviderAccount = class ServiceProviderAccount extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'account_number', dataType: 'VARCHAR', dataLength: 1000, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ServiceProviderAccount.prototype, "accountNumber", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'old_account_number', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ServiceProviderAccount.prototype, "oldAccountNumber", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'service_provider_account_name', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ServiceProviderAccount.prototype, "serviceProviderAccountName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'SERVICEPROVIDERACCOUNTTYPE',
        postgresql: { columnName: 'type', dataType: 'SMALLINT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ServiceProviderAccount.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ServiceProviderAccount.prototype, "bosCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'registered_email', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ServiceProviderAccount.prototype, "registeredEmail", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'coupon', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ServiceProviderAccount.prototype, "coupon", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'registered_mobile', nullable: 'Y', dataType: 'VARCHAR', dataLength: 50, }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ServiceProviderAccount.prototype, "registeredMobile", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'contact_details_updated_on', dataType: 'DATE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], ServiceProviderAccount.prototype, "ContactDetailsUpdatedOn", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'maturity_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], ServiceProviderAccount.prototype, "maturityDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'ACCRUALFREQUENCY',
        postgresql: { columnName: 'accrual_frequency', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ServiceProviderAccount.prototype, "accrualFrequency", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        deafult: false,
        postgresql: { columnName: 'is_force_mapped', dataType: 'BOOLEAN', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], ServiceProviderAccount.prototype, "isForceMapped", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: true,
        default: false,
        postgresql: { columnName: 'is_held_away', dataType: 'BOOLEAN', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], ServiceProviderAccount.prototype, "isHeldAway", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Account, {
        name: 'account',
        keyFrom: 'accountId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_account', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ServiceProviderAccount.prototype, "accountId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.ServiceProvider, {
        name: 'serviceProvider',
        keyFrom: 'serviceProviderId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_service_provider', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ServiceProviderAccount.prototype, "serviceProviderId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => transaction_model_1.Transaction, { keyTo: 'serviceProviderAccountId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], ServiceProviderAccount.prototype, "transactions", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => __1.OrderItem, { keyTo: 'serviceProviderAccountId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], ServiceProviderAccount.prototype, "orderItems", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => holding_model_1.Holding, { keyTo: 'serviceProviderAccountId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], ServiceProviderAccount.prototype, "holdings", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => systematic_method_model_1.SystematicMethod, { keyTo: 'serviceProviderAccountId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], ServiceProviderAccount.prototype, "systematicMethods", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => historical_holding_model_1.HistoricalHolding, { keyTo: 'serviceProviderAccountId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], ServiceProviderAccount.prototype, "historicalHoldings", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => gain_model_1.Gain, { keyTo: 'serviceProviderAccountId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], ServiceProviderAccount.prototype, "gains", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => __1.DepositDetails, { keyTo: 'serviceProviderAccountId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], ServiceProviderAccount.prototype, "depositDetails", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasOne)(() => models_1.AuditTrail, { keyTo: 'serviceProviderAccountId' }),
    (0, tslib_1.__metadata)("design:type", models_1.AuditTrail)
], ServiceProviderAccount.prototype, "auditTrail", void 0);
ServiceProviderAccount = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            indexes: {
                idx_is_active: { keys: { is_active: 1 }, options: { unique: false } },
                idx_created_date: { keys: { created_date: 1 }, options: { unique: false } },
                idx_last_modified_date: { keys: { last_modified_date: 1 }, options: { unique: false } },
                idx_spa_number_type_fk_id_acc_fk_id_service_provider: {
                    keys: { account_number: 1, type: 1, fk_id_account: 1, fk_id_service_provider: 1 },
                    options: { unique: false }
                }
            },
            postgresql: { tableName: 'service_provider_account' },
            plural: 'ServiceProviderAccounts',
            foreignKeys: {
                fkidx_service_provider_account_account_fk_id_account: {
                    name: 'fkidx_service_provider_account_account_fk_id_account',
                    foreignKey: 'fk_id_account',
                    entityKey: 'id',
                    entity: 'Account'
                },
                fkidx_service_provider_account_service_provider_fk_id_sp: {
                    name: 'fkidx_service_provider_account_service_provider_fk_id_sp',
                    foreignKey: 'fk_id_service_provider',
                    entityKey: 'id',
                    entity: 'ServiceProvider'
                }
            },
            hiddenProperties: ['fk_id_account', 'fk_id_service_provider']
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], ServiceProviderAccount);
exports.ServiceProviderAccount = ServiceProviderAccount;
//# sourceMappingURL=service-provider-account.model.js.map