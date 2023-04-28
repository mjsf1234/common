"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystematicMethodStatusHistory = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let SystematicMethodStatusHistory = class SystematicMethodStatusHistory extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'previous _frequency_day', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SystematicMethodStatusHistory.prototype, "previousFrequencyDay", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'frequency_day_changed_to', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SystematicMethodStatusHistory.prototype, "frequencyDayChangedTo", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'SYSTEMATICMETHODSTATUS',
        postgresql: { columnName: 'previous _status', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SystematicMethodStatusHistory.prototype, "previousStatus", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'SYSTEMATICMETHODSTATUS',
        postgresql: { columnName: 'status_changed_to', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SystematicMethodStatusHistory.prototype, "statusChangedTo", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.SystematicMethod, {
        name: 'systematicMethod',
        keyFrom: 'systematicMethodId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_systematic_method', dataType: 'INT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SystematicMethodStatusHistory.prototype, "systematicMethodId", void 0);
SystematicMethodStatusHistory = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'systematic_method_status_history' },
            plural: 'SystematicMethodStatusHistories'
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], SystematicMethodStatusHistory);
exports.SystematicMethodStatusHistory = SystematicMethodStatusHistory;
//# sourceMappingURL=systematic-method-status-history.model.js.map