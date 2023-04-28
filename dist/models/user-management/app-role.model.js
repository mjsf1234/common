"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRole = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let AppRole = class AppRole extends __1.BaseSQLModel {
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
], AppRole.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'name', dataType: 'VARCHAR', dataLength: 255, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AppRole.prototype, "name", void 0);
AppRole = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            forceId: false,
            plural: 'AppRoles',
            postgresql: { tableName: 'role' }
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], AppRole);
exports.AppRole = AppRole;
//# sourceMappingURL=app-role.model.js.map