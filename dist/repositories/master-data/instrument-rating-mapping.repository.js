"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstrumentRatingMappingRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let InstrumentRatingMappingRepository = class InstrumentRatingMappingRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, instrumentRepositoryGetter, ratingRepositoryGetter, ratingClassificarionRepositoryGetter) {
        super(models_1.InstrumentRatingMapping, dataSource);
        this.instrument = this.createBelongsToAccessorFor('instrument', instrumentRepositoryGetter);
        this.rating = this.createBelongsToAccessorFor('rating', ratingRepositoryGetter);
        this.ratingClassificarion = this.createBelongsToAccessorFor('ratingClassificarion', ratingClassificarionRepositoryGetter);
        this.registerInclusionResolver('instrument', this.instrument.inclusionResolver);
        this.registerInclusionResolver('rating', this.rating.inclusionResolver);
        this.registerInclusionResolver('ratingClassificarion', this.ratingClassificarion.inclusionResolver);
    }
};
InstrumentRatingMappingRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('InstrumentRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('RatingRepository')),
    (0, tslib_1.__param)(3, repository_1.repository.getter('RatingClassificationRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function, Function])
], InstrumentRatingMappingRepository);
exports.InstrumentRatingMappingRepository = InstrumentRatingMappingRepository;
//# sourceMappingURL=instrument-rating-mapping.repository.js.map