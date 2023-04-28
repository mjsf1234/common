import { BaseLocalRepository } from '../../repositories';
import { juggler } from '@loopback/repository';
import { Distributor, DistributorRelations } from '../../models';
export declare class DistributorRepository extends BaseLocalRepository<Distributor, typeof Distributor.prototype.id, DistributorRelations> {
    constructor(dataSource: juggler.DataSource);
}
