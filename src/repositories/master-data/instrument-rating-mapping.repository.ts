import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {Instrument, InstrumentRatingMapping, InstrumentRatingMappingRelations, Rating, RatingClassification} from '../../models';
import {InstrumentRepository} from './instrument.repository';
import {RatingRepository} from './rating.repository';
import {RatingClassificationRepository} from './rating-classification.repository';

export class InstrumentRatingMappingRepository extends BaseLocalRepository<
  InstrumentRatingMapping,
  typeof InstrumentRatingMapping.prototype.id,
  InstrumentRatingMappingRelations
> {
  public readonly instrument: BelongsToAccessor<Instrument, typeof InstrumentRatingMapping.prototype.id>;
  public readonly rating: BelongsToAccessor<Rating, typeof InstrumentRatingMapping.prototype.id>;
  public readonly ratingClassificarion: BelongsToAccessor<RatingClassification, typeof InstrumentRatingMapping.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('InstrumentRepository') instrumentRepositoryGetter: Getter<InstrumentRepository>,
    @repository.getter('RatingRepository') ratingRepositoryGetter: Getter<RatingRepository>,
    @repository.getter('RatingClassificationRepository') ratingClassificarionRepositoryGetter: Getter<RatingClassificationRepository>
  ) {
    super(InstrumentRatingMapping, dataSource);
    this.instrument = this.createBelongsToAccessorFor('instrument', instrumentRepositoryGetter);
    this.rating = this.createBelongsToAccessorFor('rating', ratingRepositoryGetter);
    this.ratingClassificarion = this.createBelongsToAccessorFor('ratingClassificarion', ratingClassificarionRepositoryGetter);

    this.registerInclusionResolver('instrument', this.instrument.inclusionResolver);
    this.registerInclusionResolver('rating', this.rating.inclusionResolver);
    this.registerInclusionResolver('ratingClassificarion', this.ratingClassificarion.inclusionResolver);
  }
}
