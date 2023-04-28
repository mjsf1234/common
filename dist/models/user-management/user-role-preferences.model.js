"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRolePreferences = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let UserRolePreferences = class UserRolePreferences extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'object',
        default: {},
        postgresql: { columnName: 'config', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], UserRolePreferences.prototype, "config", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.AppUserRoleMapping, {
        name: 'appUserRoleMapping',
        keyFrom: 'appUserRoleMappingId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_app_user_role_mapping', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], UserRolePreferences.prototype, "appUserRoleMappingId", void 0);
UserRolePreferences = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'user_role_preferences' },
            plural: 'UserRolePreferences',
            foreignKeys: {
                fkidx_user_role_preferences_fk_id_app_user_role_mapping: {
                    name: 'fkidx_user_role_preferences_fk_id_app_user_role_mapping',
                    foreignKey: 'fk_id_app_user_role_mapping',
                    entityKey: 'id',
                    entity: 'AppUserRoleMapping'
                }
            }
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], UserRolePreferences);
exports.UserRolePreferences = UserRolePreferences;
//# sourceMappingURL=user-role-preferences.model.js.map