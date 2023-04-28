"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapitalBucket = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let CapitalBucket = class CapitalBucket extends __1.BaseSQLModel {
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
], CapitalBucket.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'name', dataType: 'VARCHAR', dataLength: 255, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CapitalBucket.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'short_name', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CapitalBucket.prototype, "shortName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CapitalBucket.prototype, "bosCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'nse_code', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CapitalBucket.prototype, "nseCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'bse_code', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CapitalBucket.prototype, "bseCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        postgresql: { columnName: 'lower_limit', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 3 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CapitalBucket.prototype, "lowerLimit", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        postgresql: { columnName: 'upper_limit', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 3 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CapitalBucket.prototype, "upperLimit", void 0);
CapitalBucket = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            forceId: false,
            postgresql: { tableName: 'capital_bucket' },
            plural: 'CapitalBuckets',
            foreignKeys: {},
            hiddenProperties: ['bosCode', 'nseCode', 'bseCode']
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], CapitalBucket);
exports.CapitalBucket = CapitalBucket;
//# sourceMappingURL=capital-bucket.model.js.map