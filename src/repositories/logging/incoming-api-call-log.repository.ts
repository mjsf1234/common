import {BaseLocalRepository} from '../../repositories';
import {juggler} from '@loopback/repository';
import {IncomingApiCallLog, IncomingApiCallLogRelations} from '../../models';

export class IncomingApiCallLogRepository extends BaseLocalRepository<
  IncomingApiCallLog,
  typeof IncomingApiCallLog.prototype.id,
  IncomingApiCallLogRelations
> {
  constructor(dataSource: juggler.DataSource) {
    super(IncomingApiCallLog, dataSource);
  }
}
