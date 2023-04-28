import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {UAMLog, UAMLogRelations} from '../../models';

export class UAMLogRepository extends BaseLocalRepository<UAMLog, typeof UAMLog.prototype.id, UAMLogRelations> {
  constructor(dataSource: juggler.DataSource) {
    super(UAMLog, dataSource);
  }
}
