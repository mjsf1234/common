"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvestmentReturnProjection = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
//import { Asset } from '.';
const __1 = require("..");
const risk_profile_model_1 = require("./risk-profile.model");
let InvestmentReturnProjection = class InvestmentReturnProjection extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        id: 1,
        generated: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InvestmentReturnProjection.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        postgresql: { columnName: 'goal_tenure_months', dataType: 'INT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InvestmentReturnProjection.prototype, "goalTenureMonths", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        postgresql: { columnName: 'months_post_investment', dataType: 'INT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InvestmentReturnProjection.prototype, "monthsPostInvestment", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        postgresql: { columnName: 'upside_of_10k', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InvestmentReturnProjection.prototype, "upsideOf10k", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        postgresql: { columnName: 'downside_of_10k', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InvestmentReturnProjection.prototype, "downsideOf10k", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        postgresql: { columnName: 'expected_of_10k', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InvestmentReturnProjection.prototype, "expectedOf10k", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => risk_profile_model_1.RiskProfile, {
        name: 'riskProfile',
        keyFrom: 'riskProfileId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_risk_profile', dataType: 'INT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InvestmentReturnProjection.prototype, "riskProfileId", void 0);
InvestmentReturnProjection = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            forceId: false,
            indexes: {
                idx_is_active: { keys: { is_active: 1 }, options: { unique: false } },
                idx_created_date: { keys: { created_date: 1 }, options: { unique: false } },
                idx_last_modified_date: { keys: { last_modified_date: 1 }, options: { unique: false } }
            },
            postgresql: { tableName: 'investment_return_projection' },
            plural: 'InvestmentReturnProjections',
            foreignKeys: {
                fkidx_investment_return_projection_risk_profile_fk_id_risk_profile: {
                    name: 'fkidx_investment_return_projection_risk_profile_fk_id_risk_profile',
                    foreignKey: 'fk_id_risk_profile',
                    entityKey: 'id',
                    entity: 'RiskProfile'
                }
            },
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], InvestmentReturnProjection);
exports.InvestmentReturnProjection = InvestmentReturnProjection;
//# sourceMappingURL=investment-return-projection.model.js.map