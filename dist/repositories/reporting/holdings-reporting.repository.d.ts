import { BaseLocalRepository } from '../../repositories';
import { juggler } from '@loopback/repository';
import { HoldingsReporting, HoldingsReportingRelations } from '../../models';
export declare class HoldingsReportingRepository extends BaseLocalRepository<HoldingsReporting, typeof HoldingsReporting.prototype.id, HoldingsReportingRelations> {
    constructor(dataSource: juggler.DataSource);
}
