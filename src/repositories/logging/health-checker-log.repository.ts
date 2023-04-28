import {BaseLocalRepository} from '../../repositories';
import {juggler} from '@loopback/repository';
import {HealthCheckerLog, HealthCheckerLogRelations} from '../../models';

export class HealthCheckerLogRepository extends BaseLocalRepository<
  HealthCheckerLog,
  typeof HealthCheckerLog.prototype.id,
  HealthCheckerLogRelations
> {
  constructor(dataSource: juggler.DataSource) {
    super(HealthCheckerLog, dataSource);
  }
}
