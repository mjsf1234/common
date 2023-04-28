"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OverseesAddressRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let OverseesAddressRepository = class OverseesAddressRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, countryRepositoryGetter, addressTypeRepositoryGetter) {
        super(models_1.OverseesAddress, dataSource);
        this.country = this.createBelongsToAccessorFor('country', countryRepositoryGetter);
        this.addressType = this.createBelongsToAccessorFor('addressType', addressTypeRepositoryGetter);
        this.registerInclusionResolver('country', this.country.inclusionResolver);
        this.registerInclusionResolver('addressType', this.addressType.inclusionResolver);
    }
};
OverseesAddressRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('CountryRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('AddressTypeRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function])
], OverseesAddressRepository);
exports.OverseesAddressRepository = OverseesAddressRepository;
//# sourceMappingURL=oversees-address.repository.js.map