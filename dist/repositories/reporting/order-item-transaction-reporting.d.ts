import { BaseLocalRepository } from '../../repositories';
import { juggler } from '@loopback/repository';
import { OrderItemsTransactionReporting, OrderItemsTransactionReportingRelations } from '../../models';
export declare class OrderItemsTransactionReportingRepository extends BaseLocalRepository<OrderItemsTransactionReporting, typeof OrderItemsTransactionReporting.prototype.id, OrderItemsTransactionReportingRelations> {
    constructor(dataSource: juggler.DataSource);
}
