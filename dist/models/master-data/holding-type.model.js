"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HoldingType = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let HoldingType = class HoldingType extends __1.BaseSQLModel {
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
], HoldingType.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'name', dataType: 'VARCHAR', dataLength: 255, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingType.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'description', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingType.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingType.prototype, "bosCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'nse_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingType.prototype, "nseCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'bse_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], HoldingType.prototype, "bseCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'object',
        default: [],
        postgresql: { columnName: 'core_bank_code', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], HoldingType.prototype, "coreBankCode", void 0);
HoldingType = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            forceId: false,
            indexes: {
                idx_is_active: { keys: { is_active: 1 }, options: { unique: false } },
                idx_created_date: { keys: { created_date: 1 }, options: { unique: false } },
                idx_last_modified_date: { keys: { last_modified_date: 1 }, options: { unique: false } },
                idx_holding_type_name: { keys: { name: 1 }, options: { unique: true, caseInsensitiveUnique: true } }
            },
            postgresql: { tableName: 'holding_type' },
            plural: 'HoldingTypes',
            foreignKeys: {},
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], HoldingType);
exports.HoldingType = HoldingType;
//# sourceMappingURL=holding-type.model.js.map