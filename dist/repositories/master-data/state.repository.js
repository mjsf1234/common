"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let StateRepository = class StateRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, countryRepositoryGetter, addressRepositoryGetter) {
        super(models_1.State, dataSource);
        this.country = this.createBelongsToAccessorFor('country', countryRepositoryGetter);
        this.addresses = this.createHasManyRepositoryFactoryFor('addresses', addressRepositoryGetter);
        this.registerInclusionResolver('country', this.country.inclusionResolver);
        this.registerInclusionResolver('addresses', this.addresses.inclusionResolver);
    }
};
StateRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('CountryRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('AddressRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function])
], StateRepository);
exports.StateRepository = StateRepository;
//# sourceMappingURL=state.repository.js.map