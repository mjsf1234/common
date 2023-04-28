import {BaseLocalRepository} from '../../repositories';
import {juggler} from '@loopback/repository';
import {CronLog, CronLogRelations} from '../../models';

export class CronLogRepository extends BaseLocalRepository<CronLog, typeof CronLog.prototype.id, CronLogRelations> {
  constructor(dataSource: juggler.DataSource) {
    super(CronLog, dataSource);
  }
}
