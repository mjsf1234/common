"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MutualFundDetailsRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let MutualFundDetailsRepository = class MutualFundDetailsRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, instrumentRepositoryGetter, directSchemeInstrumentRepositoryGetter, primarySchemeInstrumentRepositoryGetter, systematicMethodSettingRepositoryGetter) {
        super(models_1.MutualFundDetails, dataSource);
        this.instrument = this.createBelongsToAccessorFor('instrument', instrumentRepositoryGetter);
        this.directSchemeInstrument = this.createBelongsToAccessorFor('directSchemeInstrument', directSchemeInstrumentRepositoryGetter);
        this.primarySchemeInstrument = this.createBelongsToAccessorFor('primarySchemeInstrument', primarySchemeInstrumentRepositoryGetter);
        this.systematicMethodSettings = this.createHasManyRepositoryFactoryFor('systematicMethodSettings', systematicMethodSettingRepositoryGetter);
        this.registerInclusionResolver('instrument', this.instrument.inclusionResolver);
        this.registerInclusionResolver('directSchemeInstrument', this.directSchemeInstrument.inclusionResolver);
        this.registerInclusionResolver('primarySchemeInstrument', this.primarySchemeInstrument.inclusionResolver);
        this.registerInclusionResolver('systematicMethodSettings', this.systematicMethodSettings.inclusionResolver);
    }
};
MutualFundDetailsRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('InstrumentRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('InstrumentRepository')),
    (0, tslib_1.__param)(3, repository_1.repository.getter('InstrumentRepository')),
    (0, tslib_1.__param)(4, repository_1.repository.getter('SystematicMethodSettingRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function, Function, Function])
], MutualFundDetailsRepository);
exports.MutualFundDetailsRepository = MutualFundDetailsRepository;
//# sourceMappingURL=mutual-fund-details.repository.js.map