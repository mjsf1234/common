import { BaseESModel } from '../base-es-model.model';
export declare class DailyInstrumentRollingAlphaSnapshotReporting extends BaseESModel {
    id?: number;
    dailyInstrumentRollingAlphaSnapshotId: number;
    effectiveDate: Date;
    returnFor1Month?: number;
    returnFor3Month?: number;
    returnFor6Month?: number;
    returnFor1Year?: number;
    returnFor3Year?: number;
    returnFor5Year?: number;
    sharpeRatioFor1Year?: number;
    sharpeRatioFor3Year?: number;
    sharpeRatioFor5Year?: number;
    volatilityFor1Year?: number;
    volatilityFor2Year?: number;
    volatilityFor3Year?: number;
    volatilityFor5Year?: number;
    avgReturn1Year?: number;
    instrumentId?: number;
    instrumentName?: string;
    [prop: string]: any;
    constructor(data?: Partial<DailyInstrumentRollingAlphaSnapshotReporting>);
}
export interface DailyInstrumentRollingAlphaSnapshotReportingRelations {
}
export declare type DailyInstrumentRollingAlphaSnapshotReportingWithRelations = DailyInstrumentRollingAlphaSnapshotReporting & DailyInstrumentRollingAlphaSnapshotReportingRelations;
