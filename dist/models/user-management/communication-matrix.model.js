"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunicationMatrix = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let CommunicationMatrix = class CommunicationMatrix extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: true,
        default: true,
        postgresql: { columnName: 'mode_email', dataType: 'BOOLEAN', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CommunicationMatrix.prototype, "modeEmail", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: true,
        default: true,
        postgresql: { columnName: 'mode_sms', dataType: 'BOOLEAN', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CommunicationMatrix.prototype, "modeSms", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: true,
        default: true,
        postgresql: { columnName: 'mode_push', dataType: 'BOOLEAN', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CommunicationMatrix.prototype, "modePush", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        postgresql: { columnName: 'toggle_notification', dataType: 'BOOLEAN', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CommunicationMatrix.prototype, "toggleNotification", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.CommunicationTopic, {
        name: 'communicationTopic',
        keyFrom: 'communicationTopicId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_communication_topic', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CommunicationMatrix.prototype, "communicationTopicId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Account, {
        name: 'account',
        keyFrom: 'accountId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_account', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CommunicationMatrix.prototype, "accountId", void 0);
CommunicationMatrix = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'communication_matrix' },
            plural: 'CommunicationMatrix',
            foreignKeys: {},
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], CommunicationMatrix);
exports.CommunicationMatrix = CommunicationMatrix;
//# sourceMappingURL=communication-matrix.model.js.map