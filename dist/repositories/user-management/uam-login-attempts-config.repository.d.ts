import { BaseLocalRepository } from '..';
import { juggler } from '@loopback/repository';
import { UamLoginAttemptsConfig, UamLoginAttemptsConfigWithRelations } from '../../models';
export declare class UamLoginAttemptsConfigRepository extends BaseLocalRepository<UamLoginAttemptsConfig, typeof UamLoginAttemptsConfig.prototype.id, UamLoginAttemptsConfigWithRelations> {
    constructor(dataSource: juggler.DataSource);
}
