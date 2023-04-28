import { BaseLocalRepository } from '..';
import { juggler } from '@loopback/repository';
import { PreLoginUser, PreLoginUserRelations } from '../../models';
export declare class PreLoginUserRepository extends BaseLocalRepository<PreLoginUser, typeof PreLoginUser.prototype.id, PreLoginUserRelations> {
    constructor(dataSource: juggler.DataSource);
}
