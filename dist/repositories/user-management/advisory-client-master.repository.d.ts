import { BaseLocalRepository } from '../../repositories';
import { juggler } from '@loopback/repository';
import { AdvisoryClientMaster, AdvisoryClientMasterRelations } from '../../models';
export declare class AdvisoryClientMasterRepository extends BaseLocalRepository<AdvisoryClientMaster, typeof AdvisoryClientMaster.prototype.id, AdvisoryClientMasterRelations> {
    constructor(dataSource: juggler.DataSource);
}
