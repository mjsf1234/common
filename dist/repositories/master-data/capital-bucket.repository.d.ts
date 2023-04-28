import { BaseLocalRepository } from '../../repositories';
import { juggler } from '@loopback/repository';
import { CapitalBucket, CapitalBucketRelations } from '../../models';
export declare class CapitalBucketRepository extends BaseLocalRepository<CapitalBucket, typeof CapitalBucket.prototype.id, CapitalBucketRelations> {
    constructor(dataSource: juggler.DataSource);
}
