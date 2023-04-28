"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterDataAppFile = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let MasterDataAppFile = class MasterDataAppFile extends __1.BaseAppFileModel {
    constructor(data) {
        super(data);
    }
};
MasterDataAppFile = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'master_data_file' },
            plural: 'MasterDataAppFiles'
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], MasterDataAppFile);
exports.MasterDataAppFile = MasterDataAppFile;
//# sourceMappingURL=master-data-app-file.model.js.map