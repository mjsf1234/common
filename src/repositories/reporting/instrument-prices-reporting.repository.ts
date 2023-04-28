import {BaseLocalRepository} from '../../repositories';
import {juggler} from '@loopback/repository';
import {InstrumentPricesReporting, InstrumentPricesReportingRelations} from '../../models';

export class InstrumentPricesReportingRepository extends BaseLocalRepository<
  InstrumentPricesReporting,
  typeof InstrumentPricesReporting.prototype.id,
  InstrumentPricesReportingRelations
> {
  constructor(dataSource: juggler.DataSource) {
    super(InstrumentPricesReporting, dataSource);
  }
}
