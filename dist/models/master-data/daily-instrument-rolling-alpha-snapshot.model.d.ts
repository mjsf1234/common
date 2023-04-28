import { BaseSQLModel } from '..';
export declare class DailyInstrumentRollingAlphaSnapshot extends BaseSQLModel {
    bosCode?: string;
    effectiveDate: Date;
    returnFor1Week?: number;
    returnFor2Week?: number;
    returnFor3Week?: number;
    returnFor1Month?: number;
    returnFor3Month?: number;
    returnFor6Month?: number;
    returnFor1Year?: number;
    returnFor2Year?: number;
    returnFor3Year?: number;
    returnFor5Year?: number;
    sharpeRatioFor1Year?: number;
    sharpeRatioFor3Year?: number;
    sharpeRatioFor5Year?: number;
    volatilityFor1Year?: number;
    volatilityFor3Year?: number;
    volatilityFor5Year?: number;
    avgReturn1Year?: number;
    instrumentId: number;
    [prop: string]: any;
    constructor(data?: Partial<DailyInstrumentRollingAlphaSnapshot>);
}
export interface DailyInstrumentRollingAlphaSnapshotRelations {
}
export declare type DailyInstrumentRollingAlphaSnapshotWithRelations = DailyInstrumentRollingAlphaSnapshot & DailyInstrumentRollingAlphaSnapshotRelations;
