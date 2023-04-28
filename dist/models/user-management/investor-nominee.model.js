"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvestorNominee = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const _1 = require(".");
const __1 = require("..");
let InvestorNominee = class InvestorNominee extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: false,
        postgresql: { columnName: 'nominee_percentage', dataType: 'DECIMAL', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], InvestorNominee.prototype, "nomineePercentage", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: false,
        optionLabelIdentifier: 'GUARDIANRELATIONSHIP',
        postgresql: { columnName: 'guardian_relationship', dataType: 'SMALLINT', nullable: 'Y' },
        jsonSchema: {
            nullable: true
        }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], InvestorNominee.prototype, "guardianRelationship", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        postgresql: { columnName: 'guardian_name', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y' },
        jsonSchema: {
            nullable: true
        }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], InvestorNominee.prototype, "guardianName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        default: false,
        postgresql: { columnName: 'is_mf_nominee', dataType: 'BOOLEAN', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], InvestorNominee.prototype, "isMfNominee", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        default: false,
        postgresql: { columnName: 'is_synced_via_bank', dataType: 'BOOLEAN', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], InvestorNominee.prototype, "isSyncedViaBank", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        postgresql: { columnName: 'guardian_pan_card_number', dataType: 'VARCHAR', dataLength: 10, nullable: 'Y' },
        jsonSchema: {
            nullable: true
        }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], InvestorNominee.prototype, "guardianPanCardNumber", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.AppUser, {
        name: 'appUser',
        keyFrom: 'appUserId',
        keyTo: 'id'
    }, {
        required: false,
        postgresql: { columnName: 'fk_id_user', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InvestorNominee.prototype, "appUserId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Account, {
        name: 'account',
        keyFrom: 'accountId',
        keyTo: 'id'
    }, {
        required: false,
        postgresql: { columnName: 'fk_id_account', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InvestorNominee.prototype, "accountId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.ServiceProviderAccount, {
        name: 'serviceProviderAccount',
        keyFrom: 'serviceProviderAccountId',
        keyTo: 'id'
    }, {
        required: false,
        postgresql: { columnName: 'fk_id_service_provider_account', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InvestorNominee.prototype, "serviceProviderAccountId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.BankAccount, {
        name: 'bankAccount',
        keyFrom: 'bankAccountId',
        keyTo: 'id'
    }, {
        required: false,
        postgresql: { columnName: 'fk_id_bank_account', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InvestorNominee.prototype, "bankAccountId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => _1.Address, {
        name: 'address',
        keyFrom: 'addressId',
        keyTo: 'id'
    }, {
        required: false,
        postgresql: { columnName: 'fk_id_address', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InvestorNominee.prototype, "addressId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Relationship, {
        name: 'relationship',
        keyFrom: 'relationshipId',
        keyTo: 'id'
    }, {
        required: false,
        postgresql: { columnName: 'fk_id_relationship', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InvestorNominee.prototype, "relationshipId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => _1.Address, {
        name: 'guardianAddress',
        keyFrom: 'guardianAddressId',
        keyTo: 'id'
    }, {
        required: false,
        postgresql: { columnName: 'fk_id_guardian_address', dataType: 'INT', nullable: 'Y' },
        jsonSchema: {
            nullable: true
        }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InvestorNominee.prototype, "guardianAddressId", void 0);
InvestorNominee = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'investor_nominee' },
            plural: 'InvestorNominees',
            foreignKeys: {
                fkidx_investor_nominee_account_fk_id_account: {
                    name: 'fkidx_investor_nominee_account_fk_id_account',
                    foreignKey: 'fk_id_account',
                    entityKey: 'id',
                    entity: 'Account'
                },
                fkidx_investor_nominee_sp_account_fk_id_sp_account: {
                    name: 'fkidx_investor_nominee_sp_account_fk_id_sp_account',
                    foreignKey: 'fk_id_service_provider_account',
                    entityKey: 'id',
                    entity: 'ServiceProviderAccount'
                },
                fkidx_investor_nominee_bank_account_fk_id_bank_account: {
                    name: 'fkidx_investor_nominee_bank_account_fk_id_bank_account',
                    foreignKey: 'fk_id_bank_account',
                    entityKey: 'id',
                    entity: 'BankAccount'
                },
                fkidx_investor_nominee_address_fk_id_address: {
                    name: 'fkidx_investor_nominee_address_fk_id_address',
                    foreignKey: 'fk_id_address',
                    entityKey: 'id',
                    entity: 'Address'
                },
                fkidx_investor_nominee_user_fk_id_user: {
                    name: 'fkidx_investor_nominee_user_fk_id_user',
                    foreignKey: 'fk_id_user',
                    entityKey: 'id',
                    entity: 'AppUser'
                }
            }
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], InvestorNominee);
exports.InvestorNominee = InvestorNominee;
//# sourceMappingURL=investor-nominee.model.js.map