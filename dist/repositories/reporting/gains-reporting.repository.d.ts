import { BaseLocalRepository } from '../../repositories';
import { juggler } from '@loopback/repository';
import { GainsReporting, GainsReportingRelations } from '../../models';
export declare class GainsReportingRepository extends BaseLocalRepository<GainsReporting, typeof GainsReporting.prototype.id, GainsReportingRelations> {
    constructor(dataSource: juggler.DataSource);
}
