import {BaseLocalRepository} from '../../repositories';
import {juggler} from '@loopback/repository';
import {OrderItemsTransactionReporting, OrderItemsTransactionReportingRelations} from '../../models';

export class OrderItemsTransactionReportingRepository extends BaseLocalRepository<
  OrderItemsTransactionReporting,
  typeof OrderItemsTransactionReporting.prototype.id,
  OrderItemsTransactionReportingRelations
> {
  constructor(dataSource: juggler.DataSource) {
    super(OrderItemsTransactionReporting, dataSource);
  }
}
