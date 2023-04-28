"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountServiceProviderAccountInstrumentMapping = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
const service_provider_account_model_1 = require("./service-provider-account.model");
let AccountServiceProviderAccountInstrumentMapping = class AccountServiceProviderAccountInstrumentMapping extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        deafult: true,
        postgresql: { columnName: 'is_force_mapped', dataType: 'BOOLEAN', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AccountServiceProviderAccountInstrumentMapping.prototype, "isForceMapped", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Account, {
        name: 'account',
        keyFrom: 'accountId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_account', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AccountServiceProviderAccountInstrumentMapping.prototype, "accountId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => service_provider_account_model_1.ServiceProviderAccount, {
        name: 'serviceProviderAccount',
        keyFrom: 'serviceProviderAccountId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_service_provider_account', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AccountServiceProviderAccountInstrumentMapping.prototype, "serviceProviderAccountId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Instrument, {
        name: 'instrument',
        keyFrom: 'instrumentId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_instrument', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AccountServiceProviderAccountInstrumentMapping.prototype, "instrumentId", void 0);
AccountServiceProviderAccountInstrumentMapping = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'account_service_provider_account_instrument_mapping' },
            plural: 'AccountServiceProviderAccountInstrumentMappings',
            foreignKeys: {
                fkidx_aspaim_fk_id_account: {
                    name: 'fkidx_aspaim_fk_id_account',
                    foreignKey: 'fk_id_account',
                    entityKey: 'id',
                    entity: 'Account'
                },
                fkidx_aspaim_fk_id_service_provider_account: {
                    name: 'fkidx_aspaim_fk_id_service_provider_account',
                    foreignKey: 'fk_id_service_provider_account',
                    entityKey: 'id',
                    entity: 'ServiceProviderAccount'
                },
                fkidx_aspaim_fk_id_instrument: {
                    name: 'fkidx_aspaim_fk_id_instrument',
                    foreignKey: 'fk_id_instrument',
                    entityKey: 'id',
                    entity: 'Instrument'
                }
            },
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], AccountServiceProviderAccountInstrumentMapping);
exports.AccountServiceProviderAccountInstrumentMapping = AccountServiceProviderAccountInstrumentMapping;
//# sourceMappingURL=account-service-provider-account-instrument-mapping.model.js.map