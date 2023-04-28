"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BondDetailsRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let BondDetailsRepository = class BondDetailsRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, instrumentRepositoryGetter) {
        super(models_1.BondDetails, dataSource);
        this.instrument = this.createBelongsToAccessorFor('instrument', instrumentRepositoryGetter);
        this.registerInclusionResolver('instrument', this.instrument.inclusionResolver);
    }
};
BondDetailsRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('InstrumentRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function])
], BondDetailsRepository);
exports.BondDetailsRepository = BondDetailsRepository;
//# sourceMappingURL=bond-details.repository.js.map