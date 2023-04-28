"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UamLoginAttemptsConfig = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let UamLoginAttemptsConfig = class UamLoginAttemptsConfig extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        postgresql: { columnName: 'max_login_attempts', dataType: 'SMALLINT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], UamLoginAttemptsConfig.prototype, "maxLoginAttempts", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'max_dormancy_days', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], UamLoginAttemptsConfig.prototype, "maxDormancyDays", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'max_dormancy_days_before_first_login', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], UamLoginAttemptsConfig.prototype, "maxDormancyDaysBeforeFirstLogin", void 0);
UamLoginAttemptsConfig = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'uam_login_attempts' },
            plural: 'UamLoginAttemptsConfigs'
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], UamLoginAttemptsConfig);
exports.UamLoginAttemptsConfig = UamLoginAttemptsConfig;
//# sourceMappingURL=uam-login-attempts-config.model.js.map