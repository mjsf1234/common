import { BaseLocalRepository } from '../../repositories';
import { juggler } from '@loopback/repository';
import { DailyInstrumentRollingAlphaSnapshotReporting, DailyInstrumentRollingAlphaSnapshotReportingRelations } from '../../models';
export declare class DailyInstrumentRollingAlphaSnapshotReportingRepository extends BaseLocalRepository<DailyInstrumentRollingAlphaSnapshotReporting, typeof DailyInstrumentRollingAlphaSnapshotReporting.prototype.id, DailyInstrumentRollingAlphaSnapshotReportingRelations> {
    constructor(dataSource: juggler.DataSource);
}
