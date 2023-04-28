import { BaseLocalRepository } from '..';
import { juggler } from '@loopback/repository';
import { BalanceSheetReporting, BalanceSheetReportingRelations } from '../../models/reporting/balance-sheet-reporting.model';
export declare class BalanceSheetReportingRepository extends BaseLocalRepository<BalanceSheetReporting, typeof BalanceSheetReporting.prototype.id, BalanceSheetReportingRelations> {
    constructor(dataSource: juggler.DataSource);
}
