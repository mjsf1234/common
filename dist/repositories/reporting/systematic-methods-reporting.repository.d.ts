import { BaseLocalRepository } from '../../repositories';
import { juggler } from '@loopback/repository';
import { SystematicMethodsReporting, SystematicMethodsReportingRelations } from '../../models';
export declare class SystematicMethodsReportingRepository extends BaseLocalRepository<SystematicMethodsReporting, typeof SystematicMethodsReporting.prototype.id, SystematicMethodsReportingRelations> {
    constructor(dataSource: juggler.DataSource);
}
