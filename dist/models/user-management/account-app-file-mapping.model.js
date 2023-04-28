"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountAppFileMapping = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
const account_model_1 = require("./account.model");
const audit_rail_1 = require("./audit-rail");
let AccountAppFileMapping = class AccountAppFileMapping extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => account_model_1.Account, {
        name: 'account',
        keyFrom: 'accountId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_account', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AccountAppFileMapping.prototype, "accountId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.UserManagementAppFile, {
        name: 'userManagementAppFile',
        keyFrom: 'userManagementAppFileId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_file', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AccountAppFileMapping.prototype, "userManagementAppFileId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasOne)(() => audit_rail_1.AuditTrail, { keyTo: 'accountAppFileMappingId' }),
    (0, tslib_1.__metadata)("design:type", audit_rail_1.AuditTrail)
], AccountAppFileMapping.prototype, "auditTrail", void 0);
AccountAppFileMapping = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'account_app_file_mapping' },
            plural: 'AccountAppFileMappings',
            foreignKeys: {
                fkidx_account_app_file_map_account_fk_id_account: {
                    name: 'fkidx_account_app_file_map_account_fk_id_account',
                    foreignKey: 'fk_id_account',
                    entityKey: 'id',
                    entity: 'Account'
                },
                fkidx_account_app_file_maping_file_fk_id_file: {
                    name: 'fkidx_account_app_file_maping_file_fk_id_file',
                    foreignKey: 'fk_id_file',
                    entityKey: 'id',
                    entity: 'AppFile'
                }
            },
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], AccountAppFileMapping);
exports.AccountAppFileMapping = AccountAppFileMapping;
//# sourceMappingURL=account-app-file-mapping.model.js.map