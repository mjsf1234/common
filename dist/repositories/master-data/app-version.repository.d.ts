import { BaseLocalRepository } from '..';
import { juggler } from '@loopback/repository';
import { AppVersion, AppVersionRelations } from '../../models';
export declare class AppVersionRepository extends BaseLocalRepository<AppVersion, typeof AppVersion.prototype.id, AppVersionRelations> {
    constructor(dataSource: juggler.DataSource);
}
