"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessCalendar = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let BusinessCalendar = class BusinessCalendar extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: true,
        postgresql: { columnName: 'date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], BusinessCalendar.prototype, "date", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'day', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BusinessCalendar.prototype, "day", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'BUSINESSDAY',
        postgresql: { columnName: 'business_day_equity', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BusinessCalendar.prototype, "businessDayEquity", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'BUSINESSDAY',
        postgresql: { columnName: 'business_day_fixed_income', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BusinessCalendar.prototype, "businessDayFixedIncome", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'BUSINESSDAY',
        postgresql: { columnName: 'business_day_implementation', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BusinessCalendar.prototype, "businessDayImplementation", void 0);
BusinessCalendar = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            indexes: {
                idx_is_active: { keys: { is_active: 1 }, options: { unique: false } },
                idx_created_date: { keys: { created_date: 1 }, options: { unique: false } },
                idx_last_modified_date: { keys: { last_modified_date: 1 }, options: { unique: false } },
                idx_business_calender_date: { keys: { date: 1 }, options: { unique: true, caseInsensitiveUnique: true } }
            },
            plural: 'BusinessCalendar',
            postgresql: { tableName: 'business_calendar' },
            foreignKeys: {},
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], BusinessCalendar);
exports.BusinessCalendar = BusinessCalendar;
//# sourceMappingURL=business-calendar.model.js.map