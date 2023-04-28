import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { Instrument, InstrumentRatingMapping, InstrumentRatingMappingRelations, Rating, RatingClassification } from '../../models';
import { InstrumentRepository } from './instrument.repository';
import { RatingRepository } from './rating.repository';
import { RatingClassificationRepository } from './rating-classification.repository';
export declare class InstrumentRatingMappingRepository extends BaseLocalRepository<InstrumentRatingMapping, typeof InstrumentRatingMapping.prototype.id, InstrumentRatingMappingRelations> {
    readonly instrument: BelongsToAccessor<Instrument, typeof InstrumentRatingMapping.prototype.id>;
    readonly rating: BelongsToAccessor<Rating, typeof InstrumentRatingMapping.prototype.id>;
    readonly ratingClassificarion: BelongsToAccessor<RatingClassification, typeof InstrumentRatingMapping.prototype.id>;
    constructor(dataSource: juggler.DataSource, instrumentRepositoryGetter: Getter<InstrumentRepository>, ratingRepositoryGetter: Getter<RatingRepository>, ratingClassificarionRepositoryGetter: Getter<RatingClassificationRepository>);
}
