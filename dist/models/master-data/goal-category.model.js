"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoalCategory = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let GoalCategory = class GoalCategory extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        default: 1,
        optionLabelIdentifier: 'GOALTYPE',
        postgresql: { columnName: 'goal_type', dataType: 'INT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GoalCategory.prototype, "goalType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: false,
        postgresql: { columnName: 'sequence', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 6, dataScale: 2 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GoalCategory.prototype, "sequence", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: false,
        default: 0,
        postgresql: { columnName: 'lumpsum_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 5 },
        jsonSchema: {
            minimum: 1,
            maximum: 99900000000
        }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GoalCategory.prototype, "lumpsumAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: false,
        default: 0,
        postgresql: { columnName: 'target_amount', dataType: 'NUMERIC', dataPrecision: 25, nullable: 'Y', dataScale: 5 },
        jsonSchema: {
            minimum: 1,
            maximum: 99900000000
        }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GoalCategory.prototype, "targetAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: false,
        default: 0,
        postgresql: { columnName: 'sip_amount', dataType: 'NUMERIC', dataPrecision: 25, nullable: 'Y', dataScale: 5 },
        jsonSchema: {
            minimum: 1,
            maximum: 99900000000
        }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GoalCategory.prototype, "sipAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: false,
        postgresql: { columnName: 'tenure_in_month', dataType: 'INT', nullable: 'Y' },
        jsonSchema: {
            minimum: 1,
            maximum: 1200
        }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GoalCategory.prototype, "tenureInMonth", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
        postgresql: { columnName: 'icon', dataType: 'TEXT', nullable: 'Y' },
        jsonSchema: {
            pattern: '(?!.*?script)^.*$'
        }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], GoalCategory.prototype, "icon", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: true,
        default: false,
        postgresql: { columnName: 'is_default', dataType: 'BOOLEAN', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], GoalCategory.prototype, "isDefault", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
        postgresql: { columnName: 'category', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], GoalCategory.prototype, "category", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasOne)(() => __1.Goal, { keyTo: 'goalCategoryId' }),
    (0, tslib_1.__metadata)("design:type", __1.Goal)
], GoalCategory.prototype, "goal", void 0);
GoalCategory = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'goal_category' },
            plural: 'GoalCategories',
            foreignKeys: {},
            hidden: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], GoalCategory);
exports.GoalCategory = GoalCategory;
//# sourceMappingURL=goal-category.model.js.map