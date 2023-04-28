"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstrumentSectorMappingRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let InstrumentSectorMappingRepository = class InstrumentSectorMappingRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, instrumentRepositoryGetter, sectorRepositoryGetter, sectorClassificaionRepositoryGetter) {
        super(models_1.InstrumentSectorMapping, dataSource);
        this.instrument = this.createBelongsToAccessorFor('instrument', instrumentRepositoryGetter);
        this.sector = this.createBelongsToAccessorFor('sector', sectorRepositoryGetter);
        this.sectorClassificaion = this.createBelongsToAccessorFor('sectorClassificaion', sectorClassificaionRepositoryGetter);
        this.registerInclusionResolver('instrument', this.instrument.inclusionResolver);
        this.registerInclusionResolver('sector', this.sector.inclusionResolver);
        this.registerInclusionResolver('sectorClassificaion', this.sectorClassificaion.inclusionResolver);
    }
};
InstrumentSectorMappingRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('InstrumentRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('SectorRepository')),
    (0, tslib_1.__param)(3, repository_1.repository.getter('SectorClassificationRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function, Function])
], InstrumentSectorMappingRepository);
exports.InstrumentSectorMappingRepository = InstrumentSectorMappingRepository;
//# sourceMappingURL=instrument-sector-mapping.repository.js.map