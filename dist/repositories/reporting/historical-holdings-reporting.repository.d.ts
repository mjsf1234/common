import { BaseLocalRepository } from '../../repositories';
import { juggler } from '@loopback/repository';
import { HistoricalHoldingsReporting, HistoricalHoldingsReportingRelations } from '../../models';
export declare class HistoricalHoldingsReportingRepository extends BaseLocalRepository<HistoricalHoldingsReporting, typeof HistoricalHoldingsReporting.prototype.id, HistoricalHoldingsReportingRelations> {
    constructor(dataSource: juggler.DataSource);
}
