"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseSQLModel = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const base_model_model_1 = require("./base-model.model");
let BaseSQLModel = class BaseSQLModel extends base_model_model_1.BaseModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: false,
        default: true,
        postgresql: { columnName: 'is_active', dataType: 'BOOLEAN', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], BaseSQLModel.prototype, "isActive", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: false,
        ignoreAuditLog: true,
        postgresql: { columnName: 'created_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], BaseSQLModel.prototype, "createdDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: false,
        ignoreAuditLog: true,
        postgresql: { columnName: 'last_modified_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], BaseSQLModel.prototype, "lastModifiedDate", void 0);
BaseSQLModel = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            indexes: {
                idx_is_active: { keys: { is_active: 1 }, options: { unique: false } },
                idx_created_date: { keys: { created_date: 1 }, options: { unique: false } },
                idx_last_modified_date: { keys: { last_modified_date: 1 }, options: { unique: false } }
            }
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], BaseSQLModel);
exports.BaseSQLModel = BaseSQLModel;
//# sourceMappingURL=base-sql-model.model.js.map