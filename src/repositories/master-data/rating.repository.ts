import {BaseLocalRepository} from '../../repositories';
import {juggler} from '@loopback/repository';
import {Rating, RatingRelations} from '../../models';

export class RatingRepository extends BaseLocalRepository<Rating, typeof Rating.prototype.id, RatingRelations> {
  constructor(dataSource: juggler.DataSource) {
    super(Rating, dataSource);
  }
}
