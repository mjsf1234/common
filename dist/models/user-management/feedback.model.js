"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Feedback = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const _1 = require(".");
const __1 = require("..");
let Feedback = class Feedback extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        isPseudonym: true,
        postgresql: { columnName: 'name', dataType: 'VARCHAR', dataLength: 255, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Feedback.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        isPseudonym: true,
        postgresql: { columnName: 'email', dataType: 'VARCHAR', dataLength: 255, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Feedback.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'content', dataType: 'TEXT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Feedback.prototype, "content", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => _1.AppUser, {
        name: 'appUser',
        keyFrom: 'appUserId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_user', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Feedback.prototype, "appUserId", void 0);
Feedback = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'feedback' },
            plural: 'Feedbacks',
            foreignKeys: {
                fkidx_feedback_user_fk_id_user: {
                    name: 'fkidx_feedback_user_fk_id_user',
                    foreignKey: 'fk_id_user',
                    entityKey: 'id',
                    entity: 'AppUser'
                }
            },
            hiddenProperties: ['fk_id_user']
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Feedback);
exports.Feedback = Feedback;
//# sourceMappingURL=feedback.model.js.map