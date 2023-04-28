"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiskProfileHistory = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
const account_model_1 = require("./account.model");
let RiskProfileHistory = class RiskProfileHistory extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: true,
        default: true,
        postgresql: { columnName: 'is_submitted', dataType: 'BOOLEAN', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], RiskProfileHistory.prototype, "isSubmitted", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: true,
        ignoreAuditLog: true,
        postgresql: { columnName: 'effective_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], RiskProfileHistory.prototype, "effectiveDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'risk_profile_data', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], RiskProfileHistory.prototype, "riskProfileData", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => account_model_1.Account, {
        name: 'account',
        keyFrom: 'accountId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_account', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], RiskProfileHistory.prototype, "accountId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.RiskProfile, {
        name: 'riskProfile',
        keyFrom: 'riskProfileId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_risk_profile', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], RiskProfileHistory.prototype, "riskProfileId", void 0);
RiskProfileHistory = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'risk_profile_history' },
            plural: 'RiskProfileHistories',
            foreignKeys: {
                fkidx_risk_profile_history_account_fk_id_account: {
                    name: 'fkidx_risk_profile_history_account_fk_id_account',
                    foreignKey: 'fk_id_account',
                    entityKey: 'id',
                    entity: 'Account'
                },
                fkidx_risk_profile_history_fk_id_risk_profile: {
                    name: 'fkidx_risk_profile_history_fk_id_risk_profile',
                    foreignKey: 'fk_id_risk_profile',
                    entityKey: 'id',
                    entity: 'RiskProfile'
                }
            },
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], RiskProfileHistory);
exports.RiskProfileHistory = RiskProfileHistory;
//# sourceMappingURL=risk-profile-history.model.js.map