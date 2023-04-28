import {BaseLocalRepository} from '../../repositories';
import {juggler} from '@loopback/repository';
import {ErrorLog, ErrorLogRelations} from '../../models';

export class ErrorLogRepository extends BaseLocalRepository<ErrorLog, typeof ErrorLog.prototype.id, ErrorLogRelations> {
  constructor(dataSource: juggler.DataSource) {
    super(ErrorLog, dataSource);
  }
}
