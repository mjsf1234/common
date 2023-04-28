"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Captcha = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let Captcha = class Captcha extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'captcha_text', dataType: 'VARCHAR', dataLength: 10, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Captcha.prototype, "captchaText", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'svg', dataType: 'TEXT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Captcha.prototype, "svg", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'unique_id', dataType: 'VARCHAR', dataLength: 30, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Captcha.prototype, "uniqueId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: true,
        postgresql: { columnName: 'expiry', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], Captcha.prototype, "expiry", void 0);
Captcha = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'captcha' },
            plural: 'Captchas',
            hiden: ['captchaText']
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Captcha);
exports.Captcha = Captcha;
//# sourceMappingURL=captcha.model.js.map