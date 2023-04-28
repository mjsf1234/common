"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppVersion = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let AppVersion = class AppVersion extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'current_app_version', dataType: 'VARCHAR', dataLength: 255, nullable: 'N' },
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AppVersion.prototype, "currentAppVersion", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'OSTYPE',
        postgresql: { columnName: 'os_type', dataType: 'SMALLINT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AppVersion.prototype, "osType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        optionLabelIdentifier: 'VERSIONSTATUS',
        postgresql: { columnName: 'status', dataType: 'SMALLINT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AppVersion.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        postgresql: { columnName: 'is_force_update', dataType: 'BOOLEAN' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AppVersion.prototype, "isForceUpdate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'build_number', dataType: 'VARCHAR', dataLength: 255, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AppVersion.prototype, "buildNumber", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'any',
        postgresql: { columnName: 'config', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], AppVersion.prototype, "config", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: true,
        postgresql: { columnName: 'release_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AppVersion.prototype, "releaseDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: true,
        postgresql: { columnName: 'active_version_flag', dataType: 'BOOLEAN', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AppVersion.prototype, "activeVersionFlag", void 0);
AppVersion = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            indexes: {},
            postgresql: { tableName: 'app_version' },
            plural: 'AppVersions',
            foreignKeys: {},
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], AppVersion);
exports.AppVersion = AppVersion;
//# sourceMappingURL=app-version.model.js.map