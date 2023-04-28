"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystematicMethodSetting = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const _1 = require(".");
const __1 = require("..");
let SystematicMethodSetting = class SystematicMethodSetting extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'bse_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SystematicMethodSetting.prototype, "bseCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SystematicMethodSetting.prototype, "bosCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'min_installment_number', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 15, dataScale: 3 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SystematicMethodSetting.prototype, "minInstallmentNumber", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'max_installment_number', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 15, dataScale: 3 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SystematicMethodSetting.prototype, "maxInstallmentNumber", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'sip_min_gap', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 15, dataScale: 3 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SystematicMethodSetting.prototype, "sipMinimumGap", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'sip_max_gap', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 15, dataScale: 3 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SystematicMethodSetting.prototype, "sipMaximumGap", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'multiplier', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 15, dataScale: 3 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SystematicMethodSetting.prototype, "multiplier", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'min_installment_amount', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 15, dataScale: 3 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SystematicMethodSetting.prototype, "minInstallmentAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'max_installment_amount', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 15, dataScale: 3 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SystematicMethodSetting.prototype, "maxInstallmentAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'dates', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SystematicMethodSetting.prototype, "dates", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'SYSTEMATICMETHODFREQUENCY',
        postgresql: { columnName: 'frequency', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SystematicMethodSetting.prototype, "frequency", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'transaction_mode', dataType: 'VARCHAR', dataLength: 10, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SystematicMethodSetting.prototype, "transactionMode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'SYSTEMATICMETHODTYPE',
        postgresql: { columnName: 'systematic_method_type', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SystematicMethodSetting.prototype, "systematicMethodType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => _1.MutualFundDetails, {
        name: 'mutualFundDetails',
        keyFrom: 'mutualFundDetailsId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_mutual_fund_details', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SystematicMethodSetting.prototype, "mutualFundDetailsId", void 0);
SystematicMethodSetting = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            plural: 'SystematicMethodSettings',
            postgresql: { tableName: 'systematic_method_setting' },
            foreignKeys: {
                fkidx_systematic_method_settings_mutual_fund_details_fk_id: {
                    name: 'fkidx_systematic_method_settings_mutual_fund_details_fk_id',
                    foreignKey: 'fk_id_mutual_fund_details',
                    entityKey: 'id',
                    entity: 'MutualFundDetails'
                }
            },
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], SystematicMethodSetting);
exports.SystematicMethodSetting = SystematicMethodSetting;
//# sourceMappingURL=systematic-method-setting.model.js.map