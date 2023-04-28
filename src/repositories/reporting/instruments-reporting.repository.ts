import {BaseLocalRepository} from '../../repositories';
import {juggler} from '@loopback/repository';
import {InstrumentsReporting, InstrumentsReportingRelations} from '../../models';

export class InstrumentsReportingRepository extends BaseLocalRepository<
  InstrumentsReporting,
  typeof InstrumentsReporting.prototype.id,
  InstrumentsReportingRelations
> {
  constructor(dataSource: juggler.DataSource) {
    super(InstrumentsReporting, dataSource);
  }
}
