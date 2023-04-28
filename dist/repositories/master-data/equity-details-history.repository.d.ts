import { BaseLocalRepository } from '../../repositories';
import { juggler } from '@loopback/repository';
import { EquityDetailsHistory, EquityDetailsHistoryRelations } from '../../models';
export declare class EquityDetailsHistoryRepository extends BaseLocalRepository<EquityDetailsHistory, typeof EquityDetailsHistory.prototype.id, EquityDetailsHistoryRelations> {
    constructor(dataSource: juggler.DataSource);
}
