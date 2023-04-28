"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Family = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
const app_user_model_1 = require("./app-user.model");
const group_model_1 = require("./group.model");
let Family = class Family extends __1.BaseSQLModel {
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
], Family.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'object',
        default: {},
        postgresql: { columnName: 'config', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], Family.prototype, "config", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Family.prototype, "bosCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => group_model_1.Group, {
        name: 'group',
        keyFrom: 'groupId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_group', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Family.prototype, "groupId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => app_user_model_1.AppUser, { keyTo: 'familyId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], Family.prototype, "appUsers", void 0);
Family = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'family' },
            plural: 'Families',
            foreignKeys: {
                fkidx_family_group_fk_id_group: {
                    name: 'fkidx_family_group_fk_id_group',
                    foreignKey: 'fk_id_group',
                    entityKey: 'id',
                    entity: 'Group'
                }
            },
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Family);
exports.Family = Family;
//# sourceMappingURL=family.model.js.map