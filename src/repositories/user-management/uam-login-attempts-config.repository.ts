import {BaseLocalRepository} from '..';
import {juggler} from '@loopback/repository';
import {UamLoginAttemptsConfig, UamLoginAttemptsConfigWithRelations} from '../../models';

export class UamLoginAttemptsConfigRepository extends BaseLocalRepository<
UamLoginAttemptsConfig,
  typeof UamLoginAttemptsConfig.prototype.id,
  UamLoginAttemptsConfigWithRelations
> {
  constructor(dataSource: juggler.DataSource) {
    super(UamLoginAttemptsConfig, dataSource);
  }
}
