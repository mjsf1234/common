import {BaseLocalRepository} from '..';
import {juggler} from '@loopback/repository';
import {RequestToEngine, RequestToEngineRelations} from '../../models';

export class RequestToEngineRepository extends BaseLocalRepository<
  RequestToEngine,
  typeof RequestToEngine.prototype.id,
  RequestToEngineRelations
> {

  constructor(
    dataSource: juggler.DataSource
  ) {
    super(RequestToEngine, dataSource);
  }
}
