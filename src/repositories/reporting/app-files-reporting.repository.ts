import {BaseLocalRepository} from '../../repositories';
import {juggler} from '@loopback/repository';
import {AppFilesReporting, AppFilesReportingRelations} from '../../models';

export class AppFilesReportingRepository extends BaseLocalRepository<
  AppFilesReporting,
  typeof AppFilesReporting.prototype.id,
  AppFilesReportingRelations
> {
  constructor(dataSource: juggler.DataSource) {
    super(AppFilesReporting, dataSource);
  }
}
