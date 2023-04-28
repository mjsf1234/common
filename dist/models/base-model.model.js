"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseModel = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let BaseModel = class BaseModel extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        id: 1,
        generated: true,
        updateOnly: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BaseModel.prototype, "id", void 0);
BaseModel = (0, tslib_1.__decorate)([
    (0, repository_1.model)({ settings: { strict: false, validateUpsert: true, idInjection: true } }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], BaseModel);
exports.BaseModel = BaseModel;
//# sourceMappingURL=base-model.model.js.map