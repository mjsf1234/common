import {BaseLocalRepository} from '../../repositories';
import {juggler} from '@loopback/repository';
import {RatingClassification, RatingClassificationRelations} from '../../models';

export class RatingClassificationRepository extends BaseLocalRepository<
  RatingClassification,
  typeof RatingClassification.prototype.id,
  RatingClassificationRelations
> {
  constructor(dataSource: juggler.DataSource) {
    super(RatingClassification, dataSource);
  }
}
