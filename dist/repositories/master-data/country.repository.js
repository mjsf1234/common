"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let CountryRepository = class CountryRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, stateRepositoryGetter, overseesAddressRepositoryGetter) {
        super(models_1.Country, dataSource);
        this.states = this.createHasManyRepositoryFactoryFor('states', stateRepositoryGetter);
        this.overseesAddresses = this.createHasManyRepositoryFactoryFor('overseesAddresses', overseesAddressRepositoryGetter);
        this.registerInclusionResolver('states', this.states.inclusionResolver);
        this.registerInclusionResolver('overseesAddresses', this.overseesAddresses.inclusionResolver);
    }
};
CountryRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('StateRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('OverseesAddressRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function])
], CountryRepository);
exports.CountryRepository = CountryRepository;
//# sourceMappingURL=country.repository.js.map