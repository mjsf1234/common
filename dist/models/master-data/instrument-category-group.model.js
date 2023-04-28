"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstrumentCategoryGroup = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let InstrumentCategoryGroup = class InstrumentCategoryGroup extends __1.BaseSQLModel {
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
], InstrumentCategoryGroup.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'name', dataType: 'VARCHAR', dataLength: 100, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentCategoryGroup.prototype, "name", void 0);
InstrumentCategoryGroup = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            forceId: false,
            indexes: {
                idx_is_active: { keys: { is_active: 1 }, options: { unique: false } },
                idx_created_date: { keys: { created_date: 1 }, options: { unique: false } },
                idx_last_modified_date: { keys: { last_modified_date: 1 }, options: { unique: false } },
                idx_instrument_category_group_name: { keys: { name: 1 }, options: { unique: true, caseInsensitiveUnique: true } }
            },
            postgresql: { tableName: 'instrument_category_group' },
            plural: 'InstrumentCategoryGroups',
            foreignKeys: {},
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], InstrumentCategoryGroup);
exports.InstrumentCategoryGroup = InstrumentCategoryGroup;
//# sourceMappingURL=instrument-category-group.model.js.map