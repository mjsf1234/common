import {BaseLocalRepository} from '../../repositories';
import {juggler} from '@loopback/repository';
import {SystematicMethodLog, SystematicMethodLogRelations} from '../../models';

export class SystematicMethodLogRepository extends BaseLocalRepository<SystematicMethodLog, typeof SystematicMethodLog.prototype.id, SystematicMethodLogRelations> {
  constructor(dataSource: juggler.DataSource) {
    super(SystematicMethodLog, dataSource);
  }
}