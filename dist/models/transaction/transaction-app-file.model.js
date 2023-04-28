"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionAppFile = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let TransactionAppFile = class TransactionAppFile extends __1.BaseAppFileModel {
    constructor(data) {
        super(data);
    }
};
TransactionAppFile = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'transaction_file' },
            plural: 'TransactionAppFiles'
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], TransactionAppFile);
exports.TransactionAppFile = TransactionAppFile;
//# sourceMappingURL=transaction-app-file.model.js.map