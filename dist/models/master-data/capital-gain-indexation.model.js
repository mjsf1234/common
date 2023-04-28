"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapitalGainIndexation = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let CapitalGainIndexation = class CapitalGainIndexation extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: true,
        postgresql: { columnName: 'from_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], CapitalGainIndexation.prototype, "fromDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: true,
        postgresql: { columnName: 'to_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], CapitalGainIndexation.prototype, "toDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        default: 0,
        postgresql: { columnName: 'index', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CapitalGainIndexation.prototype, "index", void 0);
CapitalGainIndexation = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            indexes: {
                idx_is_active: { keys: { is_active: 1 }, options: { unique: false } },
                idx_created_date: { keys: { created_date: 1 }, options: { unique: false } },
                idx_last_modified_date: { keys: { last_modified_date: 1 }, options: { unique: false } },
                idx_capital_gain_indexation_from_date_to_date: {
                    keys: { from_date: 1, to_date: 1 },
                    options: { unique: true, caseInsensitiveUnique: true }
                }
            },
            postgresql: { tableName: 'capital_gain_indexation' },
            plural: 'CapitalGainIndexations',
            foreignKeys: {},
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], CapitalGainIndexation);
exports.CapitalGainIndexation = CapitalGainIndexation;
//# sourceMappingURL=capital-gain-indexation.model.js.map