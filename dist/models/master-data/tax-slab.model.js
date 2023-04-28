"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxSlab = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let TaxSlab = class TaxSlab extends __1.BaseSQLModel {
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
], TaxSlab.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'name', dataType: 'VARCHAR', dataLength: 255, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TaxSlab.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TaxSlab.prototype, "bosCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'min_value', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 15, dataScale: 3 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], TaxSlab.prototype, "minValue", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'max_value', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 15, dataScale: 3 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], TaxSlab.prototype, "maxValue", void 0);
TaxSlab = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            forceId: false,
            postgresql: { tableName: 'tax_slab' },
            plural: 'TaxSlabs',
            foreignKeys: {},
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], TaxSlab);
exports.TaxSlab = TaxSlab;
//# sourceMappingURL=tax-slab.model.js.map