"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncomeSlab = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let IncomeSlab = class IncomeSlab extends __1.BaseSQLModel {
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
], IncomeSlab.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'name', dataType: 'VARCHAR', dataLength: 255, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], IncomeSlab.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'description', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], IncomeSlab.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], IncomeSlab.prototype, "bosCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'nse_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], IncomeSlab.prototype, "nseCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'bse_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], IncomeSlab.prototype, "bseCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'array',
        itemType: 'string',
        default: [],
        postgresql: { columnName: 'core_bank_code', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], IncomeSlab.prototype, "coreBankCode", void 0);
IncomeSlab = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            forceId: false,
            postgresql: { tableName: 'income_slab' },
            plural: 'IncomeSlabs',
            foreignKeys: {},
            hiddenProperties: [],
            indexes: {
                idx_income_slab_name: { keys: { name: 1 }, options: { unique: true, caseInsensitiveUnique: true } }
            }
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], IncomeSlab);
exports.IncomeSlab = IncomeSlab;
//# sourceMappingURL=income-slab.model.js.map