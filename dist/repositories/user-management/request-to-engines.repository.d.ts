import { BaseLocalRepository } from '..';
import { juggler } from '@loopback/repository';
import { RequestToEngine, RequestToEngineRelations } from '../../models';
export declare class RequestToEngineRepository extends BaseLocalRepository<RequestToEngine, typeof RequestToEngine.prototype.id, RequestToEngineRelations> {
    constructor(dataSource: juggler.DataSource);
}
