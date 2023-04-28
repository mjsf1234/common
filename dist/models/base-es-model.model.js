"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseESModel = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const base_model_model_1 = require("./base-model.model");
let BaseESModel = class BaseESModel extends base_model_model_1.BaseModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: false,
        default: true,
        es: { type: 'boolean' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], BaseESModel.prototype, "isActive", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: false,
        es: { type: 'date' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], BaseESModel.prototype, "createdDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: false,
        es: { type: 'date' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], BaseESModel.prototype, "lastModifiedDate", void 0);
BaseESModel = (0, tslib_1.__decorate)([
    (0, repository_1.model)({ settings: { strict: false } }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], BaseESModel);
exports.BaseESModel = BaseESModel;
//# sourceMappingURL=base-es-model.model.js.map