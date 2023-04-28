"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppAccessToken = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
const app_user_model_1 = require("./app-user.model");
let AppAccessToken = class AppAccessToken extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        isPseudonym: true,
        postgresql: { columnName: 'token', dataType: 'VARCHAR', dataLength: 64, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AppAccessToken.prototype, "token", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: true,
        postgresql: { columnName: 'expiry', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AppAccessToken.prototype, "expiry", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'object',
        default: {},
        postgresql: { columnName: 'token_data', dataType: 'TEXT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], AppAccessToken.prototype, "tokenData", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        isPseudonym: true,
        postgresql: { columnName: 'refresh_token', dataType: 'VARCHAR', dataLength: 64, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AppAccessToken.prototype, "refreshToken", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: true,
        postgresql: { columnName: 'refres_token_expiry', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AppAccessToken.prototype, "refreshTokenExpiry", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'ip_address', dataType: 'VARCHAR', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AppAccessToken.prototype, "ipAddress", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => app_user_model_1.AppUser, {
        name: 'appUser',
        keyFrom: 'appUserId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_user', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AppAccessToken.prototype, "appUserId", void 0);
AppAccessToken = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            indexes: {
                idx_is_active: { keys: { is_active: 1 }, options: { unique: false } },
                idx_created_date: { keys: { created_date: 1 }, options: { unique: false } },
                idx_last_modified_date: { keys: { last_modified_date: 1 }, options: { unique: false } },
                idx_token: { keys: { token: 1 }, options: { unique: true } }
            },
            plural: 'AppAccessTokens',
            postgresql: { tableName: 'access_token' },
            foreignKeys: {
                fkidx_access_token_user_fk_id_user: {
                    name: 'fkidx_access_token_user_fk_id_user',
                    foreignKey: 'fk_id_user',
                    entityKey: 'id',
                    entity: 'AppUser'
                }
            }
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], AppAccessToken);
exports.AppAccessToken = AppAccessToken;
//# sourceMappingURL=app-access-token.model.js.map