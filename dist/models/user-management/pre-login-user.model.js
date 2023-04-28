"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreLoginUser = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let PreLoginUser = class PreLoginUser extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'object',
        required: false,
        default: {},
        postgresql: { columnName: 'user_data', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], PreLoginUser.prototype, "userData", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: true,
        default: false,
        postgresql: { columnName: 'is_registered', dataType: 'BOOLEAN', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], PreLoginUser.prototype, "isRegistered", void 0);
PreLoginUser = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'pre_login_user' },
            plural: 'PreLoginUsers',
            foreignKeys: {}
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], PreLoginUser);
exports.PreLoginUser = PreLoginUser;
//# sourceMappingURL=pre-login-user.model.js.map