"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sector = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let Sector = class Sector extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'name', dataType: 'VARCHAR', dataLength: 100, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Sector.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'description', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Sector.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Sector.prototype, "bosCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'fundoo_code', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Sector.prototype, "fundooCode", void 0);
Sector = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            indexes: {
                idx_is_active: { keys: { is_active: 1 }, options: { unique: false } },
                idx_created_date: { keys: { created_date: 1 }, options: { unique: false } },
                idx_last_modified_date: { keys: { last_modified_date: 1 }, options: { unique: false } },
                idx_sector_name: { keys: { name: 1 }, options: { unique: true, caseInsensitiveUnique: true } }
            },
            postgresql: { tableName: 'sector' },
            plural: 'Sectors',
            foreignKeys: {},
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Sector);
exports.Sector = Sector;
//# sourceMappingURL=sector.model.js.map