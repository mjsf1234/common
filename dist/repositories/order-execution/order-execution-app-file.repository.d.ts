import { BaseLocalRepository } from '..';
import { juggler } from '@loopback/repository';
import { OrderExecutionAppFile, OrderExecutionAppFileRelations } from '../../models/order-execution/order-execution-app-file.model';
export declare class OrderExecutionAppFileRepository extends BaseLocalRepository<OrderExecutionAppFile, typeof OrderExecutionAppFile.prototype.id, OrderExecutionAppFileRelations> {
    constructor(dataSource: juggler.DataSource);
}
