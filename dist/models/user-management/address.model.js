"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let Address = class Address extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        isPseudonym: true,
        postgresql: { columnName: 'address_line_1', dataType: 'VARCHAR', dataLength: 200, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Address.prototype, "addressLine1", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        postgresql: { columnName: 'address_line_2', dataType: 'VARCHAR', dataLength: 120, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Address.prototype, "addressLine2", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        postgresql: { columnName: 'address_line_3', dataType: 'VARCHAR', dataLength: 120, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Address.prototype, "addressLine3", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        postgresql: { columnName: 'full_address', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Address.prototype, "fullAddress", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'pincode', dataType: 'VARCHAR', dataLength: 10, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Address.prototype, "pincode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'district', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Address.prototype, "district", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'city', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Address.prototype, "city", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        postgresql: { columnName: 'contact_number', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Address.prototype, "contactNumber", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        postgresql: { columnName: 'landmark', dataType: 'VARCHAR', dataLength: 120, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Address.prototype, "landmark", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.AddressType, {
        name: 'addressType',
        keyFrom: 'addressTypeId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_address_type', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Address.prototype, "addressTypeId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.State, {
        name: 'state',
        keyFrom: 'stateId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_state', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Address.prototype, "stateId", void 0);
Address = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'address' },
            plural: 'Addresses',
            foreignKeys: {
                fkidx_address_state_fk_id_state: {
                    name: 'fkidx_address_state_fk_id_state',
                    foreignKey: 'fk_id_state',
                    entityKey: 'id',
                    entity: 'State'
                },
                fkidx_address_address_type_fk_id_address_type: {
                    name: 'fkidx_address_address_type_fk_id_address_type',
                    foreignKey: 'fk_id_address_type',
                    entityKey: 'id',
                    entity: 'AddressType'
                }
            },
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Address);
exports.Address = Address;
//# sourceMappingURL=address.model.js.map