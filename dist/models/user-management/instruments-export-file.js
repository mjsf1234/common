"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstrumentsExportFile = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let InstrumentsExportFile = class InstrumentsExportFile extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'type', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsExportFile.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'filter', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsExportFile.prototype, "filter", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'status', dataType: 'NUMERIC', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsExportFile.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'remarks', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentsExportFile.prototype, "remarks", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Account, {
        name: 'account',
        keyFrom: 'accountId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_account', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsExportFile.prototype, "accountId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.UserManagementAppFile, {
        name: 'userManagementAppFile',
        keyFrom: 'userManagementAppFileId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_file', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentsExportFile.prototype, "userManagementAppFileId", void 0);
InstrumentsExportFile = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'instruments-export-file' },
            plural: 'InstrumentsExportFile',
            foreignKeys: {
                fkidx_instrument_export_file_fk_id_file: {
                    name: 'fkidx_instrument_export_file_fk_id_file',
                    foreignKey: 'fk_id_file',
                    entityKey: 'id',
                    entity: 'AppFile'
                }
            },
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], InstrumentsExportFile);
exports.InstrumentsExportFile = InstrumentsExportFile;
//# sourceMappingURL=instruments-export-file.js.map