import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {PaymentConfirmationFeedLog, PaymentConfirmationFeedLogRelations, ServiceProvider, OrderExecutionAppFile} from '../../models';
import {ServiceProviderRepository} from '../master-data';
import {OrderExecutionAppFileRepository} from '.';

export class PaymentConfirmationFeedLogRepository extends BaseLocalRepository<
  PaymentConfirmationFeedLog,
  typeof PaymentConfirmationFeedLog.prototype.id,
  PaymentConfirmationFeedLogRelations
> {
  public readonly serviceProvider: BelongsToAccessor<ServiceProvider, typeof PaymentConfirmationFeedLog.prototype.id>;
  public readonly orderExecutionAppFile: BelongsToAccessor<OrderExecutionAppFile, typeof PaymentConfirmationFeedLog.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('ServiceProviderRepository')
    serviceProviderRepositoryGetter: Getter<ServiceProviderRepository>,
    @repository.getter('OrderExecutionAppFileRepository')
    orderExecutionAppFileRepositoryGetter: Getter<OrderExecutionAppFileRepository>
  ) {
    super(PaymentConfirmationFeedLog, dataSource);
    this.serviceProvider = this.createBelongsToAccessorFor('serviceProvider', serviceProviderRepositoryGetter);
    this.orderExecutionAppFile = this.createBelongsToAccessorFor('orderExecutionAppFile', orderExecutionAppFileRepositoryGetter);

    this.registerInclusionResolver('serviceProvider', this.serviceProvider.inclusionResolver);
    this.registerInclusionResolver('orderExecutionAppFile', this.orderExecutionAppFile.inclusionResolver);
  }
}
