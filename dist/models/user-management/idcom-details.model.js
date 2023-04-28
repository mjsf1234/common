"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdcomDetails = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let IdcomDetails = class IdcomDetails extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'redirect_url', dataType: 'Text', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], IdcomDetails.prototype, "redirectUrl", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'auth_code', dataType: 'Text', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], IdcomDetails.prototype, "authCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: false,
        postgresql: { columnName: 'handle_callback_status', dataType: 'BOOLEAN', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], IdcomDetails.prototype, "handleCallbackStatus", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.AppUser, {
        name: 'appUser',
        keyFrom: 'appUserId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_user', dataType: 'INT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], IdcomDetails.prototype, "appUserId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Device, {
        name: 'device',
        keyFrom: 'deviceId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_device', dataType: 'INT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], IdcomDetails.prototype, "deviceId", void 0);
IdcomDetails = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'idcom_details' },
            plural: 'IdcomDetails',
            foreignKeys: {
                fkidx_idcom_details_user_fk_id_user: {
                    name: 'fkidx_idcom_details_user_fk_id_user',
                    foreignKey: 'fk_id_user',
                    entityKey: 'id',
                    entity: 'AppUser'
                },
                fkidx_idcom_details_user_fk_id_device: {
                    name: 'fkidx_idcom_details_user_fk_id_device',
                    foreignKey: 'fk_id_device',
                    entityKey: 'id',
                    entity: 'Device'
                }
            },
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], IdcomDetails);
exports.IdcomDetails = IdcomDetails;
//# sourceMappingURL=idcom-details.model.js.map