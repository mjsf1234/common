import {BaseLocalRepository} from '../../repositories';
import {juggler} from '@loopback/repository';
import {SystematicMethodsReporting, SystematicMethodsReportingRelations} from '../../models';

export class SystematicMethodsReportingRepository extends BaseLocalRepository<
  SystematicMethodsReporting,
  typeof SystematicMethodsReporting.prototype.id,
  SystematicMethodsReportingRelations
> {
  constructor(dataSource: juggler.DataSource) {
    super(SystematicMethodsReporting, dataSource);
  }
}
