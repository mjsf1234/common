"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Country = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const _1 = require(".");
const __1 = require("..");
let Country = class Country extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'name', dataType: 'VARCHAR', dataLength: 255, nullable: 'N' },
        jsonSchema: {
            pattern: '^[a-zA-Z\\s]{2,255}$',
            minLength: 2,
            maxLength: 255
        }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Country.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'short_name', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' },
        jsonSchema: {
            pattern: '^[a-zA-Z]{2,10}$',
            minLength: 2,
            maxLength: 10
        }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Country.prototype, "shortName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'country_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Country.prototype, "countryCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Country.prototype, "bosCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'nse_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Country.prototype, "nseCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'bse_code_for_nationality', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Country.prototype, "bseCodeForNationality", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'bse_code_for_registration', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Country.prototype, "bseCodeForRegistration", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'cvl_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Country.prototype, "cvlCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'cams_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' },
        jsonSchema: {
            pattern: '^[a-zA-Z0-9]{1,3}$'
        }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Country.prototype, "camsCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'fatca_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Country.prototype, "fatcaCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => _1.State, { keyTo: 'stateId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], Country.prototype, "states", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => __1.OverseesAddress, { keyTo: 'overseesAddressId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], Country.prototype, "overseesAddresses", void 0);
Country = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            forceId: false,
            indexes: {
                idx_is_active: { keys: { is_active: 1 }, options: { unique: false } },
                idx_created_date: { keys: { created_date: 1 }, options: { unique: false } },
                idx_last_modified_date: { keys: { last_modified_date: 1 }, options: { unique: false } },
                idx_country_name: { keys: { name: 1 }, options: { unique: true, caseInsensitiveUnique: true } }
            },
            postgresql: { tableName: 'country' },
            plural: 'Countries',
            foreignKeys: {},
            hiddenProperties: ['bseCodeForNationality', 'bseCodeForRegistration', 'fatcaCode']
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Country);
exports.Country = Country;
//# sourceMappingURL=country.model.js.map