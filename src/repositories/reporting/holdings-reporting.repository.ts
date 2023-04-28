import {BaseLocalRepository} from '../../repositories';
import {juggler} from '@loopback/repository';
import {HoldingsReporting, HoldingsReportingRelations} from '../../models';

export class HoldingsReportingRepository extends BaseLocalRepository<
  HoldingsReporting,
  typeof HoldingsReporting.prototype.id,
  HoldingsReportingRelations
> {
  constructor(dataSource: juggler.DataSource) {
    super(HoldingsReporting, dataSource);
  }
}
