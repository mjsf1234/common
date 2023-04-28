"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountReferral = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let AccountReferral = class AccountReferral extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'referral_code', dataType: 'VARCHAR', dataLength: 32, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountReferral.prototype, "referralCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Account, {
        name: 'account',
        keyFrom: 'accountId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_account', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AccountReferral.prototype, "accountId", void 0);
AccountReferral = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'account_referral' },
            plural: 'AccountReferrals',
            foreignKeys: {
                fkidx_cart_account_fk_id_account: {
                    name: 'fkidx_cart_account_fk_id_account',
                    foreignKey: 'fk_id_account',
                    entityKey: 'id',
                    entity: 'Account'
                }
            },
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], AccountReferral);
exports.AccountReferral = AccountReferral;
//# sourceMappingURL=account-referral.model.js.map