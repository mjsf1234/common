"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileStorageContainer = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let FileStorageContainer = class FileStorageContainer extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], FileStorageContainer.prototype, "name", void 0);
FileStorageContainer = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], FileStorageContainer);
exports.FileStorageContainer = FileStorageContainer;
//# sourceMappingURL=file-storage-container.model.js.map