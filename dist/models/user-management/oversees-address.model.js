"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OverseesAddress = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let OverseesAddress = class OverseesAddress extends __1.BaseSQLModel {
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
], OverseesAddress.prototype, "addressLine1", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        postgresql: { columnName: 'address_line_2', dataType: 'VARCHAR', dataLength: 120, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OverseesAddress.prototype, "addressLine2", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        postgresql: { columnName: 'address_line_3', dataType: 'VARCHAR', dataLength: 120, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OverseesAddress.prototype, "addressLine3", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'pincode', dataType: 'VARCHAR', dataLength: 15, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OverseesAddress.prototype, "pincode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'city', dataType: 'VARCHAR', dataLength: 100, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OverseesAddress.prototype, "city", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'state', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OverseesAddress.prototype, "state", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        postgresql: { columnName: 'contact_number', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OverseesAddress.prototype, "contactNumber", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        isPseudonym: true,
        postgresql: { columnName: 'landmark', dataType: 'VARCHAR', dataLength: 120, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OverseesAddress.prototype, "landmark", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Country, {
        name: 'country',
        keyFrom: 'countryId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_country', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OverseesAddress.prototype, "countryId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.AddressType, {
        name: 'addressType',
        keyFrom: 'addressTypeId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_address_type', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OverseesAddress.prototype, "addressTypeId", void 0);
OverseesAddress = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'oversees_address' },
            plural: 'OverseesAddresses',
            foreignKeys: {
                fkidx_oversees_add_country_fk_id_country: {
                    name: 'fkidx_oversees_add_country_fk_id_country',
                    foreignKey: 'fk_id_country',
                    entityKey: 'id',
                    entity: 'Country'
                },
                fkidx_oversees_add_address_type_fk_id_address_type: {
                    name: 'fkidx_oversees_add_address_type_fk_id_address_type',
                    foreignKey: 'fk_id_address_type',
                    entityKey: 'id',
                    entity: 'AddressType'
                }
            },
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], OverseesAddress);
exports.OverseesAddress = OverseesAddress;
//# sourceMappingURL=oversees-address.model.js.map