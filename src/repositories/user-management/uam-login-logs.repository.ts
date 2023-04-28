import {BaseLocalRepository} from '..';
import {juggler} from '@loopback/repository';
import {UamLoginLogs, UamLoginLogsRelations} from '../../models';

export class UamLoginLogsRepository extends BaseLocalRepository<
UamLoginLogs,
  typeof UamLoginLogs.prototype.id,
  UamLoginLogsRelations
> {
  constructor(dataSource: juggler.DataSource) {
    super(UamLoginLogs, dataSource);
  }
}
