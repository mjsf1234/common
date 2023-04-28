"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiskProfile = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let RiskProfile = class RiskProfile extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: false,
        id: true,
        postgresql: { columnName: 'id', type: 'number', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], RiskProfile.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'name', dataType: 'VARCHAR', dataLength: 100, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], RiskProfile.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'description', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], RiskProfile.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'svg', dataType: 'TEXT', nullable: 'Y' },
        jsonSchema: {
            pattern: '(?!.*?script)^.*$'
        }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], RiskProfile.prototype, "svg", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        postgresql: { columnName: 'min_score', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], RiskProfile.prototype, "minScore", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        postgresql: { columnName: 'max_score', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], RiskProfile.prototype, "maxScore", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], RiskProfile.prototype, "bosCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => __1.ModelPortfolio, { keyTo: 'riskProfileId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], RiskProfile.prototype, "modelPortfolios", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => __1.ModelPortfolioInstrument, { keyTo: 'riskProfileId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], RiskProfile.prototype, "modelPortfolioInstruments", void 0);
RiskProfile = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'risk_profile' },
            plural: 'RiskProfiles',
            foreignKeys: {},
            forceId: false,
            hiddenProperties: [],
            indexes: {
                idx_risk_profile_name: { keys: { name: 1 }, options: { unique: true, caseInsensitiveUnique: true } }
            }
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], RiskProfile);
exports.RiskProfile = RiskProfile;
//# sourceMappingURL=risk-profile.model.js.map