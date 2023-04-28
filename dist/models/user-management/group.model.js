"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
const family_model_1 = require("./family.model");
let Group = class Group extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        isPseudonym: true,
        postgresql: { columnName: 'name', dataType: 'VARCHAR', dataLength: 255, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Group.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'description', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Group.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'group_head', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Group.prototype, "groupHead", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'object',
        default: {},
        postgresql: { columnName: 'config', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], Group.prototype, "config", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        default: 1,
        optionLabelIdentifier: 'STATUS',
        postgresql: { columnName: 'status', dataType: 'SMALLINT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Group.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => family_model_1.Family, { keyTo: 'groupId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], Group.prototype, "families", void 0);
Group = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'group' },
            plural: 'Groups',
            foreignKeys: {}
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Group);
exports.Group = Group;
//# sourceMappingURL=group.model.js.map