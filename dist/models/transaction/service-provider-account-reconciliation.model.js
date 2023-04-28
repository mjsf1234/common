"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceProviderAccountReconciliation = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let ServiceProviderAccountReconciliation = class ServiceProviderAccountReconciliation extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'account_number', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ServiceProviderAccountReconciliation.prototype, "accountNumber", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'old_account_number', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ServiceProviderAccountReconciliation.prototype, "oldAccountNumber", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'remarks', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ServiceProviderAccountReconciliation.prototype, "remarks", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        default: 1,
        optionLabelIdentifier: 'SERVICEPROVIDERACCOUNTRECONCILIATIONSTATUS',
        postgresql: { columnName: 'status', dataType: 'SMALLINT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ServiceProviderAccountReconciliation.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.ServiceProvider, {
        name: 'serviceProvider',
        keyFrom: 'serviceProviderId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_service_provider', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ServiceProviderAccountReconciliation.prototype, "serviceProviderId", void 0);
ServiceProviderAccountReconciliation = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            indexes: {
                idx_is_active: { keys: { is_active: 1 }, options: { unique: false } },
                idx_created_date: { keys: { created_date: 1 }, options: { unique: false } },
                idx_last_modified_date: { keys: { last_modified_date: 1 }, options: { unique: false } },
                idx_fk_id_service_provider: {
                    keys: { account_number: 1, fk_id_service_provider: 1 },
                    options: { unique: false }
                }
            },
            postgresql: { tableName: 'service_provider_account_reconciliation' },
            plural: 'ServiceProviderAccountsReconciliation',
            foreignKeys: {
                fkidx_service_provider_account_reconciliation_service_provider_fk_id_sp: {
                    name: 'fkidx_service_provider_account_reconciliation_service_provider_fk_id_sp',
                    foreignKey: 'fk_id_service_provider',
                    entityKey: 'id',
                    entity: 'ServiceProvider'
                }
            },
            hiddenProperties: ['fk_id_account', 'fk_id_service_provider']
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], ServiceProviderAccountReconciliation);
exports.ServiceProviderAccountReconciliation = ServiceProviderAccountReconciliation;
//# sourceMappingURL=service-provider-account-reconciliation.model.js.map