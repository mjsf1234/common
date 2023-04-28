"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tenure = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let Tenure = class Tenure extends __1.BaseSQLModel {
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
], Tenure.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'tenure_in_year', dataType: 'INT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Tenure.prototype, "tenureInYear", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'tenure_in_month', dataType: 'INT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Tenure.prototype, "tenureInMonth", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => __1.ModelPortfolio, { keyTo: 'tenureId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], Tenure.prototype, "modelPortfolios", void 0);
Tenure = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            forceId: false,
            postgresql: { tableName: 'tenure' },
            plural: 'Tenures',
            foreignKeys: {},
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Tenure);
exports.Tenure = Tenure;
//# sourceMappingURL=tenure.model.js.map