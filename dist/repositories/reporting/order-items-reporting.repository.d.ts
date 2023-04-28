import { BaseLocalRepository } from '../../repositories';
import { juggler } from '@loopback/repository';
import { OrderItemsReporting, OrderItemsReportingRelations } from '../../models';
export declare class OrderItemsReportingRepository extends BaseLocalRepository<OrderItemsReporting, typeof OrderItemsReporting.prototype.id, OrderItemsReportingRelations> {
    constructor(dataSource: juggler.DataSource);
}
