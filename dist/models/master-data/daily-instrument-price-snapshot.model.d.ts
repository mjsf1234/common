import { BaseSQLModel } from '..';
export declare class DailyInstrumentPriceSnapshot extends BaseSQLModel {
    priceDate: Date;
    return?: number;
    openPrice?: number;
    highPrice?: number;
    lowPrice?: number;
    closePrice?: number;
    price: number;
    adjustedPrice?: number;
    movementFromPreviousPrice?: number;
    percentageMovementFromPreviousPrice?: number;
    bosCode?: string;
    source?: number;
    accruedInterest?: number;
    instrumentId: number;
    [prop: string]: any;
    constructor(data?: Partial<DailyInstrumentPriceSnapshot>);
}
export interface DailyInstrumentPriceSnapshotRelations {
}
export declare type DailyInstrumentPriceSnapshotWithRelations = DailyInstrumentPriceSnapshot & DailyInstrumentPriceSnapshotRelations;
