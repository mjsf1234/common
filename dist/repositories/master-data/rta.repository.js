"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RtaRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let RtaRepository = class RtaRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, csrFatcaRepositoryGetter) {
        super(models_1.Rta, dataSource);
        this.csrFatca = this.createHasManyRepositoryFactoryFor('csrFatca', csrFatcaRepositoryGetter);
        this.registerInclusionResolver('csrFatca', this.csrFatca.inclusionResolver);
    }
};
RtaRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('CsrFatcaRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function])
], RtaRepository);
exports.RtaRepository = RtaRepository;
//# sourceMappingURL=rta.repository.js.map