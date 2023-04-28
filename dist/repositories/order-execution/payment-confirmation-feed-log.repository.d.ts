import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { PaymentConfirmationFeedLog, PaymentConfirmationFeedLogRelations, ServiceProvider, OrderExecutionAppFile } from '../../models';
import { ServiceProviderRepository } from '../master-data';
import { OrderExecutionAppFileRepository } from '.';
export declare class PaymentConfirmationFeedLogRepository extends BaseLocalRepository<PaymentConfirmationFeedLog, typeof PaymentConfirmationFeedLog.prototype.id, PaymentConfirmationFeedLogRelations> {
    readonly serviceProvider: BelongsToAccessor<ServiceProvider, typeof PaymentConfirmationFeedLog.prototype.id>;
    readonly orderExecutionAppFile: BelongsToAccessor<OrderExecutionAppFile, typeof PaymentConfirmationFeedLog.prototype.id>;
    constructor(dataSource: juggler.DataSource, serviceProviderRepositoryGetter: Getter<ServiceProviderRepository>, orderExecutionAppFileRepositoryGetter: Getter<OrderExecutionAppFileRepository>);
}
