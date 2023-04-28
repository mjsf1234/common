"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstrumentHoldingRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let InstrumentHoldingRepository = class InstrumentHoldingRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, parentInstrumentRepositoryGetter, childInstrumentRepositoryGetter) {
        super(models_1.InstrumentHolding, dataSource);
        this.parentInstrument = this.createBelongsToAccessorFor('parentInstrument', parentInstrumentRepositoryGetter);
        this.childInstrument = this.createBelongsToAccessorFor('childInstrument', childInstrumentRepositoryGetter);
        this.registerInclusionResolver('parentInstrument', this.parentInstrument.inclusionResolver);
        this.registerInclusionResolver('childInstrument', this.childInstrument.inclusionResolver);
    }
};
InstrumentHoldingRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('InstrumentRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('InstrumentRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function])
], InstrumentHoldingRepository);
exports.InstrumentHoldingRepository = InstrumentHoldingRepository;
//# sourceMappingURL=instrument-holding.repository.js.map