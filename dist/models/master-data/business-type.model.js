"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessType = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let BusinessType = class BusinessType extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'name', dataType: 'VARCHAR', dataLength: 1000, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BusinessType.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'description', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BusinessType.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BusinessType.prototype, "bosCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'nse_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BusinessType.prototype, "nseCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'bse_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BusinessType.prototype, "bseCode", void 0);
BusinessType = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            indexes: {
                idx_is_active: { keys: { is_active: 1 }, options: { unique: false } },
                idx_created_date: { keys: { created_date: 1 }, options: { unique: false } },
                idx_last_modified_date: { keys: { last_modified_date: 1 }, options: { unique: false } },
                idx_business_type_name: { keys: { name: 1 }, options: { unique: true, caseInsensitiveUnique: true } }
            },
            plural: 'BusinessTypes',
            postgresql: { tableName: 'business_type' },
            foreignKeys: {},
            hiddenProperties: ['bosCode', 'nseCode', 'bseCode']
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], BusinessType);
exports.BusinessType = BusinessType;
//# sourceMappingURL=business-type.model.js.map