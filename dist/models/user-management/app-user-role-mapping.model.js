"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppUserRoleMapping = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let AppUserRoleMapping = class AppUserRoleMapping extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.AppUser, {
        name: 'appUser',
        keyFrom: 'appUserId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_user', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AppUserRoleMapping.prototype, "appUserId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.AppRole, {
        name: 'appRole',
        keyFrom: 'appRoleId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_role', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AppUserRoleMapping.prototype, "appRoleId", void 0);
AppUserRoleMapping = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'user_role_mapping' },
            plural: 'AppUserRoleMappings',
            foreignKeys: {
                fkidx_user_role_mapping_user_fk_id_user: {
                    name: 'fkidx_user_role_mapping_user_fk_id_user',
                    foreignKey: 'fk_id_user',
                    entityKey: 'id',
                    entity: 'AppUser'
                },
                fkidx_user_role_mapping_role_fk_id_role: {
                    name: 'fkidx_user_role_mapping_role_fk_id_role',
                    foreignKey: 'fk_id_role',
                    entityKey: 'id',
                    entity: 'AppRole'
                }
            },
            indexes: {
                idx_fk_id_user_fk_id_role: {
                    keys: { fk_id_user: 1, fk_id_role: 1 },
                    options: { unique: true, caseInsensitiveUnique: true }
                }
            },
            hiddenProperties: ['fk_id_user', 'fk_id_role']
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], AppUserRoleMapping);
exports.AppUserRoleMapping = AppUserRoleMapping;
//# sourceMappingURL=app-user-role-mapping.model.js.map